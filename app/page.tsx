import type { Metadata } from "next";
import ClientHomePage from "./ClientHomePage";

// CMS Integration Point: This metadata should come from CMS
export const metadata: Metadata = {
  title: "Home - Premier Early Childhood Education in Kathmandu",
  description:
    "Welcome to Manahara School - Quality early childhood education with Montessori-inspired curriculum. Nurturing young minds with love and learning since 2021 in Mulpani, Kathmandu.",
  openGraph: {
    title: "Manahara School - Home",
    description:
      "Premier early childhood education with Montessori-inspired curriculum in Kathmandu, Nepal.",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  return <ClientHomePage />;
}
