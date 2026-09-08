// Core profile / identity content.
// Edit this file to update your name, title, hero copy, about text and CV path.

import { social } from "./social"

export const profile = {
  name: "Sibusiso Makaula",
  title: "ICT Application Development Graduate | Junior Software Developer",
  tagline:
    "Building practical software solutions with Java, Spring Boot, React, Vue.js, MySQL and modern web technologies.",
  statusBadge: "Open to Graduate & Junior Developer Opportunities",
  location: social.location,

  // Path to your CV inside /public. Replace the file at this path to update your CV.
  cvPath: "/cv/sibusiso-makaula-cv.pdf",

  // About section paragraphs.
  about: [
    "I'm an ICT Application Development graduate from South Africa with a strong interest in software engineering and building useful digital solutions. My focus is on writing clean, maintainable code and turning practical problems into working applications.",
    "Through my studies and personal projects I've worked across the full stack — designing relational databases, building REST APIs with Java and Spring Boot, and creating responsive frontends with React and Vue.js. I enjoy the whole process, from modelling data to shipping an interface people can actually use.",
    "I'm continuously learning, currently exploring AI and NLP-powered applications, and I'm looking for graduate programmes, internships and junior developer roles where I can contribute to real software while growing as an engineer.",
  ],

  // Small factual highlight chips shown in the About section (no fake numbers).
  highlights: [
    { label: "Qualification", value: "ICT Application Development" },
    { label: "Focus", value: "Full-Stack Projects" },
    { label: "Backend", value: "Java / Spring Boot" },
    { label: "Frontend", value: "React / Vue.js" },
  ],
} as const

export type Profile = typeof profile
