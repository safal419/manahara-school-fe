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
import { fetchHome, fetchEvents } from "@/lib/api";

export default function ClientHomePage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [homeData, setHomeData] = useState<any>(null);
  const [loadingHome, setLoadingHome] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data.data || []);
        setLoadingEvents(false);
      })
      .catch(() => setLoadingEvents(false));
    fetchHome()
      .then((data) => {
        setHomeData(data.data);
        setLoadingHome(false);
      })
      .catch(() => setLoadingHome(false));
  }, []);

  function getImageUrl(imageObj: any) {
    if (!imageObj) return "";
    const formats = imageObj.formats || {};
    return formats.medium?.url || formats.small?.url || imageObj.url || "";
  }

  const heroImageUrl = getImageUrl(homeData?.heroImage);
  const missionImageUrl = getImageUrl(homeData?.missionImage);
  const visionImageUrl = getImageUrl(homeData?.visionImage);
  const valuesImageUrl = getImageUrl(homeData?.valuesImage);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Loader for home data */}
        {loadingHome ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <HeroSection imageUrl={heroImageUrl} />
            <MissionVisionSection
              missionImageUrl={missionImageUrl}
              visionImageUrl={visionImageUrl}
              valuesImageUrl={valuesImageUrl}
            />
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
          </>
        )}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
