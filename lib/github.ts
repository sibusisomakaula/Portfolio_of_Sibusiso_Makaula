// Server-side helpers for fetching public GitHub repositories.
//
// The username is read from the GITHUB_USERNAME environment variable, falling
// back to `social.githubUsername` in data/social.ts. An optional GITHUB_TOKEN
// raises the API rate limit but is NOT required for public repositories.
//
// Results are cached for an hour via Next.js fetch revalidation, so the
// GitHub API is not called on every render. All failures degrade gracefully
// by returning null — callers render a fallback instead of crashing.

import { social } from "@/data/social"
import { isPlaceholder } from "@/lib/links"

export type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

type RawRepo = GitHubRepo & { fork: boolean; archived: boolean }

export function getGitHubUsername(): string | null {
  const fromEnv = process.env.GITHUB_USERNAME?.trim()
  if (fromEnv && !isPlaceholder(fromEnv)) return fromEnv
  if (!isPlaceholder(social.githubUsername)) return social.githubUsername
  return null
}

export async function getGitHubRepos(limit = 6): Promise<GitHubRepo[] | null> {
  const username = getGitHubUsername()
  if (!username) return null

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    }
    const token = process.env.GITHUB_TOKEN?.trim()
    if (token && !isPlaceholder(token)) headers.Authorization = `Bearer ${token}`

    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100&type=owner`,
      { headers, next: { revalidate: 3600 } },
    )

    if (!res.ok) return null

    const data = (await res.json()) as RawRepo[]
    if (!Array.isArray(data)) return null

    return data
      .filter((r) => !r.fork && !r.archived)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .slice(0, limit)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        updated_at: r.updated_at,
      }))
  } catch {
    return null
  }
}
