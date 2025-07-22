"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionVisionSection } from "@/components/sections/mission-vision-section";
import { GuidingPrinciplesSection } from "@/components/sections/guiding-principles-section";
import { CoreValuesSection } from "@/components/sections/core-values-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GalleryPreviewSection } from "@/components/sections/gallery-preview-section";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { useEffect, useState } from "react";
import { fetchEvents } from "@/lib/api";

export default function ClientHomePage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data.data || []);
        setLoadingEvents(false);
      })
      .catch(() => setLoadingEvents(false));
  }, []);

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
        {loadingEvents ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <UpcomingEventsSection events={events} />
        )}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
