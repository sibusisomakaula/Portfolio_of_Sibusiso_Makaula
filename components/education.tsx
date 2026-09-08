import { GraduationCap, Award } from "lucide-react"
import { education } from "@/data/education"
import { certifications } from "@/data/certifications"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Qualifications"
          description="My formal studies and the certifications that support my development work."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Education */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <Reveal key={edu.qualification} delay={i * 0.05}>
                  <Card className="rounded-xl border-border/60 bg-card/70">
                    <CardHeader>
                      <CardTitle className="text-base leading-snug">{edu.qualification}</CardTitle>
                      {edu.institution ? (
                        <p className="text-sm font-medium text-primary">{edu.institution}</p>
                      ) : null}
                    </CardHeader>
                    {edu.description ? (
                      <CardContent>
                        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                          {edu.description}
                        </p>
                      </CardContent>
                    ) : null}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Award className="size-5 text-primary" />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 0.05}>
                  <Card className="rounded-xl border-border/60 bg-card/70">
                    <CardHeader>
                      <CardTitle className="text-base leading-snug">{cert.title}</CardTitle>
                      {cert.issuer ? (
                        <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                      ) : null}
                    </CardHeader>
                    {cert.description || cert.credentialUrl ? (
                      <CardContent className="space-y-3">
                        {cert.description ? (
                          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                            {cert.description}
                          </p>
                        ) : null}
                        {cert.credentialUrl ? (
                          <Button asChild variant="outline" size="sm">
                            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                              View credential
                            </a>
                          </Button>
                        ) : null}
                      </CardContent>
                    ) : null}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
