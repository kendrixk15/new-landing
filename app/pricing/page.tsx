"use client"

import {
  Check,
  X,
  Package,
  Zap,
  Award,
  Calendar,
  Mail,
  Target,
  Star,
  BarChart,
  LineChart,
  Code,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function PricingPage() {
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
                Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choose the right plan to grow with trust.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From startups to industry leaders — scale your reputation with
                flexible packages and high-impact features.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section id="annual-plans" className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Annual Plans</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your business needs and scale as you
                grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    $5,988
                    <span className="text-lg font-normal text-muted-foreground">
                      /year
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Perfect for startups and small businesses
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">1,000</span> Review
                        Invitations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Verified Business Profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>License Verification Badge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">3</span> Custom Email
                        Templates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">5</span> Trust Widgets
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Company Profile Customization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Ad-Free Profile
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Basic</span> Analytics
                        Dashboard
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Email</span> Support
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Choose Basic</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Advance Plan */}
              <Card className="border-2 border-primary relative">
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Advance</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    $11,988
                    <span className="text-lg font-normal text-muted-foreground">
                      /year
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Ideal for growing financial companies
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">5,000</span> Review
                        Invitations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Verified Business Profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>License Verification Badge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">6</span> Custom Email
                        Templates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">8</span> Trust Widgets
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Company Profile Customization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Ad-Free Profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Enhanced</span> Analytics
                        Dashboard
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Priority Email</span>{" "}
                        Support
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Choose Advance</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    $16,788
                    <span className="text-lg font-normal text-muted-foreground">
                      /year
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    For established financial institutions
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Unlimited</span> Review
                        Invitations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Verified Business Profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>License Verification Badge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">10</span> Custom Email
                        Templates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">11</span> Trust Widgets
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Company Profile Customization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Ad-Free Profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Full Insights</span>{" "}
                        Analytics Dashboard
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Dedicated CSM</span>{" "}
                        Support
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Choose Pro</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p>
                All plans are billed annually. Discounts available during
                promotional campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-20 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Add-On Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your plan with these optional add-ons to boost your
                visibility and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Package className="h-5 w-5 text-primary" />
                    Article Package
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Up to 5 TrustFinance-published articles/month
                  </p>
                  <div className="text-2xl font-bold">
                    $700<span className="text-sm font-normal">/month</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="h-5 w-5 text-primary" />
                    Banner Placement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Top visibility on homepage/search/profile
                  </p>
                  <div className="text-2xl font-bold">
                    $700<span className="text-sm font-normal">/month</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Award className="h-5 w-5 text-primary" />
                    User Also Look
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Show your company as related on others' profiles
                  </p>
                  <div className="text-2xl font-bold">
                    $1,200<span className="text-sm font-normal">/month</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-primary" />
                    Most Searched
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Appear on trending keywords & search result boost
                  </p>
                  <div className="text-2xl font-bold">
                    $1,200<span className="text-sm font-normal">/month</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p>Bundle multiple Add-ons for up to 30% savings.</p>
            </div>
          </div>
        </section>

        {/* Compare Plan Features */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All Plans Include</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Core features available across all our plans to help you build
                and manage your reputation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Verified Business Listing
                </h3>
                <p className="text-muted-foreground">
                  Establish credibility with a verified business profile
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  TrustScore System & Widgets
                </h3>
                <p className="text-muted-foreground">
                  Display your reputation score across your digital presence
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Reputation Management Dashboard
                </h3>
                <p className="text-muted-foreground">
                  Monitor and manage your online reputation in one place
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Review Invite and Response Tools
                </h3>
                <p className="text-muted-foreground">
                  Collect and respond to reviews efficiently
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Profile Analytics and Conversion Tracking
                </h3>
                <p className="text-muted-foreground">
                  Measure the impact of your reputation on business results
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Integration Options</h3>
                <p className="text-muted-foreground">
                  Connect with your tools via Zapier, JavaScript, and API
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Block */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/5 dark:to-blue-500/5">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-primary/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-2xl">🎉</span>
                <h2 className="text-2xl font-bold">
                  Mid-Year Mega Deal (until Aug 7)
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="p-3 text-left">Purchase</th>
                          <th className="p-3 text-center">Discount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                          <td className="p-3">Buy 1 package</td>
                          <td className="p-3 text-center font-bold text-green-600">
                            20% OFF
                          </td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-850 border-b border-gray-200 dark:border-gray-700">
                          <td className="p-3">Buy 2+ packages</td>
                          <td className="p-3 text-center font-bold text-green-600">
                            30% OFF
                          </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                          <td className="p-3">
                            Buy full bundle (Plan + Add-ons)
                          </td>
                          <td className="p-3 text-center font-bold text-green-600">
                            40% OFF
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Example:</h3>
                  <p className="mb-4">
                    Advance Plan ($11,988) + Add-ons ($8,400)
                    <br />➡ You pay only{" "}
                    <span className="font-bold text-green-600">
                      $12,228
                    </span>{" "}
                    instead of $20,388!
                  </p>
                  <Button className="w-full">Get Full Offer Details</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Event Bonus */}
        {/* <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                Limited Time Offer
              </div>
              <h2 className="text-3xl font-bold mb-6">VIP Event Bonus</h2>

              <div className="bg-gradient-to-r from-primary/90 to-blue-600/90 text-white p-8 rounded-xl mb-8">
                <div className="flex items-center justify-center gap-2 mb-4 text-xl">
                  <span className="text-2xl">🎟️</span>
                  <h3 className="text-xl font-bold">
                    Purchase Advance or Pro → Get
                  </h3>
                </div>
                <ul className="space-y-4 max-w-md mx-auto text-left mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>
                      <span className="font-bold">3x VIP Tickets</span> to
                      TrustFinance Business
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>
                      <span className="font-bold">40% off</span> TrustFinance
                      XPO Sponsorship (Nov 2025)
                    </span>
                  </li>
                </ul>
                <Button variant="secondary" className="gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build your reputation and grow?
              </h2>
              <p className="text-xl mb-8">
                Choose your plan or talk to our advisor for a tailored solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="gap-2"
                  onClick={() => {
                    const element = document.getElementById("annual-plans")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Choose a Plan
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                >
                  📄 Download Full Pricing Sheet
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
