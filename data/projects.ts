// Featured projects.
//
// To add a new project (e.g. SARSense later), append a new object to the
// `projects` array below. Every field except the required ones is optional,
// so a project without a live demo or case-study detail still renders cleanly.
// The Projects section, filters and case-study pages all read from this file.

export type ProjectCategory = "Full Stack" | "AI" | "Frontend" | "Backend"

export type ArchitectureStep = {
  label: string
  detail?: string
}

export type Project = {
  slug: string
  title: string
  type: string
  category: ProjectCategory[]
  description: string
  technologies: string[]
  features: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured?: boolean
  // Case-study fields (all optional).
  overview?: string
  problem?: string
  solution?: string
  role?: string
  architecture?: ArchitectureStep[]
  challenges?: string[]
  lessonsLearned?: string[]
}

export const projects: Project[] = [
  {
    slug: "jewellery-store-ecommerce",
    title: "Jewellery Store E-Commerce Platform",
    type: "Full Stack / Academic Capstone Project",
    category: ["Full Stack", "Backend"],
    description:
      "Full-stack e-commerce application developed as an academic capstone project for managing jewellery products, customers, carts and orders.",
    technologies: ["Java", "Spring Boot", "Vue.js", "MySQL", "JPA / Hibernate", "REST APIs"],
    features: [
      "Product catalogue",
      "Product categories",
      "Customer management",
      "Shopping cart",
      "Order management",
      "Payment-related workflow",
      "RESTful backend",
    ],
    githubUrl: "YOUR_GITHUB_URL",
    image: "/images/projects/jewellery-store.png",
    featured: true,
    overview:
      "A full-stack e-commerce platform built as my academic capstone project. It allows an online jewellery store to manage its product catalogue, customers, shopping carts and orders through a clean web interface backed by a RESTful API.",
    problem:
      "Small jewellery retailers often manage products, customers and orders manually. The project needed a structured system to handle a product catalogue, customer accounts, cart interactions and order processing in one place.",
    solution:
      "I built a Vue.js frontend that communicates with a Spring Boot REST API. The backend uses JPA / Hibernate to persist products, categories, customers, carts and orders in a MySQL database, exposing clean endpoints the frontend consumes.",
    role:
      "I worked across the full stack — designing the database schema, implementing the Spring Boot REST endpoints and JPA entities, and building the Vue.js interface that consumes the API.",
    architecture: [
      { label: "Vue.js", detail: "Frontend UI" },
      { label: "REST API", detail: "JSON over HTTP" },
      { label: "Spring Boot", detail: "Application & business logic" },
      { label: "JPA / Hibernate", detail: "Object-relational mapping" },
      { label: "MySQL", detail: "Relational data store" },
    ],
    challenges: [
      "Designing a relational schema that cleanly modelled products, categories, carts and orders.",
      "Keeping the Vue.js frontend and Spring Boot API in sync through well-defined REST contracts.",
      "Handling cart and order state consistently across requests.",
    ],
    lessonsLearned: [
      "How to structure a multi-layer Spring Boot application with controllers, services and repositories.",
      "Practical use of JPA / Hibernate for mapping entities and relationships.",
      "How to design REST APIs that a separate frontend can consume reliably.",
    ],
  },
  {
    slug: "ecommerce-sentiment-analyzer",
    title: "E-Commerce Customer Review Sentiment Analyzer",
    type: "AI / Full Stack",
    category: ["AI", "Full Stack", "Frontend"],
    description:
      "An AI-driven full-stack application that analyzes customer reviews, identifies sentiment and recurring topics, and presents actionable business insights through an interactive dashboard.",
    technologies: ["React", "JavaScript", "AI / NLP", "REST APIs", "Database", "CSV processing"],
    features: [
      "CSV review upload",
      "Sentiment analysis",
      "Positive / negative / neutral classification",
      "Topic identification",
      "Interactive dashboard",
      "Business insights",
      "Insight report generation",
    ],
    githubUrl: "YOUR_GITHUB_URL",
    image: "/images/projects/sentiment-analyzer.png",
    featured: true,
    overview:
      "A full-stack application that turns raw customer reviews into actionable business insight. Users upload review data as CSV, the system analyzes sentiment and recurring topics, and results are presented through an interactive dashboard with a generated insight report.",
    problem:
      "Businesses collect large volumes of customer reviews but struggle to read them at scale. Manually spotting sentiment trends and recurring themes across hundreds of reviews is slow and inconsistent.",
    solution:
      "The application ingests reviews from CSV, runs them through a sentiment and topic analysis workflow, stores the results, and surfaces them in a React dashboard. Reviews are classified as positive, negative or neutral and grouped by topic so patterns are easy to see.",
    role:
      "I designed the end-to-end workflow, built the React dashboard, integrated the sentiment/NLP analysis and the CSV processing pipeline, and connected it to the backend and database.",
    architecture: [
      { label: "Customer Reviews", detail: "CSV upload" },
      { label: "AI Sentiment Analysis", detail: "NLP classification" },
      { label: "Database", detail: "Stores results" },
      { label: "Dashboard", detail: "React interface" },
      { label: "Topic Analysis", detail: "Recurring themes" },
      { label: "Business Insights", detail: "Actionable summary" },
      { label: "Insight Report", detail: "Generated output" },
    ],
    challenges: [
      "Processing and validating uploaded CSV review data reliably.",
      "Presenting sentiment and topic results in a way that is genuinely useful, not just raw numbers.",
      "Structuring the analysis workflow so each stage feeds cleanly into the next.",
    ],
    lessonsLearned: [
      "How to integrate AI/NLP sentiment analysis into a practical full-stack application.",
      "Turning unstructured text data into structured, presentable insight.",
      "Designing dashboards that communicate findings clearly to a non-technical audience.",
    ],
  },
  {
    slug: "subject-tracker",
    title: "Subject Tracker",
    type: "Full Stack / Academic Project",
    category: ["Full Stack", "Backend"],
    description: "An academic application for managing subjects and user information.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "GitHub"],
    features: ["User login", "Subject management", "Backend API", "Database integration"],
    githubUrl: "YOUR_GITHUB_URL",
    image: "/images/projects/subject-tracker.png",
    featured: true,
    overview:
      "An academic full-stack application for managing subjects and user information. It combines a Spring Boot backend with a React frontend and a MySQL database, built to practise core full-stack development patterns.",
    problem:
      "The project set out to build a straightforward system where users can log in and manage subject records, backed by a proper API and database rather than local state.",
    solution:
      "I implemented user login, subject management and a backend API in Spring Boot connected to a MySQL database, with a React frontend consuming the endpoints. This is an academic project and some functionality is still in progress.",
    role:
      "I built the Spring Boot backend and API, set up the MySQL database integration, and developed the React frontend for the subject management features.",
    architecture: [
      { label: "React", detail: "Frontend UI" },
      { label: "REST API", detail: "JSON over HTTP" },
      { label: "Spring Boot", detail: "Application logic" },
      { label: "MySQL", detail: "Relational data store" },
    ],
    challenges: [
      "Wiring up authentication and protected access to subject data.",
      "Connecting the React frontend to the Spring Boot API consistently.",
      "Structuring the project so features could be extended over time.",
    ],
    lessonsLearned: [
      "Practical experience connecting a React frontend to a Spring Boot backend.",
      "How authentication and data access fit together in a full-stack app.",
      "The value of an honest, iterative approach — shipping what works and clearly noting what is still in progress.",
    ],
  },
]

// All possible filter categories, derived so filters stay in sync with data.
export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
