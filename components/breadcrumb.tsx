"use client"

import { usePathname } from "next/navigation"

export function Breadcrumb() {
  const pathname = usePathname()

  // Always return null - breadcrumb has been removed
  return null
}
