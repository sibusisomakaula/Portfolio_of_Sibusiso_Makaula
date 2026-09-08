import { skillCategories } from "@/data/skills"
import { capabilities } from "@/data/capabilities"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Capabilities"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks and tools I use to design and build applications."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.05}>
              <Card className="h-full rounded-xl border-border/60 bg-card/70 transition-colors hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="text-sm font-mono uppercase tracking-wider text-primary">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-md bg-secondary/80 px-2.5 py-1 text-sm font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* What I can build */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="What I Can Build"
            title="Development capabilities"
            description="The kinds of applications and systems I'm equipped to design and develop."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon
              return (
                <Reveal key={capability.title} delay={i * 0.05}>
                  <Card className="group h-full rounded-xl border-border/60 bg-card/70 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader>
                      <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </span>
                      <CardTitle className="mt-3 text-lg">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {capability.description}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
