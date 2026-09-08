"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download, MapPin, Mail } from "lucide-react"
import { profile } from "@/data/profile"
import { social } from "@/data/social"
import { hasLink } from "@/lib/links"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { CodeWindow } from "@/components/code-window"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const initialState = reduceMotion ? "show" : "hidden"

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-16"
    >
      {/* Background layers */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/4 top-0 -z-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: intro */}
          <motion.div
            variants={container}
            initial={initialState}
            animate="show"
            className="flex flex-col items-start text-left"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary sm:text-sm"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.statusBadge}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-pretty text-lg font-medium text-primary sm:text-xl"
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="size-4" />
              {profile.location}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#projects">
                  View My Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              {hasLink(profile.cvPath) ? (
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <a href={profile.cvPath} download>
                    <Download className="size-4" />
                    Download CV
                  </a>
                </Button>
              ) : null}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-2">
              {hasLink(social.githubUrl) ? (
                <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
                  <a href={social.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-5" />
                  </a>
                </Button>
              ) : null}
              {hasLink(social.linkedinUrl) ? (
                <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
                  <a href={social.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="size-5" />
                  </a>
                </Button>
              ) : null}
              {hasLink(social.email) ? (
                <Button asChild variant="ghost" size="icon" aria-label="Send an email">
                  <a href={`mailto:${social.email}`}>
                    <Mail className="size-5" />
                  </a>
                </Button>
              ) : null}
            </motion.div>
          </motion.div>

          {/* Right: developer-themed code window */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block"
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
