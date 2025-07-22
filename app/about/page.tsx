import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

// CMS Integration Point: This data should come from CMS
export const metadata: Metadata = {
  title: "About Us - Our Story, Mission & Team",
  description:
    "Learn about Manahara School's journey since 2021, our Montessori-inspired approach, experienced team, and modern facilities dedicated to early childhood education in Kathmandu.",
  openGraph: {
    title: "About Manahara School - Our Story & Mission",
    description:
      "Discover our journey, mission, and dedicated team committed to quality early childhood education.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
