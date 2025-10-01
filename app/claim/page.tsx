"use client"

import type React from "react"
import { useState, useRef, type RefObject, useEffect } from "react"
import Link from "next/link"
import AvatarImage from "@/components/ui/avatar-image"
import { Search, MessageSquare, CheckCircle, ArrowRight, Clock, AlertCircle, Star, BarChart, Loader2 } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

type FormErrors = {
  companyName?: string
  website?: string
  fullName?: string
  position?: string
  email?: string
  authorized?: string
}

export default function ClaimProfilePage() {
  const [step, setStep] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedCompany, setSelectedCompany] = useState<any>(null)
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    fullName: "",
    position: "",
    email: "",
    phone: "",
    message: "",
    authorized: false,
  })
  const [emailVerified, setEmailVerified] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [verificationSent, setVerificationSent] = useState(false)
  const [claimSubmitted, setClaimSubmitted] = useState(false)
  const [claimApproved, setClaimApproved] = useState(false)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)

  // Refs for focusing on invalid fields
  const companyNameRef = useRef<HTMLInputElement>(null)
  const websiteRef = useRef<HTMLInputElement>(null)
  const fullNameRef = useRef<HTMLInputElement>(null)
  const positionRef = useRef<HTMLButtonElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const authorizedRef = useRef<HTMLButtonElement>(null)

  const fieldRefs: { [key: string]: RefObject<any> } = {
    companyName: companyNameRef,
    website: websiteRef,
    fullName: fullNameRef,
    position: positionRef,
    email: emailRef,
    authorized: authorizedRef,
  }

  // Normalize API result to local shape
  const normalizeCompany = (item: any) => {
    const id = item?.id || item?.slug || item?.company_id || ""
    const name = item?.name || item?.company_name || ""
    const website = item?.hostname || item?.website || item?.domain || ""
    const logo = item?.picture || item?.logo || item?.logo_url || item?.image
    const reviews = item?.totalReview ?? item?.reviews ?? item?.total_reviews ?? 0
    const score = item?.score ?? item?.trustScore ?? item?.trust_score ?? 0
    const isClaimed = item?.isClaimed ?? false

    return { id, name, website, logo, reviews, score, isClaimed }
  }

  // Real search function using TrustFinance API
  const handleSearch = async () => {
    const keyword = searchQuery.trim()
    if (keyword === "") return

    setIsSearching(true)
    setSearchError(null)
    setSearchResults([])
    try {
      const url = `https://api.trustfinance.com/company-search/claim?keyword=${encodeURIComponent(keyword)}`
      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json, text/plain, */*",
        },
      })
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }
      const data = await res.json()
      const items = Array.isArray(data) ? data : data?.results || data?.data || data?.items || []
      const normalized = (items as any[]).map(normalizeCompany).filter((c) => c.name)
      setSearchResults(normalized)
    } catch (err: any) {
      setSearchError(err?.message || "Something went wrong. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        handleSearch()
      } else if (searchQuery.trim() === "") {
        setSearchResults([])
        setSearchError(null)
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  const selectCompany = (company: any) => {
    setSelectedCompany(company)
    setFormData({
      ...formData,
      companyName: company.name,
      website: company.website,
    })
    setFormErrors({}) // Clear errors when selecting a company
    setStep(2)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({ ...formErrors, [name]: undefined })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      position: value,
    })
    if (formErrors.position) {
      setFormErrors({ ...formErrors, position: undefined })
    }
  }

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true
    setFormData({
      ...formData,
      authorized: isChecked,
    })
    if (formErrors.authorized) {
      setFormErrors({ ...formErrors, authorized: undefined })
    }
  }

  const sendVerificationCode = () => {
    setVerificationSent(true)
    setTimeout(() => {
      setEmailVerified(true)
      if (formErrors.email) {
        setFormErrors({ ...formErrors, email: undefined })
      }
    }, 2000)
  }

  const verifyCode = () => {
    if (verificationCode.length === 6) {
      setEmailVerified(true)
      if (formErrors.email) {
        setFormErrors({ ...formErrors, email: undefined })
      }
    }
  }

  const validateStep2 = () => {
    const errors: FormErrors = {}
    if (!formData.companyName) errors.companyName = "Company Name is required."
    if (!formData.website) errors.website = "Official Website is required."
    if (!formData.fullName) errors.fullName = "Your Full Name is required."
    if (!formData.position) errors.position = "Position is required."
    if (!formData.email) {
      errors.email = "Work Email is required."
    }
    if (!formData.authorized) errors.authorized = "You must confirm your authorization."

    setFormErrors(errors)

    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0]
      const fieldRef = fieldRefs[firstErrorField]
      if (fieldRef && fieldRef.current) {
        fieldRef.current.focus()
        fieldRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return false
    }
    return true
  }

  const handleContinueToStep3 = () => {
    if (validateStep2()) {
      setStep(3)
    }
  }

  const submitClaim = async () => {
    setClaimSubmitted(true)
    
    try {
      const claimData = {
        companyId: selectedCompany?.id || "",
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || "",
        position: getPositionValue(formData.position)
      }

      const response = await fetch('https://api.trustfinance.com/v2/claims', {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain, */*',
          'content-type': 'application/json',
        },
        body: JSON.stringify(claimData)
      })

      if (!response.ok) {
        throw new Error(`Claim submission failed: ${response.status}`)
      }

      const result = await response.json()
      console.log('API Response:', result) // Debug log
      
      // API returns the submitted data as confirmation
      // Show the processing state (claimSubmitted) instead of immediate approval
      // The actual approval will come later through a different process
      
      // Keep showing the processing screen
      // setClaimApproved will be set elsewhere (e.g., webhook, manual review, etc.)
    } catch (error: any) {
      console.error('Claim submission error:', error)
      // Reset submission state on error
      setClaimSubmitted(false)
      // You could add error handling UI here
    }
  }

  // Helper function to convert position text to API position value
  const getPositionValue = (position: string): number => {
    switch (position) {
      case 'CEO': return 1
      case 'Marketing': return 2
      case 'Legal': return 3
      case 'ORM': return 4
      case 'Other': return 5
      default: return 5
    }
  }

  const isStepComplete = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return selectedCompany !== null
      case 2:
        return (
          formData.companyName &&
          formData.website &&
          formData.fullName &&
          formData.position &&
          formData.email &&
          formData.authorized
        )
      case 3:
        return true
      default:
        return false
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Step 1: Search for Your Business</h2>
              <p className="text-muted-foreground mb-6">
                Enter your company name or website to find your business profile on TrustFinance.
              </p>

              <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Company Name or Website (e.g., www.test.com)"
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !isSearching && handleSearch()}
                    disabled={isSearching}
                  />
                </div>
                <Button onClick={handleSearch} disabled={isSearching}>
                  {isSearching ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Searching
                    </span>
                  ) : (
                    "Search"
                  )}
                </Button>
              </div>

              {searchError && (
                <div className="text-sm text-destructive mb-4">{searchError}</div>
              )}

              {isSearching ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Searching companies...
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="font-medium">Search Results:</h3>
                  {searchResults.map((company) => (
                    <Card
                      key={company.id}
                      className={`transition-colors ${
                        company.isClaimed 
                          ? "opacity-60 cursor-not-allowed" 
                          : "cursor-pointer hover:border-primary"
                      }`}
                      onClick={() => !company.isClaimed && selectCompany(company)}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                            <AvatarImage src={company.logo} text={company.name} width={40} height={40} />
                          </div>
                          <div>
                            <h4 className="font-medium">{company.name}</h4>
                            <p className="text-sm text-muted-foreground">{company.website}</p>
                            {company.isClaimed && (
                              <p className="text-xs text-muted-foreground mt-1">Already claimed</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{company.score}</span>
                            <span className="text-sm text-muted-foreground">({company.reviews} reviews)</span>
                          </div>
                          {company.isClaimed ? (
                            <Button variant="outline" size="sm" disabled>
                              Already Claimed
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm">
                              Claim Now
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                searchQuery && !isSearching && (
                  <div className="text-center p-8 border border-dashed rounded-lg">
                    <p className="text-muted-foreground mb-4">No companies found matching "{searchQuery}"</p>
                    <Link href="/request-company" className="text-primary hover:underline">
                      Request to add your company
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Step 2: Fill Company Details</h2>
              <p className="text-muted-foreground mb-6">
                Please provide the following information to verify your ownership of this business profile.
              </p>

              {selectedCompany && (
                <Card className="mb-6">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                      <AvatarImage
                        src={selectedCompany.logo}
                        text={selectedCompany.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{selectedCompany.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedCompany.website}</p>
                    </div>
                    <Button variant="outline" className="ml-auto bg-transparent" onClick={() => setStep(1)}>
                      Change
                    </Button>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      ref={companyNameRef}
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Official company name"
                      className={formErrors.companyName ? "border-destructive" : ""}
                    />
                    {formErrors.companyName && <p className="text-sm text-destructive">{formErrors.companyName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Official Website</Label>
                    <Input
                      id="website"
                      name="website"
                      ref={websiteRef}
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://example.com"
                      className={formErrors.website ? "border-destructive" : ""}
                    />
                    {formErrors.website && <p className="text-sm text-destructive">{formErrors.website}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Your Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      ref={fullNameRef}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className={formErrors.fullName ? "border-destructive" : ""}
                    />
                    {formErrors.fullName && <p className="text-sm text-destructive">{formErrors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Select value={formData.position} onValueChange={handleSelectChange}>
                      <SelectTrigger
                        ref={positionRef}
                        className={formErrors.position ? "border-destructive" : ""}
                        id="position"
                      >
                        <SelectValue placeholder="Select your position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CEO">CEO</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Legal">Legal</SelectItem>
                        <SelectItem value="ORM">Online Reputation Management</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.position && <p className="text-sm text-destructive">{formErrors.position}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      ref={emailRef}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@companydomain.com"
                      className={formErrors.email ? "border-destructive" : ""}
                    />
                    {formErrors.email && <p className="text-sm text-destructive mt-2">{formErrors.email}</p>}
                    <p className="text-xs text-muted-foreground">
                      Must use an email with your company domain (e.g., you@test.com)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any additional information or urgent requests..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="authorized"
                      ref={authorizedRef}
                      checked={formData.authorized}
                      onCheckedChange={handleCheckboxChange}
                      className={formErrors.authorized ? "border-destructive" : ""}
                    />
                    <Label htmlFor="authorized" className="text-sm font-normal">
                      I confirm that I am authorized to represent this company.
                    </Label>
                  </div>
                  {formErrors.authorized && <p className="text-sm text-destructive">{formErrors.authorized}</p>}
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={handleContinueToStep3}>Continue</Button>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Step 3: Submit & Verification</h2>
              <p className="text-muted-foreground mb-6">
                Please review your information before submitting your claim request.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Claim Request Summary</CardTitle>
                  <CardDescription>Review the details you have provided for your claim request.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Company Name</p>
                        <p className="font-medium">{formData.companyName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Official Website</p>
                        <p className="font-medium">{formData.website}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Your Name</p>
                        <p className="font-medium">{formData.fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Position</p>
                        <p className="font-medium">{formData.position}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Work Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone Number</p>
                        <p className="font-medium">{formData.phone || "Not provided"}</p>
                      </div>
                    </div>

                    {formData.message && (
                      <div>
                        <p className="text-sm text-muted-foreground">Message</p>
                        <p className="whitespace-pre-wrap">{formData.message}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
                <h3 className="font-medium flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  Verification Process
                </h3>
                <p className="text-sm mb-2">After submission, our system will verify your claim:</p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>If your email domain matches your company website, approval is automatic (within 5 minutes)</li>
                  <li>Otherwise, our admin team will review your claim within 48 hours</li>
                </ul>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button onClick={submitClaim} disabled={claimSubmitted}>
                  {claimSubmitted ? "Processing..." : "Submit Claim Request"}
                </Button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (claimApproved) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-20 bg-background">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold mb-4">🎉 Your Claim Has Been Approved!</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  You now have full control over your business profile on TrustFinance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="https://b2b.trustfinance.com/login" target="_blank" rel="noopener noreferrer">
                      Go to B2B Dashboard <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/help/b2b-guide">Read B2B User Guide</Link>
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

  if (claimSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-20 bg-background">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Claim Request Submitted</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  We're processing your claim request. This may take a few minutes.
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
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
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-20">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="text-center mb-8">
              <Breadcrumb />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Claim your business profile on TrustFinance</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Verify your company, respond to reviews, improve your TrustScore, and gain customer trust.
              </p>
              <Button
                size="lg"
                className="mt-6"
                onClick={() => {
                  const element = document.getElementById("claim-process-start")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Start Claim Process
              </Button>
            </div>
          </div>
        </section>

        <section id="claim-process-start" className="py-8 bg-background border-b sticky top-0 z-10">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center text-center w-1/3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      step >= 1
                        ? isStepComplete(1)
                          ? "bg-green-500 text-white"
                          : "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isStepComplete(1) ? <CheckCircle className="h-6 w-6" /> : "1"}
                  </div>
                  <span className={`text-sm mt-2 ${step === 1 ? "font-medium text-primary" : "text-muted-foreground"}`}>
                    Search
                  </span>
                </div>
                <div className={`flex-1 h-1 transition-colors ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                <div className="flex flex-col items-center text-center w-1/3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      step >= 2
                        ? isStepComplete(2)
                          ? "bg-green-500 text-white"
                          : "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isStepComplete(2) ? <CheckCircle className="h-6 w-6" /> : "2"}
                  </div>
                  <span className={`text-sm mt-2 ${step === 2 ? "font-medium text-primary" : "text-muted-foreground"}`}>
                    Details
                  </span>
                </div>
                <div className={`flex-1 h-1 transition-colors ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                <div className="flex flex-col items-center text-center w-1/3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    3
                  </div>
                  <span className={`text-sm mt-2 ${step === 3 ? "font-medium text-primary" : "text-muted-foreground"}`}>
                    Submit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">{renderStep()}</div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Claiming Your Profile</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take control of your online reputation and leverage the power of trust to grow your business.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader className="items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Respond to Reviews</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Engage with customer feedback, address concerns, and showcase your commitment to customer
                    satisfaction.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Improve TrustScore</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Actively manage your reputation to increase your TrustScore and stand out from competitors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Access Analytics</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Gain valuable insights into your reputation performance and customer sentiment with detailed
                    analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
