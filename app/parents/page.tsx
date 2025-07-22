"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Download,
  Clock,
  Users,
  Utensils,
  Phone,
  FileText,
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";

const guidelines = [
  {
    icon: Clock,
    title: "Drop-off & Pick-up Times",
    description: "Please adhere to scheduled times for smooth operations",
    iconBg: "bg-blue-500",
    details: [
      "Drop-off: 7:00 AM - 8:00 AM",
      "Pick-up: 3:00 PM - 4:00 PM (Mon-Fri)",
      "Saturday: 11:00 AM - 12:00 PM",
      "Late pick-up charges may apply after 4:30 PM",
    ],
  },
  {
    icon: Users,
    title: "Uniform Guidelines",
    description: "Proper uniform helps maintain discipline and equality",
    iconBg: "bg-yellow-500",
    details: [
      "Complete school uniform must be worn daily",
      "Clean and well-maintained appearance",
      "Proper school shoes (black/brown)",
      "Name tags should be clearly visible",
      "Sports uniform on designated days",
    ],
  },
  {
    icon: Utensils,
    title: "Lunch & Snack Policy",
    description: "Healthy eating habits for growing minds",
    iconBg: "bg-pink-500",
    details: [
      "Nutritious homemade lunch preferred",
      "No junk food or carbonated drinks",
      "Nut-free options for allergic students",
      "Proper lunch boxes with student names",
      "Water bottles must be labeled",
    ],
  },
  {
    icon: Phone,
    title: "Communication Guidelines",
    description: "Stay connected with teachers and administration",
    iconBg: "bg-orange-500",
    details: [
      "Contact hours: 8:00 AM - 4:00 PM",
      "Emergency contact: Available 24/7",
      "Parent-teacher meetings: Monthly",
      "Use school app for regular updates",
      "Email responses within 24 hours",
    ],
  },
];

const faqs = [
  {
    question: "What is the admission process for new students?",
    answer:
      "The admission process includes filling out an application form, submitting required documents, a brief interaction session with our teachers, and completing the enrollment process. We recommend visiting our school first to understand our environment and teaching methodology.",
  },
  {
    question: "What are the school timings?",
    answer:
      "Our school operates Sunday to Friday from 7:00 AM to 4:00 PM, and Saturday from 7:00 AM to 12:00 PM. Different grade levels may have slightly different timings, which will be communicated during admission.",
  },
  {
    question: "Do you provide transportation services?",
    answer:
      "Yes, we provide school transportation services through our own school van. Our goal is to ensure students travel safely and comfortably. For route details and availability, please contact our administration office.",
  },
  {
    question: "What is your fee structure?",
    answer:
      "Our fee structure varies by grade level and includes tuition, materials, and activity fees. Detailed fee information is available in our admission packet and can be discussed during the school visit. We offer flexible payment options.",
  },
  {
    question: "How do you handle medical emergencies?",
    answer:
      "We have trained staff for first aid and maintain emergency contact information for all students. For serious emergencies, we immediately contact parents and arrange for medical care. We also conduct regular health check-ups.",
  },
  {
    question: "What extracurricular activities do you offer?",
    answer:
      "We offer various activities including arts and crafts, music, dance, sports, science clubs, and cultural programs. These activities are integrated into our curriculum to ensure holistic development of each child.",
  },
  {
    question: "How can parents track their child's progress?",
    answer:
      "We provide regular progress reports, conduct monthly parent-teacher meetings, and use our mobile app to share daily updates. Parents can also schedule individual meetings with teachers when needed.",
  },
  {
    question: "What is your policy on homework?",
    answer:
      "We believe in age-appropriate homework that reinforces classroom learning. For younger children, homework focuses on simple activities and reading. We ensure homework doesn't overwhelm children and allows time for play and family interaction.",
  },
];

const downloads = [
  {
    title: "Academic Calendar 2024-25",
    description:
      "Complete academic year calendar with holidays and important dates",
    icon: Calendar,
    size: "2.1 MB",
    type: "PDF",
    iconBg: "bg-blue-500",
  },
  {
    title: "Supply List",
    description: "Required school supplies and materials for each grade level",
    icon: FileText,
    size: "1.5 MB",
    type: "PDF",
    iconBg: "bg-yellow-500",
  },
  {
    title: "School Rules & Regulations",
    description: "Comprehensive guide to school policies and procedures",
    icon: FileText,
    size: "3.2 MB",
    type: "PDF",
    iconBg: "bg-pink-500",
  },
  {
    title: "Health & Safety Guidelines",
    description: "Important health and safety protocols for students",
    icon: Shield,
    size: "1.8 MB",
    type: "PDF",
    iconBg: "bg-orange-500",
  },
  {
    title: "Parent Handbook",
    description: "Complete guide for parents covering all school policies",
    icon: FileText,
    size: "4.5 MB",
    type: "PDF",
    iconBg: "bg-purple-500",
  },
  {
    title: "Emergency Contact Form",
    description: "Form to update emergency contact information",
    icon: Phone,
    size: "0.8 MB",
    type: "PDF",
    iconBg: "bg-green-500",
  },
];

