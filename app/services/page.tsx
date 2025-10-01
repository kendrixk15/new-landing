import Image from "next/image"
import {
  Check,
  Shield,
  Star,
  Globe,
  MessageSquare,
  LineChart,
  Zap,
  Link2,
  FileText,
  Users,
  Megaphone,
  Handshake,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageCTA } from "@/components/page-cta"
import { RelatedPages } from "@/components/related-pages"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative z-10">
            <div className="text-center py-20">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Services</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Reputation. Visibility. Growth.</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to build trust, stand out, and win clients — in one platform.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            {/* Service 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Shield className="h-4 w-4" />
                  Business Profile & Verification
                </div>
                <h2 className="text-3xl font-bold mb-4">Establish your credibility in the financial ecosystem.</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Claim & customize your company profile</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Upload licenses for <span className="font-bold">regulatory verification</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Earn <span className="font-bold">Verified Business Badge</span> to display on TrustFinance and
                        your site
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Multi-language support for global visibility</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800">
                    ✅ Increase Credibility
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800">
                    ✅ Appear in Search and TrustScore Ranking
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800">
                    ✅ Optimize Profile Page for SEO
                  </Badge>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/business-profile-verification.png"
                  alt="Business Profile & Verification"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
              <div className="md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="h-4 w-4" />
                  TrustScore & Trust Widgets
                </div>
                <h2 className="text-3xl font-bold mb-4">Your trust, visualized and measurable.</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Proprietary <span className="font-bold">TrustScore</span> algorithm for finance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Display star ratings + social proof via <span className="font-bold">embeddable widgets</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Use widgets in emails, websites, and sales decks</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800">
                    📊 TrustBox: Carousel, Mini Badge, Email Signature
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800">
                    🔗 SEO-friendly schema markup
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800">
                    📈 Increase Click-through and Conversion Rate up to 30–300%
                  </Badge>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-1">
                <Image src="/trustscore-widgets.png" alt="TrustScore & Trust Widgets" fill className="object-cover" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <MessageSquare className="h-4 w-4" />
                  Review Collection & Management
                </div>
                <h2 className="text-3xl font-bold mb-4">Control the narrative with verified, real feedback.</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Multiple review channels: direct link, invite email, QR code, embedded widget
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Admin dashboard to reply, moderate, and highlight reviews</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Auto-detection of <span className="font-bold">fake or spam reviews</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Social sharing of positive reviews with visual templates</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800">
                    ⚙️ Review Invitation System (manual + automation)
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800">
                    🛡️ Fake review detection + manual moderation
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800">
                    📣 Easily share positive reviews to Facebook, LinkedIn, YouTube
                  </Badge>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/review-management.png"
                  alt="Review Collection & Management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
              <div className="md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <LineChart className="h-4 w-4" />
                  Analytics & Insights
                </div>
                <h2 className="text-3xl font-bold mb-4">Turn feedback into business intelligence.</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Dashboard: see sentiment trends, source tracking, and TrustScore evolution
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Conversion analysis from <span className="font-bold">review invitations</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Benchmarking against competitors in your financial category</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Widget engagement, visitor location, and traffic source insights</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 hover:bg-amber-200 dark:hover:bg-amber-800">
                    📍View Top Review Sources / Device / UX behavior
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 hover:bg-amber-200 dark:hover:bg-amber-800">
                    📊 Track Conversion Rate from Invite to Review
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 hover:bg-amber-200 dark:hover:bg-amber-800">
                    📌 Compare TrustScore with competitors in the same category
                  </Badge>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-1">
                <Image src="/analytics-insights.png" alt="Analytics & Insights" fill className="object-cover" />
              </div>
            </div>

            {/* Service 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Megaphone className="h-4 w-4" />
                  Add-on Services (Boost Your Visibility)
                </div>
                <h2 className="text-3xl font-bold mb-4">Be everywhere your customers search.</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        <span className="font-bold">Articles</span> (written or uploaded): up to 5 per month
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        <span className="font-bold">Banner Ads</span> – placed on homepage, search results, or company
                        profiles
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        <span className="font-bold">User Also Look</span> – appear on other relevant company pages
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        <span className="font-bold">Most Search</span> – appear in high-volume keyword results
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100 hover:bg-rose-200 dark:hover:bg-rose-800">
                    📰 Media placement with backlink
                  </Badge>
                  <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100 hover:bg-rose-200 dark:hover:bg-rose-800">
                    📢 Drive traffic from SEO + brand hijacking
                  </Badge>
                  <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100 hover:bg-rose-200 dark:hover:bg-rose-800">
                    💡 Ideal for visibility campaigns & monthly promos
                  </Badge>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/visibility-boost.png" alt="Add-on Services" fill className="object-cover" />
              </div>
            </div>

            {/* Service 6 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
              <div className="md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Handshake className="h-4 w-4" />
                  Events & Sponsorship Opportunities
                </div>
                <h2 className="text-3xl font-bold mb-4">Go beyond online. Be seen where it matters.</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Showcase at <span className="font-bold">TrustFinance Business</span>,{" "}
                        <span className="font-bold">Connext</span>, and <span className="font-bold">XPO</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Sponsor packages include{" "}
                        <span className="font-bold">booth, keynote slot, VIP dinner, media coverage</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Gain visibility among traders, IBs, fintechs, and media</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-800">
                    🎤 Speak on Stage
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-800">
                    🏢 Booth at Events + PR
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-800">
                    🤝 Business Matching with Leading Brokers
                  </Badge>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-1">
                <Image src="/events-sponsorship.png" alt="Events & Sponsorship" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <div className="my-16 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to elevate your business with TrustFinance?</h2>
          <p className="mb-6">Start today and enjoy numerous benefits</p>
          <PageCTA page="services" className="justify-center" />
        </div>

        {/* Integration Ready */}
        <section className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                <Zap className="h-4 w-4 mr-1" />
                Integration Ready
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Seamless integrations for automation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect TrustFinance with your existing tools and workflows
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {[
                { name: "WordPress Plugin", icon: <Globe className="h-8 w-8 mb-2 text-primary" /> },
                { name: "Zapier (no-code)", icon: <Zap className="h-8 w-8 mb-2 text-primary" /> },
                { name: "JavaScript Embed", icon: <FileText className="h-8 w-8 mb-2 text-primary" /> },
                { name: "API Access", icon: <Link2 className="h-8 w-8 mb-2 text-primary" /> },
                { name: "Webhook + CRM sync", icon: <Users className="h-8 w-8 mb-2 text-primary" /> },
              ].map((integration, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    {integration.icon}
                    <h3 className="font-medium">{integration.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>Roadmap: Salesforce, Zendesk, and more coming soon</p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 mb-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start using TrustFinance today</h2>
          <PageCTA page="services" className="justify-center" />
        </div>

        {/* Related Pages */}
        <RelatedPages page="services" />
      </main>

      <Footer />
    </div>
  )
}
