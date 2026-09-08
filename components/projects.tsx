"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { GithubIcon } from "@/components/brand-icons"
import { projects, projectFilters } from "@/data/projects"
import { social } from "@/data/social"
import { hasLink } from "@/lib/links"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All")

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter as never))

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="A selection of academic and personal projects. Each links to a detailed case study."
        />

        {/* Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => {
            const isActive = filter === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {f}
              </button>
            )
          })}
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}

        {hasLink(social.githubUrl) ? (
          <Reveal className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <a href={social.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" />
                View more on GitHub
              </a>
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
