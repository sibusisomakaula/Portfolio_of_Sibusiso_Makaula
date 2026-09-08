import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { GitHubProjects } from "@/components/github-projects"
import { Journey } from "@/components/journey"
import { Education } from "@/components/education"
import { CVSection } from "@/components/cv-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubProjects />
        <Journey />
        <Education />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
