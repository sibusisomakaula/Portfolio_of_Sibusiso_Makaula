// Education entries. Edit freely — do not add dates, grades or awards
// unless they are accurate.

export type Education = {
  qualification: string
  institution?: string
  description?: string
}

export const education: Education[] = [
  {
    qualification: "Diploma in ICT Applications Development",
    institution: "Cape Peninsula University of Technology (CPUT)",
    description:
      "Focused on application development, software engineering fundamentals, databases and full-stack web development.",
  },
  {
    qualification: "Higher Certificate in ICT (Information & Communication Technology)",
    description:
      "Foundation in information and communication technology, programming and computing fundamentals.",
  },
]
