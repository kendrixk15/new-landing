"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Award, Mic, Globe, ChevronRight, Star, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoGallery } from "@/components/photo-gallery"

const vision2025Images = [
  { src: "/events/gallery/vision-1.png", alt: "Speaker on stage at TrustFinance Vision 2025" },
  { src: "/events/gallery/vision-2.png", alt: "Audience at TrustFinance Vision 2025" },
  { src: "/events/gallery/vision-3.png", alt: "Networking session at TrustFinance Vision 2025" },
  { src: "/events/gallery/vision-4.png", alt: "Panel discussion at TrustFinance Vision 2025" },
]

const business2025Images = [
  { src: "/events/gallery/business-1.png", alt: "Business pitching session at TrustFinance Business 2025" },
  { src: "/events/gallery/business-2.png", alt: "Business matching at TrustFinance Business 2025" },
  { src: "/events/gallery/business-3.png", alt: "VIP gala dinner at TrustFinance Business 2025" },
  { src: "/events/gallery/business-4.png", alt: "Group photo of partners at TrustFinance Business 2025" },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="text-center">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                TrustFinance Events 2025–2026
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Empowering the Financial World Through Trust and Transparency
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                TrustFinance is committed to shaping the future of finance through curated events that connect global
                leaders, top-tier financial firms, and forward-thinking innovators. Our events foster business
                collaboration, market insight, and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="#events-calendar">
                    <Calendar className="h-5 w-5" /> View Events
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Tabs */}
        <section id="events-calendar" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Events Calendar</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay tuned to our key events throughout the year.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                <div className="space-y-12">
                  {/* Event 1: Connext */}
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-5">
                        <div className="relative h-56 md:h-auto md:col-span-2">
                          <Image
                            src="/trustfinance-connext-2025.png"
                            alt="TrustFinance Connext 2025"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:p-8 md:col-span-3">
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                            <Badge variant="outline">
                              <Calendar className="h-3 w-3 mr-1.5" /> 8 August 2025
                            </Badge>
                            <Badge variant="outline">
                              <MapPin className="h-3 w-3 mr-1.5" /> Bangkok, Thailand
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">TrustFinance Connext 2025</h3>
                          <p className="text-muted-foreground mb-6">
                            A future-focused financial event spotlighting the trends, innovations, and challenges
                            shaping the next phase of the industry. Connect with brokers, traders, IBs, and ecosystem
                            enablers in a day packed with keynotes, expert panels, and curated business networking.
                          </p>
                          <div className="flex flex-wrap gap-4 items-center">
                            <Button className="gap-2">
                              Register Interest <ChevronRight className="h-4 w-4" />
                            </Button>
                            <Button variant="outline">Learn More</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Event 2: XPO */}
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-5">
                        <div className="relative h-56 md:h-auto md:col-span-2">
                          <Image
                            src="/trustfinance-xpo-2025.png"
                            alt="TrustFinance XPO 2025"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">Largest in SEA</Badge>
                          </div>
                        </div>
                        <div className="p-6 md:p-8 md:col-span-3">
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                            <Badge variant="outline">
                              <Calendar className="h-3 w-3 mr-1.5" /> 9–11 November 2025
                            </Badge>
                            <Badge variant="outline">
                              <MapPin className="h-3 w-3 mr-1.5" /> MITEC, Kuala Lumpur, Malaysia
                            </Badge>
                            <Badge variant="outline">
                              <Users className="h-3 w-3 mr-1.5" /> 10,000+ Attendees
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">TrustFinance XPO 2025</h3>
                          <p className="text-muted-foreground mb-4">
                            The largest financial expo in Southeast Asia, welcoming over 10,000 attendees from around
                            the world under the theme:{" "}
                            <span className="font-semibold text-foreground">
                              Trust Empowered | Trust Connected | Trust Future
                            </span>
                            .
                          </p>
                          <div className="mb-6">
                            <h4 className="font-semibold mb-2">Event Highlights:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <Mic className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>Global keynote speakers & expert panels</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>KOL Lounge & Networking Nights</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Ticket className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>Live workshops & tech showcases</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Award className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>Trust Awards Ceremony</span>
                              </li>
                              <li className="flex items-start gap-2 sm:col-span-2">
                                <Globe className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>Exhibition Hall with 100+ financial & fintech brands</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-4 items-center">
                            <Button className="gap-2">
                              Become a Sponsor <ChevronRight className="h-4 w-4" />
                            </Button>
                            <Button variant="outline">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="past">
                <div className="space-y-12">
                  {/* Past Event 1: Vision */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-5">
                        <div className="relative h-56 md:h-auto md:col-span-2">
                          <Image
                            src="/trustfinance-vision-2025.png"
                            alt="TrustFinance Vision 2025"
                            fill
                            className="object-cover opacity-70"
                          />
                        </div>
                        <div className="p-6 md:p-8 md:col-span-3">
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                            <Badge variant="secondary">
                              <Calendar className="h-3 w-3 mr-1.5" /> 17 January 2025
                            </Badge>
                            <Badge variant="secondary">
                              <MapPin className="h-3 w-3 mr-1.5" /> Bangkok, Thailand
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">TrustFinance Vision 2025</h3>
                          <p className="text-muted-foreground mb-6">
                            An exclusive kickoff event to unveil TrustFinance’s strategic vision and commitment to
                            financial integrity and transparency, joined by industry thought leaders and partners.
                          </p>
                          <div className="flex flex-wrap gap-4 items-center">
                            <PhotoGallery eventName="TrustFinance Vision 2025" images={vision2025Images} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Past Event 2: Business */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-5">
                        <div className="relative h-56 md:h-auto md:col-span-2">
                          <Image
                            src="/trustfinance-business-2025.png"
                            alt="TrustFinance Business 2025"
                            fill
                            className="object-cover opacity-70"
                          />
                        </div>
                        <div className="p-6 md:p-8 md:col-span-3">
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                            <Badge variant="secondary">
                              <Calendar className="h-3 w-3 mr-1.5" /> 9 May 2025
                            </Badge>
                            <Badge variant="secondary">
                              <MapPin className="h-3 w-3 mr-1.5" /> Gaysorn Urban Resort, Bangkok
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">TrustFinance Business 2025</h3>
                          <p className="text-muted-foreground mb-6">
                            A premium business-matching event connecting brokers, payment gateways, compliance
                            providers, and media agencies. Featuring pitching sessions, strategic meetings, and a VIP
                            gala dinner.
                          </p>
                          <div className="flex flex-wrap gap-4 items-center">
                            <PhotoGallery eventName="TrustFinance Business 2025" images={business2025Images} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Future of Finance</h2>
              <p className="text-xl mb-8">
                Connect with our team to explore sponsorship opportunities or register for our upcoming events to
                elevate your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="/contact">
                    <Award className="h-5 w-5" /> Become a Sponsor
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
                  asChild
                >
                  <Link href="#events-calendar">
                    <Calendar className="h-5 w-5" /> View Events
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
