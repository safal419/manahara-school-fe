import type { Metadata } from "next"
import TermsClientPage from "./TermsClientPage"

export const metadata: Metadata = {
  title: "Terms of Service - School Policies & Conditions",
  description:
    "Read Manahara School's terms of service, including enrollment policies, academic regulations, code of conduct, and legal terms for students and parents.",
  openGraph: {
    title: "Terms of Service - Manahara School",
    description:
      "Comprehensive terms of service covering enrollment policies, academic regulations, and school guidelines.",
    images: ["/og-terms.jpg"],
  },
}

export default function TermsPage() {
  return <TermsClientPage />
}
