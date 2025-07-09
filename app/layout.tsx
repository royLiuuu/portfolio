import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import QueryClientProviderWrapper from "@/components/query-client-provider"
import Head from "next/head"
const inter = Inter({ subsets: ["latin"] })


export const metadata = {
  title: "Roy Liu - Software Engineer",
  description: "Professional portfolio of Roy Liu, Software Engineer specializing in Full Stack Development and Java Backend",
  keywords: ["Roy-Co","Roy Liu","Yi Liu", "Full Stack Engineer", "Java Backend", "Portfolio", "Sydney Developer"],
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: "Roy Liu - Software Engineer",
    description: "Professional portfolio of Roy Liu, Software Engineer specializing in Full Stack Development and Java Backend",
    url: process.env.NODE_ENV === 'production' ? 'https://www.roy-co.au' : 'http://localhost:3000',
    siteName: "Roy Liu Portfolio",
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Roy Liu Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roy Liu - Software Engineer",
    description: "Professional portfolio of Roy Liu, Software Engineer",
    images: ['/logo.png'],
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://www.roy-co.au' : 'http://localhost:3000',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Roy-Co | Full Stack Engineer Portfolio</title>
        <meta name="description" content="Roy-Co is the personal website of a full stack engineer with 10+ years of Java backend experience, now building AI-enhanced web platforms in Sydney." />
        <meta name="keywords" content="Roy-Co, Roy Portfolio, Full Stack Engineer, Java Backend, AI Developer, Sydney Engineer" />
        <meta name="author" content="Roy" />
        <meta property="og:title" content="Roy-Co | Full Stack Engineer Portfolio" />
        <meta property="og:description" content="Explore Roy-Co: the personal site of a full stack engineer skilled in Java, Python, AWS, and AI systems." />
        <meta property="og:url" content="https://www.roy-co.au/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" /> 
        <link rel="canonical" href="https://www.roy-co.au/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <QueryClientProviderWrapper>
            {children}
            <Toaster />
          </QueryClientProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
