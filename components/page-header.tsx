import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  badge: string
  title: string
  description: string
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">{badge}</Badge>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  )
}
