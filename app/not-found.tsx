import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="relative">
        <p className="font-mono text-6xl font-bold text-primary sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-2 max-w-md text-pretty text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <Home className="size-4" />
            Back home
          </Link>
        </Button>
      </div>
    </main>
  )
}
