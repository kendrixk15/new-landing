import Image from "next/image";
import Link from "next/link";
import { BarChart3, Check, Star, Globe, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function WhyPage() {
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
                Why TrustFinance?
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Build Trust. Convert Faster. Win in the Financial Market.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Why 180,000+ companies trust TrustFinance to power their
                reputation.
              </p>
            </div>
          </div>
        </section>

        {/* 5 Key Features */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Industry-First TrustScore System
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Trust that can be measured.
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  TrustFinance's proprietary TrustScore algorithm delivers a
                  transparent, data-driven reputation score tailored for
                  financial companies.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Prevents fake reviews with real-time detection & manual
                  moderation.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Recognized as the "Google of financial reputation."
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Verified by AI & human</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Review manipulation protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>SEO-ready score display</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/why/01.png"
                  alt="TrustScore System"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
              <div className="md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Reputation That Converts
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  More than stars — it's your most powerful sales asset.
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Display verified client feedback across your site and sales
                  materials.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Use our Trust Widgets in emails, landing pages, or partner
                  listings.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Businesses using TrustFinance see up to 3× higher B2B
                  conversion rates.
                </p>
                <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>Success Metric:</span>
                  </div>
                  <p className="mt-2">
                    Companies with TrustScore above 8.5 see 40% higher
                    conversion rates on average.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-1">
                <Image
                  src="/images/why/02.png"
                  alt="Reputation Conversion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  All-in-One Reputation Suite
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Everything you need in one platform.
                </h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Review collection (manual, widget, API)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Centralized dashboard to manage and reply to reviews
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Automated post-service invitations & analytics
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Public business profile for SEO + lead generation
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    🧩 WordPress
                  </Badge>
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    🧩 Zapier
                  </Badge>
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    🧩 JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    🧩 APIs
                  </Badge>
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    📊 Real-time analytics
                  </Badge>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/why/03.png"
                  alt="All-in-One Suite"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
              <div className="md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  Trusted by the Financial Ecosystem
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  From Forex brokers to liquidity providers — we're the new
                  global standard.
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Trusted by top players like FBS, Lirunex, RoboForex, and GTCFX
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Used by 180,000+ companies in 50+ countries
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Official review partner for 10+ financial expos
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Trusted by traders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="h-5 w-5 text-primary" />
                    <span className="font-medium">Verified by regulators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="font-medium">Powered by real reviews</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/why/04.png"
                  alt="Trusted by the Financial Ecosystem"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    5
                  </span>
                  Built for Financial Growth
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  We're not a generic review site. We're built for financial
                  dominance.
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Specific features designed for Forex, fintech, IBs, and
                  compliance-heavy businesses
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Tools to help you rank higher, sell faster, and build trust
                  globally
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Exclusive media exposure and event sponsorship programs
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Speak on stage</span>
                  </div>
                  <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Be found online</span>
                  </div>
                  <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Close more B2B clients</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/why/05.png"
                  alt="Financial Growth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl text-primary mb-6">"</div>
              <p className="text-2xl md:text-3xl font-medium mb-8">
                TrustFinance changed the game for us. Our leads doubled after
                getting verified.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                  CEO
                </div>
                <div className="text-left">
                  <p className="font-bold">Leading Forex Brokerage</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Ready to turn reputation into revenue?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/claim">Claim Your Profile</Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link href="/contact">Book a Demo</Link>
                </Button>
                {/* <Button size="lg" variant="secondary" className="gap-2">
                  📄 Download Media Kit
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
