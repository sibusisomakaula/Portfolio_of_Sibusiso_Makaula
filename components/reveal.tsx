"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Direction the element eases in from. */
  y?: number
  as?: "div" | "section" | "li" | "article"
}

/**
 * Scroll-reveal wrapper. Animates children into view once, and respects
 * the user's reduced-motion preference (renders statically when reduced).
 */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
