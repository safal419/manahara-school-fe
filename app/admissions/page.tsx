import type { Metadata } from "next";
import AdmissionsClientPage from "./AdmissionsClientPage";

export const metadata: Metadata = {
  title: "Admissions - Join Our Nurturing Educational Community",
  description:
    "Simple and welcoming admission process at Manahara School. Learn about age eligibility, required documents, and how to apply for quality early childhood education in Kathmandu.",
  openGraph: {
    title: "Admissions - Manahara School",
    description:
      "Join our nurturing educational community with a simple and welcoming admission process.",
    images: ["/og-admissions.jpg"],
  },
};

export default function AdmissionsPage() {
  return <AdmissionsClientPage />;
}
