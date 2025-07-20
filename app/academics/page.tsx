"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Baby,
  BookOpen,
  Users,
  Clock,
  Download,
  FileText,
  Calendar,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Heart,
  Puzzle,
} from "lucide-react";

const curriculumLevels = [
  {
    level: "ECD (Early Childhood Development)",
    ageRange: "3-4 years",
    icon: Baby,
    color: "bg-pink-500",
    description:
      "Foundation stage focusing on sensory development, basic motor skills, and social interaction.",
    subjects: [
      "Sensory Play",
      "Motor Skills",
      "Language Development",
      "Social Skills",
      "Creative Arts",
    ],
    classSize: "12-15 students",
    duration: "3 hours/day",
  },
  {
    level: "Grade 1",
    ageRange: "5-6 years",
    icon: BookOpen,
    color: "bg-blue-500",
    description:
      "Introduction to formal learning with emphasis on reading, writing, and basic mathematics.",
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Arts & Crafts",
    ],
    classSize: "15-18 students",
    duration: "4 hours/day",
  },
  {
    level: "Grade 2",
    ageRange: "6-7 years",
    icon: GraduationCap,
    color: "bg-green-500",
    description:
      "Building on foundational skills with more structured learning and independent work.",
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer Basics",
    ],
    classSize: "15-18 students",
    duration: "5 hours/day",
  },
  {
    level: "Grade 3",
    ageRange: "7-8 years",
    icon: Puzzle,
    color: "bg-purple-500",
    description:
      "Advanced primary education preparing students for higher academic challenges.",
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer Studies",
    ],
    classSize: "18-20 students",
    duration: "5 hours/day",
  },
];

const teachingPrinciples = [
  {
    title: "Montessori Method",
    description:
      "Child-centered approach that encourages natural learning through exploration and discovery.",
    icon: Heart,
  },
  {
    title: "Play-Based Learning",
    description:
      "Learning through play to make education enjoyable and effective for young minds.",
    icon: Puzzle,
  },
  {
    title: "Small Class Sizes",
    description:
      "Individual attention with optimal teacher-to-student ratios for personalized learning.",
    icon: Users,
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Inquiry",
    description: "Contact school for information and schedule a visit",
    icon: "📞",
  },
  {
    step: 2,
    title: "School Visit",
    description: "Tour our facilities and meet with our staff",
    icon: "🏫",
  },
  {
    step: 3,
    title: "Application",
    description: "Submit completed application form with required documents",
    icon: "📝",
  },
  {
    step: 4,
    title: "Assessment",
    description: "Child interaction session with our teachers",
    icon: "👥",
  },
  {
    step: 5,
    title: "Enrollment",
    description: "Complete admission process and fee payment",
    icon: "✅",
  },
];

const downloads = [
  {
    title: "Admission Form 2024",
    description: "Complete application form for new admissions",
    icon: FileText,
    size: "2.5 MB",
    type: "PDF",
  },
  {
    title: "Academic Calendar 2024",
    description: "School calendar with important dates and holidays",
    icon: Calendar,
    size: "1.8 MB",
    type: "PDF",
  },
  {
    title: "Fee Structure",
    description: "Detailed fee structure for all grade levels",
    icon: FileText,
    size: "1.2 MB",
    type: "PDF",
  },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive curriculum designed to nurture young minds
                through Montessori-inspired education, fostering creativity,
                independence, and love for learning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-20 bg-secondary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Curriculum Overview
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Age-appropriate learning programs designed to support each
                child's developmental journey
              </p>
            </motion.div>

            <div className="space-y-8">
              {curriculumLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className={`${level.color} p-8 text-white`}>
                          <level.icon className="h-12 w-12 mb-4" />
                          <h3 className="text-2xl font-bold mb-2">
                            {level.level}
                          </h3>
                          <p className="text-lg text-white mb-4">
                            Age: {level.ageRange}
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>Class Size: {level.classSize}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>Duration: {level.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 p-8">
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {level.description}
                          </p>
                          <h4 className="font-semibold mb-3">
                            Subjects & Activities:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {level.subjects.map((subject) => (
                              <Badge
                                key={subject}
                                variant="secondary"
                                className="text-sm"
                              >
                                {subject}
                              </Badge>
                            ))}
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

        {/* Teaching Philosophy */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Teaching Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Evidence-based approaches that respect each child's unique
                learning style and pace
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Cards on the left */}
              <div className="space-y-8">
                {teachingPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full card-secondary text-center hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <principle.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              {/* Image on the right */}
              <div className="flex justify-center md:justify-center items-center h-full">
                <img
                  src="/students-sting.jpg"
                  alt="Teaching Philosophy"
                  className="rounded-lg w-full md:max-w-2xl md:h-[520px] object-cover md:object-center"
                  style={{ minHeight: "340px", maxHeight: "600px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Admission Policy */}
        <section className="py-20 bg-secondary-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Admission Policy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Age Criteria
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-7">
                      <li>• ECD: 3-4 years (completed by March 31st)</li>
                      <li>• Grade 1: 5-6 years (completed by March 31st)</li>
                      <li>• Grade 2: 6-7 years (completed by March 31st)</li>
                      <li>• Grade 3: 7-8 years (completed by March 31st)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Required Documents
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-7">
                      <li>• Birth certificate (original and copy)</li>
                      <li>• Recent passport-size photographs (4 copies)</li>
                      <li>• Previous school records (if applicable)</li>
                      <li>• Parent/Guardian ID copies</li>
                      <li>• Medical certificate</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Seat Availability
                    </h3>
                    <p className="text-muted-foreground ml-7">
                      Limited seats available for each grade level. Early
                      application is recommended as admissions are processed on
                      a first-come, first-served basis.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Admission Procedure</h2>
                <div className="space-y-4">
                  {admissionSteps.map((step, index) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" className="w-full">
                    Start Application Process
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Downloads</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Important documents and forms for parents and prospective
                students
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloads.map((download, index) => (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg card-secondary transition-shadow duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <download.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1 text-sm group-hover:text-primary transition-colors">
                            {download.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            {download.description}
                          </p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {download.type}
                            </Badge>
                            <span>{download.size}</span>
                          </div>
                        </div>
                        <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