// Hook to detect mobile OS
function useMobileOS() {
  const [os, setOS] = useState<string>("other");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent =
        window.navigator.userAgent ||
        window.navigator.vendor ||
        (window as any).opera;
      if (/android/i.test(userAgent)) {
        setOS("android");
      } else if (
        /iPad|iPhone|iPod/.test(userAgent) &&
        !("MSStream" in window)
      ) {
        setOS("ios");
      } else {
        setOS("other");
      }
    }
  }, []);
  return os;
}

export default function ParentsPage() {
  const mobileOS = useMobileOS();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Parents Portal
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Everything you need to know to support your child's educational
                journey at Manahara School
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-12 bg-secondary-section md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Smartphone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    New Feature
                  </Badge>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">
                  Manahara School Mobile App
                </h2>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                  Stay connected with your child's education through our
                  comprehensive mobile application developed by Dynamic
                  Technosoft. Get real-time updates, track progress, and
                  communicate with teachers seamlessly.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Real-time attendance updates",
                    "Daily activity reports and photos",
                    "Direct messaging with teachers",
                    "Academic progress tracking",
                    "Event notifications and reminders",
                    "Fee payment and receipt management",
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {mobileOS === "android" && (
                    <a
                      href="https://play.google.com/store/apps/details?id=com.csoftnepal.eshikshya.manahara&hl=en_NZ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get it on Google Play"
                        style={{
                          height: "48px",
                          width: "auto",
                          display: "block",
                        }}
                      />
                    </a>
                  )}
                  {mobileOS === "ios" && (
                    <a
                      href="https://apps.apple.com/us/app/manahara-school/id6737801194"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Download_on_the_App_Store_RGB_blk.svg"
                        alt="Download on the App Store"
                        style={{
                          height: "48px",
                          width: "auto",
                          display: "block",
                        }}
                      />
                    </a>
                  )}
                  {mobileOS === "other" && (
                    <>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.csoftnepal.eshikshya.manahara&hl=en_NZ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                          alt="Get it on Google Play"
                          style={{
                            height: "48px",
                            width: "auto",
                            display: "block",
                            marginBottom: "12px",
                          }}
                        />
                      </a>
                      <a
                        href="https://apps.apple.com/us/app/manahara-school/id6737801194"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Download_on_the_App_Store_RGB_blk.svg"
                          alt="Download on the App Store"
                          style={{
                            height: "48px",
                            width: "auto",
                            display: "block",
                          }}
                        />
                      </a>
                    </>
                  )}
                </div>
              </motion.div>
              {/* Center the image on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center items-center w-full"
              >
                <Image
                  src="/manahara-app.webp" // replace with actual image src
                  alt="Manahara School Mobile App Preview"
                  width={320}
                  height={600}
                  className="mx-auto rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parent Guidelines */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Parent Guidelines
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Important guidelines to ensure a smooth and positive experience
                for your child
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {guidelines.map((guideline, index) => (
                <motion.div
                  key={guideline.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-secondary hover-lift">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 ${guideline.iconBg} rounded-lg flex items-center justify-center`}
                        >
                          <guideline.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-base md:text-lg lg:text-xl">
                            {guideline.title}
                          </CardTitle>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1">
                            {guideline.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {guideline.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-sm md:text-base"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-12 md:py-20 bg-secondary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our school policies and
                procedures
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Important Downloads
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Access important documents, forms, and resources for parents
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {downloads.map((download, index) => (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift card-secondary group cursor-pointer">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 ${download.iconBg} rounded-lg flex items-center justify-center transition-colors shrink-0`}
                        >
                          <download.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base mb-2 group-hover:text-primary transition-colors">
                            {download.title}
                          </h3>
                          <p className="text-muted-foreground text-xs md:text-sm mb-3 leading-relaxed">
                            {download.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs">
                                {download.type}
                              </Badge>
                              <span>{download.size}</span>
                            </div>
                            <Download className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-12 bg-secondary-section md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AlertCircle className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Need Additional Support?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">
                If you have questions not covered in our FAQs or need
                personalized assistance, our team is here to help you and your
                child succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="hover-glow text-sm md:text-base"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-sm md:text-base bg-transparent"
                >
                  <Link href="tel:+977-1-4153708">Call Now</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
