import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/ui/preloader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manaharaschool.edu.np"),
  title: {
    default:
      "Manahara School - Premier Early Childhood Education in Kathmandu, Nepal",
    template: "%s | Manahara School",
  },
  description:
    "Manahara School offers quality early childhood education with Montessori-inspired curriculum in Kathmandu, Nepal. Established in 2021, we provide ECD to Grade 3 education with experienced teachers and modern facilities.",
  keywords: [
    "Manahara School",
    "early childhood education",
    "Montessori education",
    "Kathmandu schools",
    "Nepal education",
    "ECD programs",
    "primary school",
    "quality education",
    "child development",
    "Mulpani school",
  ],
  authors: [{ name: "Manahara School", url: "https://manaharaschool.edu.np" }],
  creator: "Manahara School",
  publisher: "Manahara School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manaharaschool.edu.np",
    siteName: "Manahara School",
    title:
      "Manahara School - Premier Early Childhood Education in Kathmandu, Nepal",
    description:
      "Quality early childhood education with Montessori-inspired curriculum. Nurturing young minds with love and learning since 2021.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manahara School - Early Childhood Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manahara School - Premier Early Childhood Education",
    description:
      "Quality early childhood education with Montessori-inspired curriculum in Kathmandu, Nepal.",
    images: ["/og-image.jpg"],
    creator: "@manaharaschool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://manaharaschool.edu.np",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Manahara School" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="manahara-theme"
        >
          <Preloader />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
