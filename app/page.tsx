"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-32">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1.5 text-sm">
                Financial Trust Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Build Trust, Increase Sales</h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                TrustFinance helps your business build credibility, increase sales, and grow sustainably with our review
                platform and online reputation management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-md px-6" asChild>
                  <Link href="/claim">Claim Your Profile for Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-md px-6" asChild>
                  <Link href="/services">See Our Services</Link>
                </Button>
                <Button size="lg" variant="link" className="text-primary" asChild>
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 border-none font-medium">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need in One Platform</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Discover how TrustFinance can transform your financial brand's reputation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/why" className="group">
                <div className="h-full p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md hover:border-primary flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Why TrustFinance</h3>
                  <p className="text-gray-700 dark:text-gray-300 flex-grow">
                    Build trust with technology and unlock credibility for your financial brand.
                  </p>
                  <div className="mt-4 text-primary flex items-center gap-1 text-sm font-medium">Learn more →</div>
                </div>
              </Link>

              <Link href="/services" className="group">
                <div className="h-full p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md hover:border-primary flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Services</h3>
                  <p className="text-gray-700 dark:text-gray-300 flex-grow">
                    Comprehensive reputation management solutions for financial companies.
                  </p>
                  <div className="mt-4 text-primary flex items-center gap-1 text-sm font-medium">Learn more →</div>
                </div>
              </Link>

              <Link href="/clients" className="group">
                <div className="h-full p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md hover:border-primary flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Clients</h3>
                  <p className="text-gray-700 dark:text-gray-300 flex-grow">
                    Join the world's top financial companies who trust us with their reputation.
                  </p>
                  <div className="mt-4 text-primary flex items-center gap-1 text-sm font-medium">Learn more →</div>
                </div>
              </Link>

              <Link href="/use-cases" className="group">
                <div className="h-full p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md hover:border-primary flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Use Cases</h3>
                  <p className="text-gray-700 dark:text-gray-300 flex-grow">
                    Tailored solutions for brokers, IBs, and traders in the financial industry.
                  </p>
                  <div className="mt-4 text-primary flex items-center gap-1 text-sm font-medium">Learn more →</div>
                </div>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <Link href="/pricing">
                <Button size="lg" className="gap-2 font-medium">
                  View Pricing →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#4060FF] text-white py-20">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to build trust for your business?</h2>
            <p className="text-xl mb-10 max-w-[600px] mx-auto text-white">
              Start using TrustFinance today and see the results for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#4060FF] hover:bg-gray-100 rounded-md px-8 py-6 font-medium text-base"
                asChild
              >
                <Link href="/claim">Claim Your Profile</Link>
              </Button>
              <Button
                size="lg"
                className="bg-[#4060FF] text-white hover:bg-[#3050E0] rounded-md px-8 py-6 border-2 border-white font-medium text-base"
                asChild
              >
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
