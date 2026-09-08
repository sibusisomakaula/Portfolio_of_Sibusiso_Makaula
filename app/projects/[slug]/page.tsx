import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { projects, getProjectBySlug } from "@/data/projects"
import { hasLink } from "@/lib/links"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  }
}

function Field({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-pretty leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-border/60">
          <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
          <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" size="sm" className="-ml-2 mb-6 text-muted-foreground">
              <Link href="/#projects">
                <ArrowLeft className="size-4" />
                Back to projects
              </Link>
            </Button>

            <div className="flex flex-wrap gap-1.5">
              {project.category.map((c) => (
                <Badge
                  key={c}
                  variant="outline"
                  className="rounded-md border-primary/30 bg-primary/5 text-primary"
                >
                  {c}
                </Badge>
              ))}
            </div>

            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 text-sm font-mono uppercase tracking-wide text-muted-foreground">
              {project.type}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {hasLink(project.githubUrl) ? (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-4" />
                    View source
                  </a>
                </Button>
              ) : null}
              {hasLink(project.liveUrl) ? (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Live demo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Preview image */}
          {project.image ? (
            <Card className="mb-12 overflow-hidden rounded-xl border-border/60 p-0">
              <div className="relative aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} interface preview`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
            </Card>
          ) : null}

          <div className="space-y-12">
            {project.overview ? <Field title="Overview">{project.overview}</Field> : null}

            {/* Tech stack */}
            <div>
              <h2 className="text-xl font-semibold">Tech Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-md px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.problem ? <Field title="The Problem">{project.problem}</Field> : null}
            {project.solution ? <Field title="The Solution">{project.solution}</Field> : null}
            {project.role ? <Field title="My Role">{project.role}</Field> : null}

            {/* Architecture */}
            {project.architecture && project.architecture.length > 0 ? (
              <div>
                <h2 className="text-xl font-semibold">Architecture</h2>
                <div className="mt-4 flex flex-wrap items-stretch gap-3">
                  {project.architecture.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <Card className="min-w-40 gap-1 rounded-lg border-border/60 bg-card/70 p-4">
                        <span className="font-semibold">{step.label}</span>
                        {step.detail ? (
                          <span className="text-xs text-muted-foreground">{step.detail}</span>
                        ) : null}
                      </Card>
                      {i < project.architecture!.length - 1 ? (
                        <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Key features */}
            <div>
              <h2 className="text-xl font-semibold">Key Features</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-lg border border-border/60 bg-card/50 px-3 py-2 text-sm"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 ? (
              <Field title="Challenges">
                <ul className="space-y-2">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Field>
            ) : null}

            {/* Lessons */}
            {project.lessonsLearned && project.lessonsLearned.length > 0 ? (
              <Field title="What I Learned">
                <ul className="space-y-2">
                  {project.lessonsLearned.map((l) => (
                    <li key={l} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {l}
                    </li>
                  ))}
                </ul>
              </Field>
            ) : null}
          </div>

          <Separator className="my-12" />

          {/* Next project */}
          {next && next.slug !== project.slug ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                  Next project
                </p>
                <p className="mt-1 text-lg font-semibold transition-colors group-hover:text-primary">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  )
}
