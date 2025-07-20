"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { MissionVisionSection } from "@/components/sections/mission-vision-section"
import { GuidingPrinciplesSection } from "@/components/sections/guiding-principles-section"
import { CoreValuesSection } from "@/components/sections/core-values-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { GalleryPreviewSection } from "@/components/sections/gallery-preview-section"
import { FloatingActionButton } from "@/components/ui/floating-action-button"

export default function ClientHomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* CMS Integration: All section data should come from CMS */}
        <HeroSection />
        <MissionVisionSection />
        <GuidingPrinciplesSection />
        <CoreValuesSection />
        <HighlightsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <GalleryPreviewSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
