import { Star, GitFork, ExternalLink } from "lucide-react"
import { getGitHubRepos, getGitHubUsername } from "@/lib/github"
import { social } from "@/data/social"
import { hasLink } from "@/lib/links"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-ZA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return ""
  }
}

// Server component. Fetches repos at request time (cached for an hour) and
// degrades gracefully to a fallback when GitHub is unavailable or no username
// is configured yet.
export async function GitHubProjects() {
  const username = getGitHubUsername()
  const repos = await getGitHubRepos(6)

  return (
    <section id="github" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub Projects"
          title="Straight from my repositories"
          description="A live look at my most recently updated public repositories on GitHub."
        />

        {repos && repos.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 0.05}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-xl"
                >
                  <Card className="flex h-full flex-col gap-0 rounded-xl border-border/60 bg-card/70 p-5 transition-all group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex items-center gap-2 font-semibold leading-snug">
                        <GithubIcon className="size-4 shrink-0 text-muted-foreground" />
                        <span className="break-all transition-colors group-hover:text-primary">
                          {repo.name}
                        </span>
                      </span>
                      <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    <p className="mt-3 line-clamp-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {repo.description ?? "No description provided."}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      {repo.language ? (
                        <span className="inline-flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
                          {repo.language}
                        </span>
                      ) : null}
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3.5" aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="size-3.5" aria-hidden="true" />
                        {repo.forks_count}
                      </span>
                    </div>

                    {repo.updated_at ? (
                      <p className="mt-3 text-xs text-muted-foreground/80">
                        Updated {formatDate(repo.updated_at)}
                      </p>
                    ) : null}
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          // Fallback: GitHub unavailable, no repos, or username not configured.
          <Reveal className="mt-12">
            <Card className="mx-auto max-w-xl rounded-xl border-border/60 bg-card/70 p-8 text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GithubIcon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">
                {username ? "Live repositories are taking a break" : "GitHub username not set yet"}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {username
                  ? "The GitHub API is temporarily unavailable. In the meantime, take a look at the featured projects above or visit the profile directly."
                  : "Add a GITHUB_USERNAME environment variable (or update data/social.ts) to display live repositories here. The featured projects above are always available."}
              </p>
              {hasLink(social.githubUrl) ? (
                <Button asChild variant="outline" className="mt-6">
                  <a href={social.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-4" />
                    Visit GitHub profile
                  </a>
                </Button>
              ) : null}
            </Card>
          </Reveal>
        )}
      </div>
    </section>
  )
}
