import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-primary">
          <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
