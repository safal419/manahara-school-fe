import type { Metadata } from "next"
import PrivacyClientPage from "./PrivacyClientPage"

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Privacy Rights",
  description:
    "Learn how Manahara School protects your personal information, student data, and privacy rights. Our comprehensive privacy policy explains data collection, usage, and security measures.",
  openGraph: {
    title: "Privacy Policy - Manahara School",
    description: "Comprehensive privacy policy explaining how we protect your personal information and student data.",
    images: ["/og-privacy.jpg"],
  },
}

export default function PrivacyPage() {
  return <PrivacyClientPage />
}
