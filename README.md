# Sibusiso Makaula — Portfolio

A modern, recruiter-focused personal portfolio for **Sibusiso Makaula**, an ICT Application Development graduate and junior software developer from South Africa.

The site is **data-driven**: almost all content lives in the `data/` directory, so it can be updated without touching UI components.

## Features

- Sticky, accessible navigation with active-section highlighting and a mobile menu
- Hero with an animated developer code-window visual
- About, Technical Skills, and "What I Can Build" capability cards
- Filterable Featured Projects with individual case-study pages (`/projects/[slug]`)
- Live **GitHub Projects** section (GitHub API) with graceful fallback
- Development Journey timeline, Education & Certifications
- CV download / view section
- Contact section with a validated form (opens the visitor's email client)
- Dark / light mode with persisted preference (dark by default)
- Subtle Framer Motion animations that respect `prefers-reduced-motion`
- SEO metadata (Open Graph + Twitter), favicons, and semantic, accessible markup

## Technologies

- [Next.js](https://nextjs.org) (App Router) + [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev) icons

## Project structure

```text
app/
  layout.tsx              # Global metadata, fonts, theme provider
  page.tsx                # Home page — composes the section components
  projects/[slug]/page.tsx# Dynamic case-study pages
  not-found.tsx           # 404 page
components/                # Reusable UI (Navbar, Hero, Projects, etc.)
  ui/                      # shadcn/ui primitives
data/                      # ← Edit these to update site content
  profile.ts               # Name, title, hero copy, about text, CV path
  skills.ts                # Technical skills by category
  projects.ts              # Featured projects + case-study content
  capabilities.ts          # "What I Can Build" cards
  journey.ts               # Development-journey timeline
  education.ts             # Education entries
  certifications.ts        # Certifications
  social.ts                # GitHub / LinkedIn / email / location
  nav.ts                   # Navigation items
lib/
  github.ts                # Cached GitHub API helper
  links.ts                 # Placeholder-aware link helpers
public/
  cv/                      # Your CV PDF
  images/projects/         # Project preview images
```

## Local development

Requires Node.js 18+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev      # start the dev server at http://localhost:3000
pnpm build    # production build
pnpm start    # run the production build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable          | Required | Purpose                                                              |
| ----------------- | -------- | -------------------------------------------------------------------- |
| `GITHUB_USERNAME` | No       | Username for the GitHub Projects section. Falls back to `social.ts`. |
| `GITHUB_TOKEN`    | No       | Raises the GitHub API rate limit. Not needed for public repos.       |

No secrets are committed — `.env.local` is git-ignored.

## GitHub API setup

The GitHub Projects section fetches your most recently updated public repositories.

1. Set `GITHUB_USERNAME` in `.env.local` (or update `githubUsername` in `data/social.ts`).
2. Optionally add a `GITHUB_TOKEN` to avoid rate limiting.

Repositories are fetched server-side and cached for one hour, so the API is not called on every render. If the API is unavailable or no username is set, a professional fallback state is shown and the site keeps working.

## How to add a new project (no UI changes needed)

Add one object to the `projects` array in `data/projects.ts`:

```ts
{
  slug: "my-new-project",          // used in the URL: /projects/my-new-project
  title: "My New Project",
  type: "Full Stack / Personal Project",
  category: ["Full Stack", "Frontend"], // drives the project filter
  description: "Short summary shown on the card.",
  technologies: ["React", "Node.js"],
  features: ["Feature one", "Feature two"],
  githubUrl: "https://github.com/you/my-new-project", // optional
  liveUrl: "https://example.com",                     // optional
  image: "/images/projects/my-new-project.png",       // optional
  // Optional case-study fields:
  overview: "…",
  problem: "…",
  solution: "…",
  role: "…",
  architecture: [{ label: "React", detail: "Frontend" }],
  challenges: ["…"],
  lessonsLearned: ["…"],
}
```

The card, filter, and case-study page are generated automatically. Adding a category value that isn't in `projectFilters` yet? Add it to the `ProjectCategory` type and the `projectFilters` array in the same file.

## How to update other content

- **Skills** — edit `data/skills.ts` (categories and skill arrays).
- **Education** — edit `data/education.ts`.
- **Certifications** — edit `data/certifications.ts` (add an optional `credentialUrl`).
- **Journey** — edit `data/journey.ts`.
- **Profile / About / hero copy** — edit `data/profile.ts`.

## How to replace the CV

Replace the file at the path defined by `profile.cvPath` in `data/profile.ts` (default: `public/cv/sibusiso-makaula-cv.pdf`). Keep the same filename, or update `cvPath` to match your new file.

## How to change social links

Edit `data/social.ts` once — the GitHub, LinkedIn and email links update everywhere across the site. Values still containing `YOUR_` are treated as unset, so their buttons are hidden until you add real values.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add `GITHUB_USERNAME` (and optionally `GITHUB_TOKEN`) under **Settings → Environment Variables**.
4. Deploy. Vercel auto-detects Next.js — no extra configuration required.
