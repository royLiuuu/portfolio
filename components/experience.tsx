"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      company: "Racial Justice Centre, Sydney",
      position: "Software Engineer (Volunteer)",
      period: "Nov 2024 - Present",
      description:
        "Developed and maintained organization website using WordPress, Divi framework, and custom JavaScript/HTML/CSS. Administered Salesforce CRM system and provided comprehensive IT support. Delivered complete end-to-end fundraising solution and led website refactoring project that resulted in modernized user interface.",
      technologies: ["WordPress", "Divi", "JavaScript", "HTML", "CSS", "Salesforce", "Figma"],
    },
    {
      company: "KIDSFIRST, Sydney",
      position: "Full Stack Developer & Solution Architect",
      period: "July 2024 - Present",
      description:
        "Independently architected and developed comprehensive AI evaluation platform using React, Next.js, and TypeScript. Implemented Role-Based Access Control (RBAC) system and built AI parameter management interface. Created red team testing framework and engineered dual evaluation system that reduced assessment time by 60%.",
      technologies: ["React", "Next.js", "TypeScript", "RBAC", "AI/ML", "LLM", "AWS"],
    },
    {
      company: "KIDSFIRST, Sydney",
      position: "Solution Architect (Weekend Role)",
      period: "Nov 2023 - June 2024",
      description:
        "Provided strategic technical leadership during project initialization phase. Conducted technology feasibility studies and directed technology stack selection. Designed scalable AWS infrastructure and reviewed API designs and database schemas for outsourced teams.",
      technologies: ["AWS", "System Architecture", "API Design", "Database Design"],
    },
    {
      company: "Shanghai Ninerun Network Technology Co., Ltd.",
      position: "Senior Software Engineer",
      period: "Nov 2021 - July 2024",
      description:
        "Led development team for secondhand collectible trading application serving 100,000+ active users. Spearheaded customer service AI project utilizing LLM technology and microservices architecture. Architected monitoring infrastructure with 300+ custom metrics and refactored core trading module handling 3 million daily transactions.",
      technologies: ["Java 19", "Spring Boot", "Python 3", "Flask", "LLM", "Vector Databases", "Microservices", "Grafana"],
    },
    {
      company: "Shanghai Lianshang Network Technology Co., Ltd.",
      position: "Senior Software Engineer",
      period: "Feb 2018 - Sep 2021",
      description:
        "Designed core infrastructure systems for instant messaging application serving 2 million users. Led cross-functional collaboration to architect Content Moderation Platform and promoted to team lead. Orchestrated microservices architecture supporting high-throughput messaging infrastructure.",
      technologies: ["Java 8", "Spring Boot", "Dubbo", "Microservices", "API Gateway", "Kafka"],
    },
    {
      company: "BiliBili Inc.",
      position: "Software Engineer",
      period: "Nov 2015 - Sep 2017",
      description:
        "Designed and developed Java backend services for PGC platform serving 60 million daily active users. Enhanced notification system performance achieving 720x improvement and built real-time data processing pipeline for analytics using distributed architecture.",
      technologies: ["Java 8", "Spring Boot", "Kafka", "Apache Storm", "HBase", "Microservices"],
    },
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
    <section id="experience" className="py-16 bg-muted/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey and roles in the tech industry
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.position}</CardTitle>
                      <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
