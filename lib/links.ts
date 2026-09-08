// Helper to detect placeholder values that haven't been filled in yet.
// Any string that is empty or starts with "YOUR_" is treated as "not set",
// so buttons/links for it are hidden until you add a real value.

export function isPlaceholder(value?: string): boolean {
  if (!value) return true
  const v = value.trim()
  // Treat empty strings and anything still containing a "YOUR_" token as unset.
  return v === "" || v.toUpperCase().includes("YOUR_")
}

export function hasLink(value?: string): value is string {
  return !isPlaceholder(value)
}
