// Technical skills, organised by category.
// Add or remove a skill by editing the arrays below — no UI changes needed.

export type SkillCategory = {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Java", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    skills: ["React", "Vue.js", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "REST APIs", "Spring Security", "JPA / Hibernate"],
  },
  {
    name: "Database",
    skills: ["MySQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Visual Studio Code", "IntelliJ IDEA"],
  },
]
