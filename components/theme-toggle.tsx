"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative"
    >
      {/* Render both icons and cross-fade to avoid layout shift / hydration flash */}
      <Sun
        className={`size-4 transition-all duration-300 ${
          mounted && !isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      />
      <Moon
        className={`absolute size-4 transition-all duration-300 ${
          mounted && isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
        }`}
      />
    </Button>
  )
}
