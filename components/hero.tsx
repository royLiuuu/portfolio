"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Roy Liu</h1>
              <p className="text-xl text-muted-foreground">Software Engineer</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I build robust, scalable applications with modern technologies. Passionate about clean code, performance
              optimization, and creating exceptional user experiences.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1" onClick={() => window.location.href = "#contact"}>
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Link href="resume.pdf" target="_blank">
                <Button variant="outline" className="gap-1">
                  Download Resume
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/royLiuuu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/roy-liu-752208335/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-full border border-border bg-muted w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <img
                src="/avatar.png"
                alt="Profile"
                className="object-cover"
                style={{ width: '100%', height: '100%', objectPosition: '50% 100%' }}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
