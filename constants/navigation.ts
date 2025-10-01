// Navigation links for header, footer, and page CTAs

export type NavItem = {
  title: string
  href: string
  description?: string
}

export type NavSection = {
  title: string
  items: NavItem[]
}

// Main navigation items for header
export const mainNavItems: NavItem[] = [
  {
    title: "Why TrustFinance",
    href: "/why",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Use Cases",
    href: "/use-cases",
  },
  {
    title: "Our Clients",
    href: "/clients",
  },
  {
    title: "Events",
    href: "/events",
  },
]

// Footer navigation sections
export const footerNavSections: NavSection[] = [
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "/about",
        description: "Learn about TrustFinance and our team",
      },
      {
        title: "Why TrustFinance",
        href: "/why",
        description: "Understand our strengths and differentiators",
      },
      {
        title: "Our Clients",
        href: "/clients",
        description: "See a list of clients who trust us",
      },
      {
        title: "Contact Us",
        href: "/contact",
        description: "Contact our team",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "All Services",
        href: "/services",
        description: "View all our services",
      },
      {
        title: "TrustScore",
        href: "/services#trustscore",
        description: "Learn about TrustScore",
      },
      {
        title: "B2B Dashboard",
        href: "/services#dashboard",
        description: "Manage your business data",
      },
      {
        title: "Reviews & Ratings",
        href: "/services#reviews",
        description: "Reviews and ratings",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Use Cases",
        href: "/use-cases",
        description: "View use cases from real customers",
      },
      {
        title: "Events",
        href: "/events",
        description: "Events and sponsorships",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Latest articles and news",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Frequently asked questions",
      },
    ],
  },
]

// CTA definitions for each page
export type CTAItem = {
  text: string
  href: string
  variant: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export type PageCTAs = {
  primary: CTAItem
  secondary?: CTAItem
  tertiary?: CTAItem
}

export const pageCTAs: Record<string, PageCTAs> = {
  home: {
    primary: {
      text: "Claim Your Profile for Free",
      href: "/claim",
      variant: "default",
      size: "lg",
      className: "bg-green-600 hover:bg-green-700",
    },
    secondary: {
      text: "See Our Services",
      href: "/services",
      variant: "outline",
      size: "lg",
    },
    tertiary: {
      text: "Book a Demo",
      href: "/contact",
      variant: "link",
    },
  },
  whyTrustFinance: {
    primary: {
      text: "Start Building Trust Today",
      href: "/claim",
      variant: "default",
      size: "lg",
    },
    secondary: {
      text: "See How It Works",
      href: "/services",
      variant: "outline",
    },
    tertiary: {
      text: "Talk to Our Experts",
      href: "/contact",
      variant: "link",
    },
  },
  services: {
    primary: {
      text: "Get Started with TrustFinance",
      href: "/claim",
      variant: "default",
      size: "lg",
    },
    secondary: {
      text: "Compare Pricing Plans",
      href: "/pricing",
      variant: "outline",
    },
    tertiary: {
      text: "Schedule a Demo",
      href: "/contact",
      variant: "link",
    },
  },
  pricing: {
    primary: {
      text: "Claim Your Profile",
      href: "/claim",
      variant: "default",
    },
    secondary: {
      text: "Contact Sales for Custom Plan",
      href: "/contact",
      variant: "outline",
    },
    tertiary: {
      text: "See What's Included",
      href: "/services",
      variant: "link",
    },
  },
  useCases: {
    primary: {
      text: "Achieve Similar Results",
      href: "/claim",
      variant: "default",
      size: "lg",
    },
    secondary: {
      text: "Explore Our Solutions",
      href: "/services",
      variant: "outline",
    },
    tertiary: {
      text: "Talk to Our Team",
      href: "/contact",
      variant: "link",
    },
  },
  clients: {
    primary: {
      text: "Join Our Client List",
      href: "/claim",
      variant: "default",
      size: "lg",
    },
    secondary: {
      text: "See Client Success Stories",
      href: "/use-cases",
      variant: "outline",
    },
    tertiary: {
      text: "Contact Our Team",
      href: "/contact",
      variant: "link",
    },
  },
  claim: {
    primary: {
      text: "Submit Claim Request",
      href: "#",
      variant: "default",
      size: "lg",
    },
    secondary: {
      text: "Need Help? Contact Sales",
      href: "/contact",
      variant: "outline",
    },
    tertiary: {
      text: "View Pricing Plans",
      href: "/pricing",
      variant: "link",
    },
  },
  contact: {
    primary: {
      text: "Submit Request",
      href: "#",
      variant: "default",
      size: "lg",
    },
    secondary: {
      text: "Claim Your Profile Now",
      href: "/claim",
      variant: "outline",
    },
    tertiary: {
      text: "Explore Our Services",
      href: "/services",
      variant: "link",
    },
  },
  events: {
    primary: {
      text: "Become a Sponsor",
      href: "/contact?type=sponsorship",
      variant: "default",
      size: "lg",
    },
    secondary: {
      text: "Register for Upcoming Events",
      href: "#register",
      variant: "outline",
    },
    tertiary: {
      text: "Contact Event Team",
      href: "/contact?type=events",
      variant: "link",
    },
  },
}

// Related pages for each page
export type RelatedPage = {
  title: string
  href: string
  description: string
}

export const relatedPages: Record<string, RelatedPage[]> = {
  home: [
    {
      title: "Why TrustFinance",
      href: "/why",
      description: "Learn about our strengths and differentiators",
    },
    {
      title: "Our Services",
      href: "/services",
      description: "View all the services we offer",
    },
    {
      title: "Use Cases",
      href: "/use-cases",
      description: "See real results from our customers",
    },
  ],
  whyTrustFinance: [
    {
      title: "Our Services",
      href: "/services",
      description: "View all the services we offer",
    },
    {
      title: "Use Cases",
      href: "/use-cases",
      description: "See real results from our customers",
    },
    {
      title: "Our Clients",
      href: "/clients",
      description: "See a list of clients who trust us",
    },
  ],
  services: [
    {
      title: "Pricing",
      href: "/pricing",
      description: "View our pricing plans and packages",
    },
    {
      title: "Use Cases",
      href: "/use-cases",
      description: "See real results from our customers",
    },
    {
      title: "Our Clients",
      href: "/clients",
      description: "See a list of clients who trust us",
    },
  ],
  // Add more pages as needed
}

const pathMap: Record<string, string> = {
  why: "Why TrustFinance",
  services: "Services",
  pricing: "Pricing",
  "use-cases": "Use Cases",
  clients: "Our Clients",
  claim: "Claim Your Profile",
  contact: "Contact Sales",
  events: "Events",
}
