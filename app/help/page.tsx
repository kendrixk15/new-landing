"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Book,
  MessageSquare,
  Settings,
  CreditCard,
  Shield,
  ChevronRight,
  Star,
  Users,
  BarChart3,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  FileText,
  Video,
  Download,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Topics", icon: <Book className="h-5 w-5" /> },
    { id: "getting-started", name: "Getting Started", icon: <Star className="h-5 w-5" /> },
    { id: "account", name: "Account Management", icon: <Users className="h-5 w-5" /> },
    { id: "reviews", name: "Reviews & TrustScore", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "analytics", name: "Analytics & Reports", icon: <BarChart3 className="h-5 w-5" /> },
    { id: "integrations", name: "Integrations & API", icon: <Settings className="h-5 w-5" /> },
    { id: "billing", name: "Billing & Plans", icon: <CreditCard className="h-5 w-5" /> },
    { id: "security", name: "Security & Privacy", icon: <Shield className="h-5 w-5" /> },
  ]

  const popularArticles = [
    {
      id: 1,
      title: "How to claim your business profile",
      description: "Step-by-step guide to claiming and verifying your company profile on TrustFinance",
      category: "getting-started",
      readTime: "5 min read",
      views: "2.1k views",
    },
    {
      id: 2,
      title: "Understanding your TrustScore",
      description: "Learn how TrustScore is calculated and how to improve your rating",
      category: "reviews",
      readTime: "8 min read",
      views: "1.8k views",
    },
    {
      id: 3,
      title: "Setting up review invitations",
      description: "Automate review collection from your customers with email invitations",
      category: "reviews",
      readTime: "6 min read",
      views: "1.5k views",
    },
    {
      id: 4,
      title: "Integrating TrustScore widgets",
      description: "Display your TrustScore on your website with embeddable widgets",
      category: "integrations",
      readTime: "10 min read",
      views: "1.3k views",
    },
    {
      id: 5,
      title: "Managing user permissions",
      description: "Add team members and control access to your business account",
      category: "account",
      readTime: "4 min read",
      views: "1.1k views",
    },
    {
      id: 6,
      title: "Understanding analytics dashboard",
      description: "Get insights from your reputation performance metrics",
      category: "analytics",
      readTime: "7 min read",
      views: "980 views",
    },
  ]

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: <Mail className="h-6 w-6" />,
      href: "/contact",
      color: "bg-blue-500",
    },
    {
      title: "Schedule Demo",
      description: "Book a personalized demo",
      icon: <Video className="h-6 w-6" />,
      href: "/contact?type=demo",
      color: "bg-green-500",
    },
    {
      title: "API Documentation",
      description: "Technical integration guides",
      icon: <FileText className="h-6 w-6" />,
      href: "/api-docs",
      color: "bg-purple-500",
    },
    {
      title: "Download Resources",
      description: "Guides and templates",
      icon: <Download className="h-6 w-6" />,
      href: "/resources",
      color: "bg-orange-500",
    },
  ]

  const filteredArticles =
    activeCategory === "all"
      ? popularArticles
      : popularArticles.filter((article) => article.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-20">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Help Center</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Find answers, guides, and resources to get the most out of TrustFinance Business
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for help articles, guides, or FAQs..."
                    className="pl-12 pr-4 py-6 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
              <p className="text-muted-foreground">Get immediate help or access key resources</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href} className="group">
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 rounded-full ${action.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        {action.icon}
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Browse by Category</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted transition-colors ${
                            activeCategory === category.id ? "bg-primary/10 text-primary border-r-2 border-primary" : ""
                          }`}
                        >
                          {category.icon}
                          <span className="text-sm font-medium">{category.name}</span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Articles Content */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {activeCategory === "all"
                      ? "Popular Articles"
                      : categories.find((c) => c.id === activeCategory)?.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
                  </p>
                </div>

                <div className="grid gap-6">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="outline" className="text-xs">
                            {categories.find((c) => c.id === article.category)?.name}
                          </Badge>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{article.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                          <span>{article.views}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about TrustFinance Business
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-8">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          What is TrustFinance Business?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          TrustFinance Business is a comprehensive reputation management platform designed specifically
                          for financial companies. It helps you collect verified reviews, manage your online reputation,
                          and build trust with potential clients through our proprietary TrustScore system.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          How does the TrustScore work?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          TrustScore is calculated using our proprietary algorithm that considers multiple factors
                          including review quality, reviewer verification, response rates, business verification status,
                          and overall customer satisfaction trends. The score ranges from 1-10 and is updated in
                          real-time.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          Can I respond to reviews?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Yes! Once you claim your business profile, you can respond to all reviews. We recommend
                          responding professionally to both positive and negative reviews to show that you value
                          customer feedback and are committed to excellent service.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="mt-8">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          What's included in the Basic plan?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          The Basic plan includes 1,000 review invitations, verified business profile, license
                          verification badge, 3 custom email templates, 5 trust widgets, company profile customization,
                          basic analytics dashboard, and email support.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          Can I upgrade or downgrade my plan?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately,
                          while downgrades take effect at the next billing cycle. Contact our sales team for assistance
                          with plan changes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          Do you offer custom enterprise solutions?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Yes, we offer custom enterprise solutions for large financial institutions with specific
                          requirements. Contact our sales team to discuss your needs and get a tailored quote.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="mt-8">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          How do I integrate TrustScore widgets?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          You can integrate TrustScore widgets using our JavaScript embed code, WordPress plugin, or
                          API. Detailed integration guides are available in our technical documentation section.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          Is there an API available?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Yes, we provide a comprehensive REST API that allows you to integrate TrustFinance
                          functionality into your existing systems. API access is available on Advance and Pro plans.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          What integrations do you support?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We support integrations with WordPress, Zapier, various CRM systems, and custom integrations
                          via our API. We're constantly adding new integrations based on customer demand.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="support" className="mt-8">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          How can I contact support?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          You can contact support via email at support@trustfinance.com, through our contact form, or
                          via live chat during business hours (Mon-Fri, 9:00-18:00 GMT+7). Pro plan customers get
                          priority support with dedicated account managers.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          What are your support hours?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Our support team is available Monday through Friday, 9:00 AM to 6:00 PM (GMT+7). Email support
                          is available 24/7 with responses typically within 24 hours.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          Do you offer training or onboarding?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Yes! We provide comprehensive onboarding for all new customers, including platform training,
                          best practices guidance, and setup assistance. Pro plan customers receive dedicated onboarding
                          sessions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still need help?</h2>
              <p className="text-xl mb-8">Our support team is here to help you succeed with TrustFinance Business</p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <Mail className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Email Support</h3>
                  <p className="text-sm opacity-90">support@trustfinance.com</p>
                  <p className="text-xs opacity-75 mt-1">Response within 24 hours</p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <Phone className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Live Chat</h3>
                  <p className="text-sm opacity-90">Available during business hours</p>
                  <p className="text-xs opacity-75 mt-1">Mon-Fri, 9:00-18:00 GMT+7</p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <Video className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Schedule Demo</h3>
                  <p className="text-sm opacity-90">Personalized walkthrough</p>
                  <p className="text-xs opacity-75 mt-1">Book a 30-minute session</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="/contact">
                    <Mail className="h-5 w-5" /> Contact Support
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                  asChild
                >
                  <Link href="/contact?type=demo">
                    <Video className="h-5 w-5" /> Schedule Demo
                  </Link>
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
