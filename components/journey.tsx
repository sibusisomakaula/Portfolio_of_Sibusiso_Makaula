import { journey } from "@/data/journey"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="How I got here"
          description="My path into software development, from foundational studies to hands-on project work."
        />

        <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
          {journey.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.05} className="relative">
              <span
                className={cn(
                  "absolute -left-[calc(2rem+1px)] flex size-6 -translate-x-1/2 items-center justify-center rounded-full border-2",
                  step.current
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background",
                )}
                aria-hidden="true"
              >
                <span
                  className={cn(
                    "size-2 rounded-full",
                    step.current ? "bg-primary-foreground" : "bg-muted-foreground/50",
                  )}
                />
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                {step.current ? (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
