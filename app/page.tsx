import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Theme Switcher - Fixed position at top-right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
