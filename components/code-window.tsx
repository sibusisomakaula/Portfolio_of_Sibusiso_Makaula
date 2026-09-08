"use client"

import { motion, useReducedMotion } from "framer-motion"

// Decorative developer-themed visual for the hero. Purely presentational,
// so it's hidden from assistive tech. Content mirrors the profile data
// conceptually but is intentionally static/illustrative.

type Line = { indent?: number; tokens: Array<{ text: string; className?: string }> }

const lines: Line[] = [
  { tokens: [{ text: "const", className: "text-primary" }, { text: " developer", className: "text-foreground" }, { text: " = {", className: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ text: "name", className: "text-sky-400" }, { text: ": ", className: "text-muted-foreground" }, { text: "'Sibusiso Makaula'", className: "text-emerald-400" }, { text: ",", className: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ text: "role", className: "text-sky-400" }, { text: ": ", className: "text-muted-foreground" }, { text: "'Junior Software Developer'", className: "text-emerald-400" }, { text: ",", className: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ text: "stack", className: "text-sky-400" }, { text: ": [", className: "text-muted-foreground" }] },
  { indent: 2, tokens: [{ text: "'Java'", className: "text-emerald-400" }, { text: ", ", className: "text-muted-foreground" }, { text: "'Spring Boot'", className: "text-emerald-400" }, { text: ",", className: "text-muted-foreground" }] },
  { indent: 2, tokens: [{ text: "'React'", className: "text-emerald-400" }, { text: ", ", className: "text-muted-foreground" }, { text: "'Vue.js'", className: "text-emerald-400" }, { text: ", ", className: "text-muted-foreground" }, { text: "'MySQL'", className: "text-emerald-400" }] },
  { indent: 1, tokens: [{ text: "],", className: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ text: "openToWork", className: "text-sky-400" }, { text: ": ", className: "text-muted-foreground" }, { text: "true", className: "text-amber-400" }, { text: ",", className: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ text: "build", className: "text-violet-400" }, { text: "() {", className: "text-muted-foreground" }] },
  { indent: 2, tokens: [{ text: "return", className: "text-primary" }, { text: " ", className: "" }, { text: "'practical software'", className: "text-emerald-400" }] },
  { indent: 1, tokens: [{ text: "},", className: "text-muted-foreground" }] },
  { tokens: [{ text: "}", className: "text-muted-foreground" }] },
]

export function CodeWindow() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-xl border border-border/70 bg-card/90 shadow-2xl shadow-primary/5 backdrop-blur"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
          <span className="size-3 rounded-full bg-destructive/70" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
        </div>

        {/* Code body */}
        <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          <pre className="min-w-max">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.15 + i * 0.08 }}
              >
                <span className="select-none text-right text-muted-foreground/40" style={{ width: "1.5rem" }}>
                  {i + 1}
                </span>
                <code style={{ paddingLeft: `${(line.indent ?? 0) * 1.25}rem` }}>
                  {line.tokens.map((t, j) => (
                    <span key={j} className={t.className}>
                      {t.text}
                    </span>
                  ))}
                </code>
              </motion.div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )
}
