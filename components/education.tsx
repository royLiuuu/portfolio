"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Shanghai University",
      degree: "Bachelor of Science in Computer Science",
      period: "2007 - 2011",
      description:
        "Comprehensive program covering computer science, data structures, algorithms, and system design.",
      achievements: [],
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Machine Learning",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education & Certifications</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My academic background and professional certifications
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={item}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription className="text-base font-medium">{edu.institution}</CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={item}>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
