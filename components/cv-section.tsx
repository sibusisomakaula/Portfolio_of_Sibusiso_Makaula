import { Download, FileText, Eye } from "lucide-react"
import { profile } from "@/data/profile"
import { hasLink } from "@/lib/links"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// The CV lives at profile.cvPath inside /public. Replace that file to update
// the CV — no code changes needed. Buttons are hidden if no path is configured.
export function CVSection() {
  const cvConfigured = hasLink(profile.cvPath)

  return (
    <section id="cv" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="relative overflow-hidden rounded-2xl border-border/60 bg-card/70 p-8 sm:p-12">
            <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />

            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="size-6" />
                </span>
                <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                  Download My CV
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  View or download my latest CV for more information about my education, technical
                  skills and projects.
                </p>
              </div>

              {cvConfigured ? (
                <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:flex-col lg:flex-row">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href={profile.cvPath} download>
                      <Download className="size-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <a href={profile.cvPath} target="_blank" rel="noopener noreferrer">
                      <Eye className="size-4" />
                      View CV
                    </a>
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Add your CV at <code className="rounded bg-muted px-1.5 py-0.5">public{profile.cvPath}</code>.
                </p>
              )}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
