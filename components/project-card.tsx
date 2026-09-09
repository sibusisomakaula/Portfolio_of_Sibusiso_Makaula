import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, Users } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import type { Project } from "@/data/projects"
import { hasLink } from "@/lib/links"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-xl border-border/60 bg-card/70 p-0 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-video overflow-hidden"
        aria-label={`View case study for ${project.title}`}
      >
        {project.image ? (
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted text-muted-foreground">
            <span className="text-sm">No preview</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
        {project.teamProject ? (
          <Badge className="absolute left-3 top-3 gap-1 border-transparent bg-background/85 text-xs font-medium text-foreground backdrop-blur">
            <Users className="size-3" />
            Team Project
          </Badge>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.category.map((c) => (
            <Badge
              key={c}
              variant="outline"
              className="rounded-md border-primary/30 bg-primary/5 text-xs font-medium text-primary"
            >
              {c}
            </Badge>
          ))}
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-mono uppercase tracking-wide text-muted-foreground">
          {project.type}
        </p>

        <p className="mt-3 line-clamp-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 ? (
            <span className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4">
          <Button asChild size="sm" variant="secondary" className="flex-1">
            <Link href={`/projects/${project.slug}`}>Case study</Link>
          </Button>
          {hasLink(project.githubUrl) ? (
            <Button asChild size="icon" variant="ghost" aria-label={`${project.title} on GitHub`}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" />
              </a>
            </Button>
          ) : null}
          {hasLink(project.liveUrl) ? (
            <Button asChild size="icon" variant="ghost" aria-label={`${project.title} live demo`}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  )
}
