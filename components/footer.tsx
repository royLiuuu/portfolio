import { Github, Linkedin, Mail } from "lucide-react"
import { WeChatIcon } from "@/components/wechat-icon"
import { RedNoteIcon } from "@/components/rednote-icon"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Yi Liu. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
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
            <WeChatIcon />
            <RedNoteIcon />
            <a
              href="mailto:royliu810@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
