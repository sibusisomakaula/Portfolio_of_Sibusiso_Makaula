// "What I Can Build" capability cards.
// These describe development capabilities, not established freelance services.

import type { LucideIcon } from "lucide-react"
import { Layers, Server, Briefcase, Database, Sparkles, Smartphone } from "lucide-react"

export type Capability = {
  title: string
  description: string
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  {
    title: "Full-Stack Web Applications",
    description: "Modern applications with frontend, backend and database integration.",
    icon: Layers,
  },
  {
    title: "REST APIs",
    description: "Backend services and APIs using Java and Spring Boot.",
    icon: Server,
  },
  {
    title: "Business Applications",
    description: "Practical applications designed around real business workflows.",
    icon: Briefcase,
  },
  {
    title: "Database-Driven Systems",
    description: "Applications connected to relational databases such as MySQL.",
    icon: Database,
  },
  {
    title: "AI-Powered Applications",
    description: "Applications that integrate AI/NLP functionality where appropriate.",
    icon: Sparkles,
  },
  {
    title: "Responsive Web Interfaces",
    description: "Modern responsive interfaces for desktop, tablet and mobile.",
    icon: Smartphone,
  },
]
