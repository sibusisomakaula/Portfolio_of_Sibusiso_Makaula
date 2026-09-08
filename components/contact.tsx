"use client"

import { useState } from "react"
import { Mail, MapPin, Send, Copy, Check } from "lucide-react"
import { toast } from "sonner"
import { social } from "@/data/social"
import { hasLink } from "@/lib/links"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [copied, setCopied] = useState(false)

  const emailIsReal = hasLink(social.email)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.")
      return
    }
    if (!emailIsReal) {
      toast.error("Contact email is not configured yet.")
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`
    toast.success("Opening your email client…")
  }

  async function copyEmail() {
    if (!emailIsReal) return
    try {
      await navigator.clipboard.writeText(social.email)
      setCopied(true)
      toast.success("Email copied to clipboard")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Couldn't copy email")
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something together"
          description="I'm open to graduate programmes, internships and junior developer roles. Feel free to reach out."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <Reveal className="space-y-4">
            <Card className="gap-0 rounded-xl border-border/60 bg-card/70 p-6">
              <h3 className="text-lg font-semibold">Contact details</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The fastest way to reach me is by email.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                      Location
                    </p>
                    <p className="text-sm font-medium">{social.location}</p>
                  </div>
                </li>

                {emailIsReal ? (
                  <li className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                        Email
                      </p>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                      >
                        <span className="truncate">{social.email}</span>
                        {copied ? (
                          <Check className="size-3.5 shrink-0 text-primary" />
                        ) : (
                          <Copy className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </button>
                    </div>
                  </li>
                ) : null}
              </ul>

              <div className="mt-6 flex gap-2">
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
                {emailIsReal ? (
                  <Button asChild variant="outline" size="icon" aria-label="Send an email">
                    <a href={`mailto:${social.email}`}>
                      <Mail className="size-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </Card>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <Card className="rounded-xl border-border/60 bg-card/70 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the opportunity or project…"
                    rows={6}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="size-4" />
                  Send message
                </Button>
                <p className="text-xs text-muted-foreground">
                  This opens your email client with the message pre-filled.
                </p>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
