// Development journey timeline. Honest, education-and-projects based —
// no fabricated employment history.

export type JourneyStep = {
  title: string
  description: string
  current?: boolean
}

export const journey: JourneyStep[] = [
  {
    title: "Higher Certificate in ICT",
    description:
      "Started my ICT journey with a foundation in information and communication technology and programming fundamentals.",
  },
  {
    title: "Diploma in ICT Applications Development",
    description:
      "Deepened my skills in application development, software engineering, databases and full-stack web development.",
  },
  {
    title: "Academic Software Development Projects",
    description:
      "Applied my learning through academic projects, building database-driven applications and REST APIs with Java and Spring Boot.",
  },
  {
    title: "Full-Stack & AI Application Projects",
    description:
      "Extended into full-stack and AI-focused projects — combining React and Vue.js frontends with backend services and AI/NLP functionality.",
  },
  {
    title: "Current Focus: Junior Software Development / Graduate Opportunities",
    description:
      "Actively seeking graduate programmes, internships and junior developer roles where I can contribute to real software and keep growing.",
    current: true,
  },
]
