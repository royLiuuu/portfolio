"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  const skills = {
    languages: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
    ],
    frontend: [
      "React",
      "Next.js",
      "Vue.js",
      "Redux",
      "Tailwind CSS",
      "Shadcn",
      "MUI",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "Express",
      "Django",
      "Spring Boot",
      "REST API",
      "Flask",
      "FastAPI",
      "Next.js",
    ],
    devops: [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Jira",
      "Figma",
      "Postman",
      "npm/yarn",
      "Cursor",
      "bolt.new",
      "v0"
    ],
  };

  return (
    <section id="skills" className="py-16 bg-muted/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The technologies and tools I work with to build modern
              applications
            </p>
          </div>
        </motion.div>

        <div className="mt-12">
          <Tabs
            defaultValue="languages"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            {Object.entries(skills).map(([category, skillList]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === category ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
