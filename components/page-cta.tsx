import Link from "next/link"

import { Button } from "@/components/ui/button"
import { type CTAItem, pageCTAs } from "@/constants/navigation"

interface PageCTAProps {
  page: keyof typeof pageCTAs
  className?: string
}

export function PageCTA({ page, className = "" }: PageCTAProps) {
  const ctas = pageCTAs[page]

  if (!ctas) return null

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <CTAButton cta={ctas.primary} />
      {ctas.secondary && <CTAButton cta={ctas.secondary} />}
      {ctas.tertiary && <CTAButton cta={ctas.tertiary} />}
    </div>
  )
}

function CTAButton({ cta }: { cta: CTAItem }) {
  // For form submissions or special actions
  if (cta.href === "#") {
    return (
      <Button variant={cta.variant} size={cta.size} className={cta.className}>
        {cta.text}
      </Button>
    )
  }

  // For links to other pages
  return (
    <Button variant={cta.variant} size={cta.size} className={cta.className} asChild>
      <Link href={cta.href}>{cta.text}</Link>
    </Button>
  )
}
