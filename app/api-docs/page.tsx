"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Code,
  Book,
  Key,
  Zap,
  Shield,
  Globe,
  Database,
  Settings,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Play,
  Download,
  GitBranch,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeEndpoint, setActiveEndpoint] = useState("reviews")

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = [
    {
      id: "reviews",
      name: "Reviews API",
      description: "Manage and retrieve customer reviews",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
    {
      id: "trustscore",
      name: "TrustScore API",
      description: "Get TrustScore data and analytics",
      methods: ["GET"],
    },
    {
      id: "business",
      name: "Business Profile API",
      description: "Manage business profile information",
      methods: ["GET", "PUT"],
    },
    {
      id: "invitations",
      name: "Review Invitations API",
      description: "Send and manage review invitations",
      methods: ["GET", "POST"],
    },
    {
      id: "analytics",
      name: "Analytics API",
      description: "Access reputation analytics and insights",
      methods: ["GET"],
    },
    {
      id: "webhooks",
      name: "Webhooks",
      description: "Real-time notifications for events",
      methods: ["POST"],
    },
  ]

  const sdks = [
    {
      name: "JavaScript/Node.js",
      icon: "🟨",
      description: "Official SDK for JavaScript and Node.js applications",
      installCommand: "npm install @trustfinance/sdk",
      githubUrl: "https://github.com/trustfinance/js-sdk",
    },
    {
      name: "PHP",
      icon: "🟣",
      description: "PHP SDK for easy integration with PHP applications",
      installCommand: "composer require trustfinance/php-sdk",
      githubUrl: "https://github.com/trustfinance/php-sdk",
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Python SDK for data analysis and automation",
      installCommand: "pip install trustfinance-sdk",
      githubUrl: "https://github.com/trustfinance/python-sdk",
    },
    {
      name: "WordPress Plugin",
      icon: "🔌",
      description: "Easy integration for WordPress websites",
      installCommand: "Install from WordPress Plugin Directory",
      githubUrl: "https://github.com/trustfinance/wordpress-plugin",
    },
  ]

  const quickStartCode = `// Initialize TrustFinance SDK
import TrustFinance from '@trustfinance/sdk';

const tf = new TrustFinance({
  apiKey: 'your_api_key_here',
  environment: 'production' // or 'sandbox'
});

// Get business profile
const profile = await tf.business.getProfile();

// Get reviews
const reviews = await tf.reviews.list({
  limit: 10,
  status: 'published'
});

// Get TrustScore
const trustScore = await tf.trustscore.getCurrent();

console.log('TrustScore:', trustScore.score);`

  const authExample = `// Authentication using API Key
const headers = {
  'Authorization': 'Bearer your_api_key_here',
  'Content-Type': 'application/json',
  'X-API-Version': '2024-01'
};

// Example API call
fetch('https://api.trustfinance.com/v1/reviews', {
  method: 'GET',
  headers: headers
})
.then(response => response.json())
.then(data => console.log(data));`

  const reviewsExample = `// Get all reviews
GET /v1/reviews
{
  "data": [
    {
      "id": "rev_123456",
      "rating": 5,
      "title": "Excellent service",
      "content": "Great experience with this broker...",
      "reviewer": {
        "name": "John D.",
        "verified": true
      },
      "created_at": "2024-01-15T10:30:00Z",
      "status": "published"
    }
  ],
  "meta": {
    "total": 245,
    "page": 1,
    "per_page": 10
  }
}

// Create review invitation
POST /v1/invitations
{
  "customer_email": "customer@example.com",
  "customer_name": "John Smith",
  "template_id": "template_123",
  "custom_message": "We'd love your feedback!"
}`

  const trustScoreExample = `// Get current TrustScore
GET /v1/trustscore
{
  "data": {
    "score": 8.7,
    "total_reviews": 245,
    "average_rating": 4.6,
    "score_breakdown": {
      "review_quality": 9.1,
      "response_rate": 8.5,
      "verification_status": 9.0,
      "customer_satisfaction": 8.2
    },
    "trend": {
      "direction": "up",
      "change": 0.3,
      "period": "30_days"
    },
    "last_updated": "2024-01-15T10:30:00Z"
  }
}`

  const webhookExample = `// Webhook payload example
POST https://your-webhook-url.com/trustfinance
{
  "event": "review.created",
  "data": {
    "review": {
      "id": "rev_123456",
      "rating": 5,
      "title": "Great service",
      "content": "Excellent experience...",
      "status": "pending_moderation"
    },
    "business_id": "biz_789012"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "signature": "sha256=abc123..."
}`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-20">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                API Documentation
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">TrustFinance API</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Integrate TrustFinance's reputation management capabilities into your applications with our powerful
                REST API
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" /> Get Started
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-5 w-5" /> Download Postman Collection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white dark:bg-gray-950 border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">REST</div>
                <div className="text-sm text-muted-foreground">API Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">JSON</div>
                <div className="text-sm text-muted-foreground">Response Format</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">OAuth 2.0</div>
                <div className="text-sm text-muted-foreground">Authentication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Navigation Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">API Reference</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      <Link
                        href="#getting-started"
                        className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      >
                        Getting Started
                      </Link>
                      <Link href="#authentication" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                        Authentication
                      </Link>
                      {endpoints.map((endpoint) => (
                        <button
                          key={endpoint.id}
                          onClick={() => setActiveEndpoint(endpoint.id)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                            activeEndpoint === endpoint.id ? "bg-primary/10 text-primary border-r-2 border-primary" : ""
                          }`}
                        >
                          {endpoint.name}
                        </button>
                      ))}
                      <Link href="#sdks" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                        SDKs & Libraries
                      </Link>
                      <Link href="#webhooks" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                        Webhooks
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                    <TabsTrigger value="reference">API Reference</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-8">
                    <div className="space-y-8">
                      {/* Getting Started */}
                      <div id="getting-started">
                        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                        <p className="text-muted-foreground mb-6">
                          The TrustFinance API allows you to programmatically access and manage your business reputation
                          data. Our REST API uses standard HTTP methods and returns JSON responses.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-primary" />
                                Base URL
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <code className="text-sm bg-muted p-2 rounded block">
                                https://api.trustfinance.com/v1
                              </code>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-primary" />
                                Rate Limits
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm">1000 requests per hour per API key</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Authentication */}
                      <div id="authentication">
                        <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                        <p className="text-muted-foreground mb-6">
                          All API requests require authentication using an API key. Include your API key in the
                          Authorization header as a Bearer token.
                        </p>

                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Authentication Example</CardTitle>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(authExample, "auth")}>
                              {copiedCode === "auth" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </CardHeader>
                          <CardContent>
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{authExample}</code>
                            </pre>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Features */}
                      <div>
                        <h2 className="text-2xl font-bold mb-6">API Features</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            {
                              icon: <Database className="h-6 w-6" />,
                              title: "Reviews Management",
                              description: "Create, read, update, and delete customer reviews",
                            },
                            {
                              icon: <Zap className="h-6 w-6" />,
                              title: "Real-time TrustScore",
                              description: "Get live TrustScore data and analytics",
                            },
                            {
                              icon: <Settings className="h-6 w-6" />,
                              title: "Business Profile",
                              description: "Manage your business information and settings",
                            },
                            {
                              icon: <Key className="h-6 w-6" />,
                              title: "Secure Authentication",
                              description: "OAuth 2.0 and API key authentication",
                            },
                          ].map((feature, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{feature.icon}</div>
                                  <div>
                                    <h3 className="font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="quickstart" className="mt-8">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
                        <p className="text-muted-foreground mb-6">
                          Get up and running with the TrustFinance API in just a few minutes.
                        </p>
                      </div>

                      {/* Step 1 */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                              1
                            </span>
                            Get Your API Key
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            First, you'll need to get your API key from your TrustFinance Business dashboard.
                          </p>
                          <Button variant="outline" asChild>
                            <Link href="/contact">Request API Access</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Step 2 */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                              2
                            </span>
                            Install SDK (Optional)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            Install our official SDK for your preferred programming language.
                          </p>
                          <div className="bg-muted p-4 rounded-lg">
                            <code className="text-sm">npm install @trustfinance/sdk</code>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Step 3 */}
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                              3
                            </span>
                            Make Your First API Call
                          </CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(quickStartCode, "quickstart")}
                          >
                            {copiedCode === "quickstart" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{quickStartCode}</code>
                          </pre>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="reference" className="mt-8">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                        <p className="text-muted-foreground mb-6">
                          Complete reference for all available endpoints and methods.
                        </p>
                      </div>

                      {/* Endpoints Grid */}
                      <div className="grid gap-6">
                        {endpoints.map((endpoint) => (
                          <Card key={endpoint.id} className="cursor-pointer hover:shadow-md transition-shadow">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div>
                                  <CardTitle className="flex items-center gap-2">
                                    <Code className="h-5 w-5 text-primary" />
                                    {endpoint.name}
                                  </CardTitle>
                                  <p className="text-sm text-muted-foreground mt-1">{endpoint.description}</p>
                                </div>
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="flex gap-2">
                                {endpoint.methods.map((method) => (
                                  <Badge
                                    key={method}
                                    variant="outline"
                                    className={`text-xs ${
                                      method === "GET"
                                        ? "border-green-500 text-green-700"
                                        : method === "POST"
                                          ? "border-blue-500 text-blue-700"
                                          : method === "PUT"
                                            ? "border-orange-500 text-orange-700"
                                            : "border-red-500 text-red-700"
                                    }`}
                                  >
                                    {method}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples" className="mt-8">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Code Examples</h2>
                        <p className="text-muted-foreground mb-6">
                          Practical examples for common use cases and integrations.
                        </p>
                      </div>

                      {/* Reviews API Example */}
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <CardTitle>Reviews API Examples</CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(reviewsExample, "reviews")}
                          >
                            {copiedCode === "reviews" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{reviewsExample}</code>
                          </pre>
                        </CardContent>
                      </Card>

                      {/* TrustScore API Example */}
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <CardTitle>TrustScore API Examples</CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(trustScoreExample, "trustscore")}
                          >
                            {copiedCode === "trustscore" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{trustScoreExample}</code>
                          </pre>
                        </CardContent>
                      </Card>

                      {/* Webhook Example */}
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <CardTitle>Webhook Payload Example</CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(webhookExample, "webhook")}
                          >
                            {copiedCode === "webhook" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{webhookExample}</code>
                          </pre>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section id="sdks" className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Official SDKs & Libraries</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Use our official SDKs to integrate TrustFinance API quickly and easily
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sdks.map((sdk, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-2xl">{sdk.icon}</span>
                      {sdk.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{sdk.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-3 rounded-lg mb-4">
                      <code className="text-sm">{sdk.installCommand}</code>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={sdk.githubUrl} className="flex items-center gap-1">
                          <GitBranch className="h-4 w-4" />
                          GitHub
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Book className="h-4 w-4 mr-1" />
                        Docs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our developer support team is here to help you integrate successfully
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Book className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">Documentation</h3>
                    <p className="text-sm text-muted-foreground mb-4">Comprehensive guides and tutorials</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/help">View Docs</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Settings className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">Developer Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">Technical support for integration</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact?type=technical">Contact Support</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">API Status</h3>
                    <p className="text-sm text-muted-foreground mb-4">Real-time API status and uptime</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://status.trustfinance.com">
                        Check Status <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
