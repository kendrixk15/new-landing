"use client"

import { useState } from "react"
import { ArrowRight, Check, Star, Search, TrendingUp, Award, MapPin, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function UseCasesPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-20">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Use Cases</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                See how financial companies grow with TrustFinance
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-world examples of how brokers, fintechs, and service providers build credibility, increase traffic,
                and close more deals.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real outcomes. Real companies. One reputation platform.</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore how businesses like <span className="font-bold">GTCFX</span>,{" "}
                <span className="font-bold">Lirunex</span>, and <span className="font-bold">RoboForex</span> used
                TrustFinance to increase TrustScore impressions, boost SEO, and improve conversion rates.
              </p>
            </div>

            {/* Industry Filters */}
            <div className="mb-12">
              <div className="flex justify-center mb-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Filter className="h-5 w-5" /> Filter by industry
                </h3>
              </div>
              <Tabs
                defaultValue="all"
                className="w-full max-w-4xl mx-auto"
                onValueChange={(value) => setActiveFilter(value)}
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-7 h-auto p-1">
                  <TabsTrigger value="all" className="text-xs md:text-sm py-2">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="broker" className="text-xs md:text-sm py-2">
                    Broker
                  </TabsTrigger>
                  <TabsTrigger value="fintech" className="text-xs md:text-sm py-2">
                    Payment/Fintech
                  </TabsTrigger>
                  <TabsTrigger value="ib" className="text-xs md:text-sm py-2">
                    IB/Affiliates
                  </TabsTrigger>
                  <TabsTrigger value="legal" className="text-xs md:text-sm py-2">
                    Legal & Compliance
                  </TabsTrigger>
                  <TabsTrigger value="regulated" className="text-xs md:text-sm py-2">
                    Regulated
                  </TabsTrigger>
                  <TabsTrigger value="region" className="text-xs md:text-sm py-2">
                    By Region
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Use Case Cards */}
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto mb-16">
              {/* GTCFX Case */}
              <Card className="overflow-hidden border-2 border-blue-500 dark:border-blue-600">
                <CardContent className="p-0">
                  <div className="bg-blue-500 dark:bg-blue-600 text-white p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">GTCFX — Dominating Brand Keywords on Google</h3>
                      <Badge className="bg-white text-blue-600">Case Study</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Thailand / Forex Broker</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Challenges:</h4>
                        <p className="text-muted-foreground">Low brand visibility, fake reviews damaging credibility</p>

                        <h4 className="font-bold mt-4 mb-2">Solutions Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/30">
                            Verified Profile
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/30">
                            TrustScore Widget
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/30">
                            Article + SEO Add-on
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2">Results:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>+3.2M TrustScore Impressions (2024)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>
                              Rank #1 for keywords: <em>"GTCFX review"</em>, <em>"GTCFX 評判"</em>, <em>"GTCFX รีวิว"</em>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>CTR from TrustFinance to website: ↑ +38%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>TrustScore embedded in all LPs and Telegram</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Button variant="outline" className="gap-2">
                      View Full Use Case <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Lirunex Case */}
              <Card className="overflow-hidden border-2 border-orange-500 dark:border-orange-600">
                <CardContent className="p-0">
                  <div className="bg-orange-500 dark:bg-orange-600 text-white p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">Lirunex — Turning Reviews into SEO Visibility</h3>
                      <Badge className="bg-white text-orange-600">Case Study</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Malaysia / Global Broker</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Challenges:</h4>
                        <p className="text-muted-foreground">
                          Lacked review credibility, low search traffic in JP + TH
                        </p>

                        <h4 className="font-bold mt-4 mb-2">Solutions Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-orange-50 dark:bg-orange-900/30">
                            Verified Badge
                          </Badge>
                          <Badge variant="outline" className="bg-orange-50 dark:bg-orange-900/30">
                            "User Also Look"
                          </Badge>
                          <Badge variant="outline" className="bg-orange-50 dark:bg-orange-900/30">
                            Monthly Articles
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2">Results:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>+600K additional Google impressions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>5 keywords entered Google SERP Top 5</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Review conversion rate ↑ 52% after widget integration</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Button variant="outline" className="gap-2">
                      See Full Results <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* RoboForex Case */}
              <Card className="overflow-hidden border-2 border-green-500 dark:border-green-600">
                <CardContent className="p-0">
                  <div className="bg-green-500 dark:bg-green-600 text-white p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">RoboForex — Boosting Trust & Event Exposure</h3>
                      <Badge className="bg-white text-green-600">Case Study</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Global / Trading Platform</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Challenges:</h4>
                        <p className="text-muted-foreground">Competing with low-trust review sites (e.g., WikiFX)</p>

                        <h4 className="font-bold mt-4 mb-2">Solutions Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-green-50 dark:bg-green-900/30">
                            TrustScore
                          </Badge>
                          <Badge variant="outline" className="bg-green-50 dark:bg-green-900/30">
                            Profile Management
                          </Badge>
                          <Badge variant="outline" className="bg-green-50 dark:bg-green-900/30">
                            Event Sponsorship
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2">Results:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>5-star profile ranked higher than competitors</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>2.9x CTR from event attendees → company page</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>+74% increase in positive reviews after inviting real clients</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Button variant="outline" className="gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Highlighted Metrics Section */}
            <div className="bg-blue-50 dark:bg-gray-900 rounded-xl p-8 max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Comparative Results</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-3 text-left">Impact Area</th>
                      <th className="p-3 text-center">GTCFX</th>
                      <th className="p-3 text-center">Lirunex</th>
                      <th className="p-3 text-center">RoboForex</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">TrustScore Impressions (2024)</td>
                      <td className="p-3 text-center font-bold text-blue-600 dark:text-blue-400">3.2M+</td>
                      <td className="p-3 text-center font-bold text-orange-600 dark:text-orange-400">600K+</td>
                      <td className="p-3 text-center font-bold text-green-600 dark:text-green-400">1.9M+</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-850 border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">Conversion Lift from Reviews</td>
                      <td className="p-3 text-center font-bold text-blue-600 dark:text-blue-400">+38%</td>
                      <td className="p-3 text-center font-bold text-orange-600 dark:text-orange-400">+52%</td>
                      <td className="p-3 text-center font-bold text-green-600 dark:text-green-400">+74%</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">Search Keywords in Top 5</td>
                      <td className="p-3 text-center font-bold text-blue-600 dark:text-blue-400">7+</td>
                      <td className="p-3 text-center font-bold text-orange-600 dark:text-orange-400">5+</td>
                      <td className="p-3 text-center font-bold text-green-600 dark:text-green-400">6+</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-850 border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">Verified Badge Effect</td>
                      <td className="p-3 text-center">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline" /> Yes
                      </td>
                      <td className="p-3 text-center">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline" /> Yes
                      </td>
                      <td className="p-3 text-center">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline" /> Yes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Key Benefits Across All Use Cases</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-center mb-2">SEO Dominance</h4>
                  <p className="text-center text-muted-foreground">
                    Own your brand keywords and appear in relevant searches with verified reviews and rich snippets.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-center mb-2">Conversion Uplift</h4>
                  <p className="text-center text-muted-foreground">
                    Increase conversion rates by 38-74% with verified trust signals and social proof.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-center mb-2">Brand Protection</h4>
                  <p className="text-center text-muted-foreground">
                    Combat fake reviews and control your online narrative with verified profiles and moderation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want similar results for your company?</h2>
              <p className="text-xl mb-8">Let's explore how TrustFinance can accelerate your growth.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2">
                  📄 Download Case Pack PDF
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                >
                  📞 Talk to Sales
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                >
                  🎯 Claim Your Profile
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
