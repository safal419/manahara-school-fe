"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Phone,
  Download,
  FileText,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  MapPin,
  Baby,
  BookOpen,
  GraduationCap,
  School,
  UserCheck,
  FileCheck,
  PhoneCall,
} from "lucide-react";

const admissionSteps = [
  {
    step: 1,
    title: "Visit Our School",
    description:
      "Schedule a visit to our campus, meet our teachers, and tour our facilities. Get a feel for our nurturing environment.",
    icon: School,
    color: "bg-blue-100 dark:bg-blue-900/20",
    iconBg: "bg-blue-500",
  },
  {
    step: 2,
    title: "Complete Application",
    description:
      "Fill out our admission form with your child's information and submit required documents.",
    icon: FileCheck,
    color: "bg-yellow-100 dark:bg-yellow-900/20",
    iconBg: "bg-yellow-500",
  },
  {
    step: 3,
    title: "Brief Interaction",
    description:
      "A friendly interaction with your child to understand their needs and ensure they'll be comfortable in our environment.",
    icon: UserCheck,
    color: "bg-orange-100 dark:bg-orange-900/20",
    iconBg: "bg-orange-500",
  },
];

const ageGroups = [
  {
    level: "ECD/Playgroup",
    ageRange: "2-4 Years",
    icon: Baby,
    color: "bg-pink-100 dark:bg-pink-900/20",
    iconBg: "bg-pink-500",
    description:
      "Perfect for toddlers ready to explore, play, and begin their social learning journey.",
  },
  {
    level: "Grade 1-2",
    ageRange: "5-6 Years",
    icon: BookOpen,
    color: "bg-blue-100 dark:bg-blue-900/20",
    iconBg: "bg-blue-500",
    description:
      "Structured learning with focus on reading, writing, and foundational academic skills.",
  },
  {
    level: "Grade 3",
    ageRange: "7-8 Years",
    icon: GraduationCap,
    color: "bg-purple-100 dark:bg-purple-900/20",
    iconBg: "bg-purple-500",
    description:
      "Advanced learning with critical thinking and preparation for higher grades.",
  },
];

const childDocuments = [
  "Birth certificate (original and copy)",
  "Recent passport-size photographs (4 copies)",
  "Vaccination records (if available)",
  "Previous school records (if applicable)",
];

const parentDocuments = [
  "Parent/Guardian ID copy (citizenship)",
  "Contact information (phone, email, address)",
  "Emergency contact information",
  "Parent photographs (2 copies each)",
];

const admissionPolicy = [
  {
    title: "Age Criteria",
    items: [
      "ECD/Playgroup: 2-4 years (completed by March 31st)",
      "Grade 1: 5-6 years (completed by March 31st)",
      "Grade 2: 6-7 years (completed by March 31st)",
      "Grade 3: 7-8 years (completed by March 31st)",
    ],
  },
  {
    title: "Admission Timeline",
    items: [
      "Applications open: January each year",
      "School visits: By appointment",
      "Application deadline: March 15th",
      "Admission confirmation: Within 1 week",
    ],
  },
  {
    title: "Seat Availability",
    items: [
      "Limited seats per grade level",
      "First-come, first-served basis",
      "Early application recommended",
      "Waiting list maintained if needed",
    ],
  },
];

export default function AdmissionsClientPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Admissions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Join our nurturing educational community. We make the admission
                process simple and welcoming for all families.
              </p>
              <Button
                size="lg"
                className="hover-glow bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                <PhoneCall className="h-5 w-5 mr-2" />
                Call Now for Inquiry
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Simple Admission Process */}
        <section className="py-16 md:py-20 bg-secondary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Simple Admission Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our straightforward admission process ensures a smooth
                transition for your child
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full card-secondary hover-lift text-center border-0`}
                  >
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <div
                          className={`w-16 h-16 ${step.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Age Eligibility */}
        <section className="py-16 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Age Eligibility
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We welcome children at different stages of their early
                development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ageGroups.map((group, index) => (
                <motion.div
                  key={group.level}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full card-secondary hover-lift text-center border-0`}
                  >
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 ${group.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
                      >
                        <group.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {group.level}
                      </h3>
                      <div className="text-2xl font-bold text-yellow-600 mb-4">
                        {group.ageRange}
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {group.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-secondary-section md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Required Documents
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Please prepare these documents to complete the admission process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-blue-50 dark:bg-blue-900/10 border-0">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Baby className="h-6 w-6 mr-2 text-blue-500" />
                      Child's Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {childDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-secondary border-0">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Users className="h-6 w-6 mr-2 text-yellow-600" />
                      Parent's Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {parentDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Admission Policy */}
        <section className="py-16 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Admission Policy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Important guidelines and requirements for the admission process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {admissionPolicy.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover-lift card-secondary">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-yellow-600" />
                        {policy.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {policy.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {item}
                            </span>
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

        {/* Application Form */}
        <section className="py-16 bg-secondary-section md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Application Form
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Download our application form or fill it out during your visit
              </p>
            </motion.div>

            <motion.div
              className="max-w-md mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-secondary border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Download Application Form
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get started with our admission process by downloading the
                    application form
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF Form
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-16 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help with the Application?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our friendly staff is here to assist you with the application
                process
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                asChild
              >
                <a href="tel:+977-1-4153708">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +977-1-4153708
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <School className="h-5 w-5 mr-2" />
                  Visit Our School
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* School Information Footer */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-blue-50 dark:bg-blue-900/10 border-0">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Clock className="h-6 w-6 mr-2 text-blue-500" />
                      School Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <div>
                        <p className="font-medium">School Hours</p>
                        <p className="text-sm text-muted-foreground">
                          9:30 AM - 3:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <div>
                        <p className="font-medium">Working Days</p>
                        <p className="text-sm text-muted-foreground">
                          Sunday - Friday
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-sm text-muted-foreground">
                          8:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-yellow-50 dark:bg-yellow-900/10 border-0">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <MapPin className="h-6 w-6 mr-2 text-yellow-600" />
                      Visit Our School
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          Ward No. 5, Dumakhal
                          <br />
                          Kageshwari Manohara, Kathmandu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          +977-1-4153708
                        </p>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="w-full mt-5 bg-yellow-500 hover:bg-yellow-600 text-black">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
