"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { mainNavItems } from "@/constants/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="TrustFinance Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-xl">TrustFinance</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="https://b2b.trustfinance.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
            >
              Business Portal
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 items-center">
            <ThemeToggle />
            <Button variant="outline" asChild className="rounded-md font-medium bg-transparent">
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button asChild className="rounded-md bg-[#4060FF] hover:bg-[#3050E0] text-white font-medium">
              <Link href="/claim">Claim Your Profile</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="https://b2b.trustfinance.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Business Portal
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-center mb-2">
                <ThemeToggle />
              </div>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/claim">Claim Your Profile</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
