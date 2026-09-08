// Certifications. Add an optional `credentialUrl` when you have a verifiable link.
// Do not add certificate numbers, dates or grades unless they are accurate.

export type Certification = {
  title: string
  issuer?: string
  description?: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    title: "SAP S/4HANA Project Management / ERP Foundation",
    description: "Foundation-level knowledge of SAP S/4HANA and ERP project management concepts.",
  },
  {
    title: "Project Management",
    description: "Fundamentals of planning, organising and managing projects.",
  },
]
