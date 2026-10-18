import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Marquee } from "@/components/site/marquee"
import { LearningPath } from "@/components/site/learning-path"
import { Demos } from "@/components/site/demos-container"
import { CodeShowcase } from "@/components/site/code-showcase"
import { Faq } from "@/components/site/faq"
import { Resources } from "@/components/site/resources"
import { CTA } from "@/components/site/cta"
import { Footer } from "@/components/site/footer"
import { ScrollProgress } from "@/components/site/scroll-progress"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10 flex-1">
        <Hero />
        <Marquee />
        <LearningPath />
        <Demos />
        <CodeShowcase />
        <Faq />
        <Resources />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
