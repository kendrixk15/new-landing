"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Calendar,
  Mail,
  Phone,
  Building,
  User,
  BarChart,
  CheckCircle,
  Upload,
  MessageSquare,
  Clock,
  ChevronRight,
  Star,
  Shield,
  Award,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    traffic: "",
    interests: {
      trustScore: false,
      claimProfile: false,
      addOns: false,
      sponsorship: false,
      reviewCollection: false,
      comparisonTool: false,
    },
    message: "",
    wantDemo: false,
  })
  const [fileUploaded, setFileUploaded] = useState<File | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    if (name === "wantDemo") {
      setFormData({
        ...formData,
        wantDemo: checked,
      })
    } else {
      setFormData({
        ...formData,
        interests: {
          ...formData.interests,
          [name]: checked,
        },
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileUploaded(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData)
    console.log("File uploaded:", fileUploaded)

    // For demo purposes, we'll just set formSubmitted to true
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="text-4xl font-bold mb-4">🎉 Thanks for reaching out!</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Our team will get back to you within 24 hours to schedule a personalized session.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/">↩️ Back to Homepage</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                    📄 Download Brochure
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/claim">🎯 Claim Your Profile</Link>
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
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's grow your reputation — together.</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                Tell us what you need. Our team will help you craft the right solution to build trust and drive results.
              </p>
              <p className="text-lg font-medium mb-8">
                📣 Talk to a reputation advisor. See how TrustFinance can work for your specific case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" onClick={() => setActiveTab("demo")}>
                  <Calendar className="h-5 w-5" /> Book a Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent"
                  onClick={() => setActiveTab("contact")}
                >
                  <Mail className="h-5 w-5" /> Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="md:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="contact">Contact Sales</TabsTrigger>
                    <TabsTrigger value="demo">Book a Demo</TabsTrigger>
                  </TabsList>
                  <TabsContent value="contact">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <Input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="John Smith"
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <Building className="h-4 w-4 text-muted-foreground" />
                                Company Name <span className="text-red-500">*</span>
                              </label>
                              <Input
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Your Company Ltd."
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                Work Email <span className="text-red-500">*</span>
                              </label>
                              <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@company.com"
                                required
                              />
                              <p className="text-xs text-muted-foreground">Preferably corporate domain</p>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                Phone Number (Optional)
                              </label>
                              <Input
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <Building className="h-4 w-4 text-muted-foreground" />
                                Industry <span className="text-red-500">*</span>
                              </label>
                              <Select
                                value={formData.industry}
                                onValueChange={(value) => handleSelectChange("industry", value)}
                                required
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="forex">Forex Broker</SelectItem>
                                  <SelectItem value="fintech">Fintech</SelectItem>
                                  <SelectItem value="compliance">Compliance</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <BarChart className="h-4 w-4 text-muted-foreground" />
                                Monthly Website Traffic
                              </label>
                              <Select
                                value={formData.traffic}
                                onValueChange={(value) => handleSelectChange("traffic", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select traffic volume" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="less-5k">Less than 5,000 visitors</SelectItem>
                                  <SelectItem value="5k-20k">5,000 - 20,000 visitors</SelectItem>
                                  <SelectItem value="20k-50k">20,000 - 50,000 visitors</SelectItem>
                                  <SelectItem value="50k-100k">50,000 - 100,000 visitors</SelectItem>
                                  <SelectItem value="more-100k">More than 100,000 visitors</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="mb-6">
                            <label className="text-sm font-medium mb-2 block">
                              What are you interested in? (Select all that apply)
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="trustScore"
                                  checked={formData.interests.trustScore}
                                  onCheckedChange={(checked) => handleCheckboxChange("trustScore", checked as boolean)}
                                />
                                <label
                                  htmlFor="trustScore"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  TrustScore
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="claimProfile"
                                  checked={formData.interests.claimProfile}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange("claimProfile", checked as boolean)
                                  }
                                />
                                <label
                                  htmlFor="claimProfile"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Claim Profile
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="addOns"
                                  checked={formData.interests.addOns}
                                  onCheckedChange={(checked) => handleCheckboxChange("addOns", checked as boolean)}
                                />
                                <label
                                  htmlFor="addOns"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Add-ons
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="sponsorship"
                                  checked={formData.interests.sponsorship}
                                  onCheckedChange={(checked) => handleCheckboxChange("sponsorship", checked as boolean)}
                                />
                                <label
                                  htmlFor="sponsorship"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Sponsorship
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="reviewCollection"
                                  checked={formData.interests.reviewCollection}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange("reviewCollection", checked as boolean)
                                  }
                                />
                                <label
                                  htmlFor="reviewCollection"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Review Collection
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="comparisonTool"
                                  checked={formData.interests.comparisonTool}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange("comparisonTool", checked as boolean)
                                  }
                                />
                                <label
                                  htmlFor="comparisonTool"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Comparison Tool
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <label className="text-sm font-medium flex items-center gap-2 mb-2">
                              <MessageSquare className="h-4 w-4 text-muted-foreground" />
                              Message / Questions
                            </label>
                            <Textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Tell us about your needs or ask any questions..."
                              rows={4}
                            />
                          </div>

                          <div className="mb-6">
                            <label className="text-sm font-medium flex items-center gap-2 mb-2">
                              <Upload className="h-4 w-4 text-muted-foreground" />
                              Attach File (optional)
                            </label>
                            <Input
                              type="file"
                              onChange={handleFileChange}
                              className="cursor-pointer"
                              accept=".pdf,.jpg,.jpeg,.png"
                            />
                            <p className="text-xs text-muted-foreground mt-1">PDF or Screenshot if needed (max 5MB)</p>
                          </div>

                          <div className="flex items-start space-x-2 mb-8">
                            <Checkbox
                              id="wantDemo"
                              checked={formData.wantDemo}
                              onCheckedChange={(checked) => handleCheckboxChange("wantDemo", checked as boolean)}
                            />
                            <label
                              htmlFor="wantDemo"
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I want to receive a demo walkthrough with your marketing or compliance team.
                            </label>
                          </div>

                          <Button type="submit" size="lg" className="w-full">
                            Submit Request
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="demo">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4">
                          Book a 20-minute session with a TrustFinance Advisor
                        </h2>
                        <p className="text-muted-foreground mb-6">Real human. Real help. Tailored to your goals.</p>

                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                          <h3 className="font-medium mb-4">Select a date and time that works for you</h3>
                          <div
                            className="w-full bg-white dark:bg-gray-800 rounded-lg border overflow-hidden"
                            style={{ height: "600px" }}
                          >
                            <iframe
                              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SMwpbqfsq3xo89S28CZjvOxPA8U-gtXIvbdVBIoSqE5OoqLgLJOSjlZEurYxRLRqRpzVcVmBq?gv=true"
                              style={{ border: 0 }}
                              width="100%"
                              height="600"
                              frameBorder="0"
                              title="Schedule a Demo with TrustFinance"
                              className="rounded-lg"
                            ></iframe>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h3 className="font-medium flex items-center gap-2 mb-2">
                            <Clock className="h-5 w-5 text-blue-600" />
                            What to expect
                          </h3>
                          <ul className="text-sm space-y-1 list-disc pl-5">
                            <li>20-minute personalized session</li>
                            <li>Walkthrough of features relevant to your business</li>
                            <li>Q&A with a TrustFinance specialist</li>
                            <li>Follow-up resources sent after the call</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {/* Need Help Fast Section */}
                <div className="mt-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Need Help Fast?</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <p className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <span className="font-medium">Live chat available during business hours</span>
                      </p>
                      <Button variant="outline" className="w-full bg-transparent">
                        Start Chat
                      </Button>
                    </div>
                    <div className="flex-1">
                      <p className="flex items-center gap-2 mb-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="font-medium">Or email us directly:</span>
                      </p>
                      <a
                        href="mailto:sales@trustfinance.com"
                        className="block text-center p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        sales@trustfinance.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Proposition Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white dark:bg-gray-800 border rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Why Talk to Us?</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Personalized plan for your business</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Walkthrough of how TrustFinance helps you win trust</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Get pricing, use cases, and results tailored to your region</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Learn how other brokers/fintechs use the platform</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span>No pushy sales — just helpful advice</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-bold mb-4">Success Stories</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <Star className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <p className="text-sm">
                            "TrustFinance helped us increase conversions by 38% in just 3 months."
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">— Marketing Director, GTCFX</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm">"Our TrustScore is now a key asset in all our sales presentations."</p>
                          <p className="text-xs text-muted-foreground mt-1">— CEO, Lirunex</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/clients" className="flex items-center gap-1 text-primary hover:underline">
                      View more client stories <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of financial companies who have transformed their online presence with TrustFinance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "The team at TrustFinance understood our needs from day one. Their guidance was invaluable.",
                  name: "Marketing Director",
                  company: "RoboForex",
                  icon: <Award className="h-10 w-10 text-primary" />,
                },
                {
                  quote: "Not just a vendor, but a true partner in our growth journey. Highly recommend their team.",
                  name: "CEO",
                  company: "FBS Markets",
                  icon: <Users className="h-10 w-10 text-primary" />,
                },
                {
                  quote: "Their personalized approach made all the difference. We got exactly what we needed.",
                  name: "Compliance Officer",
                  company: "Lirunex",
                  icon: <Shield className="h-10 w-10 text-primary" />,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4">{testimonial.icon}</div>
                    <p className="italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build trust that converts?</h2>
              <p className="text-xl mb-8">Let's start the conversation today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setActiveTab("contact")
                  }}
                >
                  📨 Contact Sales
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setActiveTab("demo")
                  }}
                >
                  📅 Book a Demo
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
