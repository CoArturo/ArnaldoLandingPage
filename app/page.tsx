import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { IsThisForYou } from "@/components/landing/is-this-for-you"
import { Method } from "@/components/landing/method"
import { HowClassesWork } from "@/components/landing/how-classes-work"
import { AboutTeacher } from "@/components/landing/about-teacher"
import { WhoIHelp } from "@/components/landing/who-i-help"
import { LearningModalities } from "@/components/landing/learning-modalities"
import { Pricing } from "@/components/landing/pricing"
import { Rules } from "@/components/landing/rules"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <IsThisForYou />
        <Method />
        <HowClassesWork />
        <AboutTeacher />
        <WhoIHelp />
        <LearningModalities />
        <Pricing />
        <Rules />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
