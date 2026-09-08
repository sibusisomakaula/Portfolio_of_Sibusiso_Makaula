import Link from "next/link"
import { Mail, ArrowUp } from "lucide-react"
import { profile } from "@/data/profile"
import { social } from "@/data/social"
import { navItems } from "@/data/nav"
import { hasLink } from "@/lib/links"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {profile.title}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2">
            {hasLink(social.githubUrl) ? (
              <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
                <a href={social.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {hasLink(social.linkedinUrl) ? (
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
                <a href={social.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {hasLink(social.email) ? (
              <Button asChild variant="ghost" size="icon" aria-label="Send an email">
                <a href={`mailto:${social.email}`}>
                  <Mail className="size-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link href="#home">
              <ArrowUp className="size-3.5" />
              Back to top
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
