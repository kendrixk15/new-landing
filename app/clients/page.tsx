import Image from "next/image"
import { ArrowRight, Star, Trophy, Award, CheckCircle, Users, Globe, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-20">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Clients</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Serving 180,000+ financial organizations</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From global brokers to fintech innovators — companies use TrustFinance to grow with credibility and
                confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Client Logo Wall */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Who we serve</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A global network of financial brands across brokerage, fintech, and compliance sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { name: "RoboForex", tag: "Verified" },
                { name: "FBS", tag: "Pro Plan" },
                { name: "Lirunex", tag: "Verified" },
                { name: "FXGT", tag: "Verified" },
                { name: "GTCFX", tag: "Pro Plan" },
                { name: "Doo Prime", tag: "Verified" },
                { name: "KVB", tag: "Pro Plan" },
                { name: "Scope Markets", tag: "Verified" },
              ].map((client, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center h-24 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4"
                >
                  <p className="font-bold text-xl text-gray-700 dark:text-gray-300">{client.name}</p>
                  <Badge className="absolute top-2 right-2 text-xs bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    {client.tag}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results at Scale */}
        <section className="py-20 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Results at Scale</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key impact metrics that demonstrate our global reach and effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                {
                  metric: "180,000+",
                  description: "Financial organizations onboarded globally",
                  icon: <Users className="h-8 w-8 mb-3 text-primary" />,
                },
                {
                  metric: "4.6 ★",
                  description: "Average TrustScore of verified businesses",
                  icon: <Star className="h-8 w-8 mb-3 text-primary" />,
                },
                {
                  metric: "2.3M+",
                  description: "Annual TrustScore impressions",
                  icon: <BarChart3 className="h-8 w-8 mb-3 text-primary" />,
                },
                {
                  metric: "40%+",
                  description: "Average conversion uplift post-verification",
                  icon: <ArrowRight className="h-8 w-8 mb-3 text-primary" />,
                },
                {
                  metric: "50+",
                  description: "Countries with active TrustFinance partners",
                  icon: <Globe className="h-8 w-8 mb-3 text-primary" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center">{item.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.metric}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear directly from the financial leaders who trust us with their reputation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "TrustFinance helped us build a credible online presence that actually converts.",
                  name: "CEO",
                  company: "RoboForex",
                  image: "/testimonial-ceo.png",
                },
                {
                  quote: "Since integrating TrustScore and widgets, lead quality and deal closing rates have improved.",
                  name: "CMO",
                  company: "Lirunex",
                  image: "/testimonial-cmo.png",
                },
                {
                  quote: "It's no longer just about ads — it's about trust. And TrustFinance delivers exactly that.",
                  name: "COO",
                  company: "GTCFX",
                  image: "/testimonial-coo.png",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} from ${testimonial.company}`}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Snapshots */}
        <section className="py-20 bg-blue-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Case Snapshots</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from companies using TrustFinance to build their reputation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* GTCFX Case */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">GTCFX</h3>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Success Story
                    </Badge>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>+3.2M TrustScore Impressions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Owns top 3 brand-related search positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Integrated TrustScore into every page & pitch deck</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Lirunex Case */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Lirunex</h3>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Success Story
                    </Badge>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Leveraged "User Also Look" & article placement for visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Achieved significant Google search impression growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Expanded into 3 new markets with verified trust signals</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    See Full Results <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Recognition */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry Recognition</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our clients receive prestigious recognition for their commitment to transparency and trust.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Excellence in Financial Transparency",
                  description: "TrustFinance XPO",
                  icon: <Trophy className="h-10 w-10 text-amber-500" />,
                },
                {
                  title: "Featured in Top 100 Most Trusted Brokers",
                  description: "Industry Recognition",
                  icon: <Award className="h-10 w-10 text-amber-500" />,
                },
                {
                  title: "Strategic partner: Thailand Fintech Association",
                  description: "Official Partnership",
                  icon: <CheckCircle className="h-10 w-10 text-amber-500" />,
                },
              ].map((award, index) => (
                <div
                  key={index}
                  className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border border-blue-100 dark:border-gray-700 flex flex-col items-center text-center"
                >
                  <div className="mb-4">{award.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Grow with the same tools trusted by leading financial brands.
              </h2>
              <p className="text-xl mb-8">Let's elevate your credibility — and turn it into business performance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2">
                  📄 View Solutions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                >
                  🎯 Claim Your Profile
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                >
                  📬 Contact Sales
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
