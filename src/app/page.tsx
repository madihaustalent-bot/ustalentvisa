import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import {
  TrustBar,
  Pathways,
  AITools,
  HowItWorks,
  Transformation,
  CoursePreview,
  Testimonials,
  Resources,
  FinalCTA,
} from "@/components/site/sections";
import { Pricing } from "@/components/site/pricing";
import { VisaCompare } from "@/components/site/visa-compare";
import { FAQ_Section } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { EligibilityQuiz } from "@/components/site/eligibility-quiz";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Pathways />
        <AITools />
        <HowItWorks />
        <Transformation />
        <VisaCompare />
        <CoursePreview />
        <Testimonials />
        <Pricing />
        <Resources />
        <FAQ_Section />
        <FinalCTA />
      </main>

      <Footer />

      {/* Global interactive modal — opened via openQuiz() */}
      <EligibilityQuiz />
    </div>
  );
}
