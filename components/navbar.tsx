"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, Code2, Download, Mail } from "lucide-react"
import { navItems } from "@/data/nav"
import { profile } from "@/data/profile"
import { social } from "@/data/social"
import { hasLink } from "@/lib/links"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"

const sectionIds = navItems.map((item) => item.href.replace("#", ""))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("home")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="group flex items-center gap-2 font-semibold tracking-tight"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="size-4" />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{initials}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = active === id
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                ) : null}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1 md:flex">
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
            {hasLink(profile.cvPath) ? (
              <Button asChild variant="outline" size="sm" className="ml-1">
                <a href={profile.cvPath} download>
                  <Download className="size-4" />
                  CV
                </a>
              </Button>
            ) : null}
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" aria-label="Open menu">
                    <Menu className="size-4" />
                  </Button>
                }
              />
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>{profile.name}</SheetTitle>
                </SheetHeader>
                <div className="mt-2 flex flex-col gap-1 px-2">
                  {navItems.map((item) => {
                    const id = item.href.replace("#", "")
                    const isActive = active === id
                    return (
                      <SheetClose
                        key={item.href}
                        render={
                          <Link
                            href={item.href}
                            className={cn(
                              "rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                              isActive
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                            )}
                          >
                            {item.label}
                          </Link>
                        }
                      />
                    )
                  })}
                </div>

                <SheetFooter>
                  {hasLink(profile.cvPath) ? (
                    <Button asChild className="w-full">
                      <a href={profile.cvPath} download>
                        <Download className="size-4" />
                        Download CV
                      </a>
                    </Button>
                  ) : null}
                  <div className="flex items-center justify-center gap-2">
                    {hasLink(social.githubUrl) ? (
                      <Button asChild variant="outline" size="icon" aria-label="GitHub profile">
                        <a href={social.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="size-4" />
                        </a>
                      </Button>
                    ) : null}
                    {hasLink(social.linkedinUrl) ? (
                      <Button asChild variant="outline" size="icon" aria-label="LinkedIn profile">
                        <a href={social.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon className="size-4" />
                        </a>
                      </Button>
                    ) : null}
                    {hasLink(social.email) ? (
                      <Button asChild variant="outline" size="icon" aria-label="Send an email">
                        <a href={`mailto:${social.email}`}>
                          <Mail className="size-4" />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
