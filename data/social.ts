// Central social & contact configuration.
// Change these values once and they update everywhere across the site.

export const social = {
  githubUsername: "YOUR_GITHUB_USERNAME",
  githubUrl: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedinUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN_URL",
  email: "YOUR_EMAIL",
  location: "Cape Town, South Africa",
} as const

export type Social = typeof social
