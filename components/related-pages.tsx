import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { relatedPages } from "@/constants/navigation"

interface RelatedPagesProps {
  page: keyof typeof relatedPages
  className?: string
}

export function RelatedPages({ page, className = "" }: RelatedPagesProps) {
  const pages = relatedPages[page]

  if (!pages || pages.length === 0) return null

  return (
    <div className={`mt-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Related Pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="group">
            <Card className="h-full transition-all group-hover:shadow-md">
              <CardHeader>
                <CardTitle>{page.title}</CardTitle>
                <CardDescription>{page.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary group-hover:underline">Read more &rarr;</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
