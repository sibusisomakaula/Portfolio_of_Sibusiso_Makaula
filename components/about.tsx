import { profile } from "@/data/profile"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into working software"
          align="left"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-pretty text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4 self-start">
            {profile.highlights.map((h) => (
              <Card
                key={h.label}
                className="gap-1 rounded-xl border-border/60 bg-card/60 p-5 transition-colors hover:border-primary/40"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {h.label}
                </span>
                <span className="text-pretty text-base font-semibold text-foreground">
                  {h.value}
                </span>
              </Card>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
