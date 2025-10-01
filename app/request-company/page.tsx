"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { Building, Globe, Mail, Phone, User, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PositionSelector, { type PositionItem } from "@/components/ui/position-selector"
import PhoneNumberSelector, { type PhoneCountryItem } from "@/components/ui/phone-number-selector"

export default function RequestCompanyPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    companyRegion: "",
    workingEmail: "",
    fullName: "",
    position: "",
    phoneNumber: "",
    additionalInfo: "",
  })
  const [selectedPositionId, setSelectedPositionId] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoadingMeta, setIsLoadingMeta] = useState(true)

  // Fetched lists
  const [positions, setPositions] = useState<PositionItem[]>([])
  const [countries, setCountries] = useState<PhoneCountryItem[]>([])
  const [metaError, setMetaError] = useState<string | null>(null)

  useEffect(() => {
    let isCancelled = false
    const fetchMeta = async () => {
      try {
        const [posRes, phoneRes] = await Promise.all([
          fetch("https://api.trustfinance.com/positions", { headers: { accept: "application/json, text/plain, */*" } }),
          fetch("https://api.trustfinance.com/phone-codes", { headers: { accept: "application/json, text/plain, */*" } }),
        ])
        if (!posRes.ok || !phoneRes.ok) throw new Error("Failed to load metadata")
        const posJson = await posRes.json()
        const phoneJson = await phoneRes.json()
        
        console.log('Raw positions:', posJson)
        console.log('Raw phone codes:', phoneJson)
        console.log('Phone codes type:', typeof phoneJson)
        console.log('Phone codes keys:', phoneJson ? Object.keys(phoneJson) : 'null/undefined')
        
        if (isCancelled) return
        
        // Normalize positions data
        const normalizedPositions: PositionItem[] = Array.isArray(posJson)
          ? posJson.map((p: any) => ({ 
              id: p?.id ?? p?.value ?? 0, 
              name: p?.name ?? p?.label ?? "" 
            })).filter((p: PositionItem) => p.name)
          : []
        
        // Normalize phone codes data - handle various response structures
        let normalizedCountries: PhoneCountryItem[] = []
        
        if (Array.isArray(phoneJson)) {
          normalizedCountries = phoneJson.map((c: any) => ({
            label: c?.label || c?.name || c?.countryName || c?.country?.name || "",
            phoneCode: c?.phoneCode || c?.dialCode || c?.code || c?.phone_code || c?.dial_code || "",
            flag: c?.flag || c?.country?.picture || c?.flagUrl || c?.flag_url || undefined,
            value: c?.value || c?.alpha2 || c?.alpha3 || c?.country?.code || undefined,
            countryPicture: c?.flag || c?.country?.picture || undefined,
          })).filter((c: PhoneCountryItem) => c.label && c.phoneCode)
        } else if (phoneJson?.data && Array.isArray(phoneJson.data)) {
          // Handle nested data structure
          normalizedCountries = phoneJson.data.map((c: any) => ({
            label: c?.label || c?.name || c?.countryName || c?.country?.name || "",
            phoneCode: c?.phoneCode || c?.dialCode || c?.code || c?.phone_code || "",
            flag: c?.flag || c?.country?.picture || c?.flagUrl || c?.flag_url || undefined,
            value: c?.value || c?.alpha2 || c?.alpha3 || c?.country?.code || undefined,
            countryPicture: c?.flag || c?.country?.picture || undefined,
          })).filter((c: PhoneCountryItem) => c.label && c.phoneCode)
        } else if (phoneJson?.results && Array.isArray(phoneJson.results)) {
          // Handle results structure
          normalizedCountries = phoneJson.results.map((c: any) => ({
            label: c?.label || c?.name || c?.countryName || c?.country?.name || "",
            phoneCode: c?.phoneCode || c?.dialCode || c?.code || c?.phone_code || "",
            flag: c?.flag || c?.country?.picture || c?.flagUrl || c?.flag_url || undefined,
            value: c?.value || c?.alpha2 || c?.alpha3 || c?.country?.code || undefined,
            countryPicture: c?.flag || c?.country?.picture || undefined,
          })).filter((c: PhoneCountryItem) => c.label && c.phoneCode)
        }
        
        console.log('Normalized positions:', normalizedPositions)
        console.log('Normalized countries:', normalizedCountries)
        console.log('Countries count:', normalizedCountries.length)
        
        setPositions(normalizedPositions)
        setCountries(normalizedCountries)
        setIsLoadingMeta(false) // Set loading to false on success
      } catch (e: any) {
        console.error('Metadata fetch error:', e)
        setMetaError(e?.message || "Failed to load options")
        setIsLoadingMeta(false) // Set loading to false on error too
      }
    }
    fetchMeta()
    return () => {
      isCancelled = true
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Map form data to API requirements
      const apiData = {
        companyName: formData.companyName.trim(),
        hostname: formData.websiteUrl.replace(/^https?:\/\//, '').replace(/^www\./, ''),
        email: formData.workingEmail.trim(),
        fullName: formData.fullName.trim(),
        phone: formData.phoneNumber.trim(),
        country: formData.companyRegion.trim(),
        positionId: selectedPositionId ?? getPositionId(formData.position)
      }

      const response = await fetch('https://api.trustfinance.com/prepare-company', {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain, */*',
          'content-type': 'application/json',
        },
        body: JSON.stringify(apiData)
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const result = await response.json()
      console.log('API Response:', result)
      
      // If we get here, the request was successful
      setIsSubmitted(true)
    } catch (error: any) {
      console.error('Submit error:', error)
      setSubmitError(error.message || 'Failed to submit request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper function to convert position text to positionId
  const getPositionId = (position: string): number => {
    const positionMap: { [key: string]: number } = {
      'CEO': 1,
      'Marketing': 2,
      'Legal': 3,
      'ORM': 4,
      'Developer': 4,
      'Other': 5
    }
    
    if (positionMap[position]) return positionMap[position]
    const lowerPosition = position.toLowerCase()
    for (const [key, value] of Object.entries(positionMap)) {
      if (lowerPosition.includes(key.toLowerCase())) return value
    }
    return 5
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                  <Send className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="text-4xl font-bold mb-4">🎉 Request Submitted Successfully!</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Thank you for your request. Our team will review your submission and add your company to TrustFinance
                  within 2-3 business days.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/">Return to Homepage</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact">Contact Support</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-20">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">TrustConnect</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                TrustConnect Increase Your <span className="text-primary">Exposure</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join the force of 180,000+ businesses and help consumers to share their experiences
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold">TrustConnect</CardTitle>
                  <CardDescription className="text-lg">
                    TrustConnect indicates that the company is connected to TrustFinance and its network of customers
                    and partners. Which allows you to claim your business profile on TrustFinance and enjoy many
                    benefits
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Company Information */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            Company name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Enter company name"
                            required
                          />
                          <p className="text-xs text-muted-foreground">Example: TrustFinance</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="websiteUrl" className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            Website URL <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="websiteUrl"
                            name="websiteUrl"
                            value={formData.websiteUrl}
                            onChange={handleInputChange}
                            placeholder="https://example.com"
                            required
                          />
                          <p className="text-xs text-muted-foreground">Example: www.trustfinance.com</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="companyRegion" className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          Company region <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="companyRegion"
                          name="companyRegion"
                          value={formData.companyRegion}
                          onChange={handleInputChange}
                          placeholder="Enter company region"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Example: Singapore</p>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-6">
                      <div className="border-t pt-6">
                        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                        <p className="text-muted-foreground mb-6">
                          We collect your personal information to reach out to you conveniently, to confirm your
                          identity and role, and to walk you through our platform and services that are tailored to your
                          expectations and objectives.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="workingEmail" className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          Working email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="workingEmail"
                          name="workingEmail"
                          type="email"
                          value={formData.workingEmail}
                          onChange={handleInputChange}
                          placeholder="Ex. demo@trustfinance.com"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Example: working@trustfinance.com</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            Full name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            required
                          />
                          <p className="text-xs text-muted-foreground">Example: Rumble Wilder</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="position" className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            Position <span className="text-red-500">*</span>
                          </Label>
                          <div className="h-12">
                            <PositionSelector
                              errors={{ position: formData.position ? undefined : "Required" }}
                              positionList={positions}
                              value={formData.position}
                              onChange={(name, id) => {
                                setFormData((prev) => ({ ...prev, position: name }))
                                setSelectedPositionId(id ?? null)
                              }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">Example: Developer</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          Phone number <span className="text-red-500">*</span>
                        </Label>
                        <div className="h-12">
                          {isLoadingMeta ? (
                            <div className="h-full flex items-center justify-center bg-muted rounded-md">
                              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                              <span className="ml-2 text-sm text-muted-foreground">Loading phone codes...</span>
                            </div>
                          ) : metaError ? (
                            <div className="h-full flex items-center justify-center bg-red-50 border border-red-200 rounded-md">
                              <span className="text-sm text-red-600">Failed to load phone codes</span>
                            </div>
                          ) : countries.length === 0 ? (
                            <div className="h-full flex items-center justify-center bg-muted rounded-md">
                              <span className="text-sm text-muted-foreground">No phone codes available</span>
                            </div>
                          ) : (
                            <PhoneNumberSelector
                              errors={{ phoneNumber: formData.phoneNumber ? undefined : "Required" }}
                              countryList={countries}
                              value={formData.phoneNumber}
                              onChange={(fullPhone) => setFormData((prev) => ({ ...prev, phoneNumber: fullPhone }))}
                            />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">Example: (+1) 123 456 7890</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          placeholder="Any additional information about your company or special requirements..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {submitError && (
                      <div className="text-sm text-destructive text-center">{submitError}</div>
                    )}
                    
                    <div className="flex justify-center pt-6">
                      <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send request
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Join TrustConnect?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the benefits of being part of the TrustFinance network
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Visibility</h3>
                <p className="text-muted-foreground">
                  Get your company listed on TrustFinance and increase your online presence in the financial industry.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Access to Tools</h3>
                <p className="text-muted-foreground">Unlock tools to manage your presence and credibility effectively.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-muted-foreground">Get help from our team to set up your profile and start quickly.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
