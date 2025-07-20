"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Building,
  BookOpen,
  Shield,
  Droplets,
  TreePine,
  Heart,
  Clock,
} from "lucide-react";

// CMS Integration: All this data should come from CMS
const facilities = [
  {
    icon: Building,
    title: "Modern Classrooms",
    description:
      "Our classrooms are spacious, well-lit, and equipped with modern furniture and learning aids. Each room is designed to foster interactive, hands-on learning and to provide a comfortable, inspiring environment for every child.",
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconBg: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "The safety of our students is our top priority. Our campus is monitored by CCTV, has secure entry points, and is staffed by trained personnel to ensure a safe and nurturing environment for all children.",
    color: "bg-yellow-50 dark:bg-yellow-900/10",
    iconBg: "bg-yellow-500",
  },
  {
    icon: Droplets,
    title: "Clean Water",
    description:
      "We provide filtered drinking water and maintain high standards of hygiene with modern sanitation facilities, ensuring the health and well-being of every student.",
    color: "bg-pink-50 dark:bg-pink-900/20",
    iconBg: "bg-pink-500",
  },
  {
    icon: TreePine,
    title: "Outdoor Play Area",
    description:
      "Our large outdoor playground is equipped with safe, age-appropriate play structures and open spaces, encouraging physical activity, teamwork, and fun in a natural setting.",
    color: "bg-orange-50 dark:bg-orange-900/10",
    iconBg: "bg-orange-500",
  },
  {
    icon: BookOpen,
    title: "Library",
    description:
      "Our well-stocked library offers a wide range of age-appropriate books and resources, fostering a love for reading, exploration, and independent learning among students.",
    color: "bg-purple-50 dark:bg-purple-900/20",
    iconBg: "bg-purple-500",
  },
  {
    icon: Heart,
    title: "Health Care",
    description:
      "We provide on-site first aid facilities and regular health monitoring, ensuring that students receive prompt care and support for their physical and emotional well-being.",
    color: "bg-green-50 dark:bg-green-900/20",
    iconBg: "bg-green-500",
  },
];

// CMS Integration: Team data should come from CMS
const team = [
  {
    name: "Mr. J.R. Sapkota",
    position: "Founder",
    qualification: "M.Ed in Educational Leadership",
    experience: "10 years",
    image: "/jr-sapkota.jpg",
  },
  {
    name: "Ms. Gauri Phuyal",
    position: "Academic Coordinator",
    qualification: "M.Ed in Curriculum and Instruction",
    experience: "5 years",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Ms. Anjana Sharma",
    position: "Grade 2 Teacher",
    qualification: "B.Ed in Primary Education",
    experience: "7 years",
    image: "/placeholder.svg?height=150&width=150",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Helper to get text color from iconBg (e.g., bg-blue-500 -> text-blue-500)
function getTextColor(bg: string) {
  return bg.replace("bg-", "text-");
}

export default function AboutPageClient() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero Section - Primary Background */}
        <section className="py-16 md:py-20 lg:py-24 bg-primary-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
              >
                About{" "}
                <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                  Manahara School
                </span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Established in 2021, Manahara School has been dedicated to
                providing quality early childhood education through our
                Montessori-inspired approach, nurturing young minds in a safe
                and loving environment.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* School Introduction - Secondary Background */}
        <section className="py-16 md:py-20 lg:py-24 bg-secondary-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  About Us
                </motion.h2>
                {/* CMS Integration: School story content should come from CMS */}
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Manahara School was founded with a vision to create a
                    nurturing educational environment where children can develop
                    their full potential. Located in the heart of Dumakhal,
                    Kathmandu, we serve families seeking quality early childhood
                    education.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Our Montessori-inspired curriculum emphasizes hands-on
                    learning, independence, and respect for each child's natural
                    development. We believe that every child is unique and
                    deserves an education tailored to their individual needs and
                    interests.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Over the past three years, we have grown from a small school
                    to a recognized institution in the community, maintaining
                    our commitment to excellence in education and child care.
                  </motion.p>
                </div>
                <motion.div
                  className="grid grid-cols-2 gap-6 mt-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-center p-6 card-secondary rounded-2xl hover-lift"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      2021
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Established
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 card-secondary rounded-2xl hover-lift"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      100+
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Students
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* CMS Integration: School building image should come from CMS */}
                  <Image
                    src="/about-us.webp"
                    alt="Manahara School Building"
                    width={700}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Heart className="h-12 w-12 text-primary-foreground" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline - Primary Background */}
        <section className="py-16 md:py-20 lg:py-24 bg-primary-section">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Our Journey
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                A commitment to excellence in early childhood education
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
              {/* Timeline (Left) */}
              <div className="relative flex-1 min-w-0">
                <div className="relative w-full">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 hidden md:block" />
                  <div className="space-y-12">
                    {[
                      {
                        number: "1",
                        year: "2021",
                        title: "Foundation",
                        description:
                          "Manahara School was established with a vision to provide quality early childhood education in the Dumakhal area of Kathmandu, focusing on Montessori-based learning principles.",
                        color: "bg-orange-300",
                        delay: 0.1,
                      },
                      {
                        number: "2",
                        year: "",
                        title: "Government Registration",
                        description:
                          "Successfully registered as a private pre-primary and basic school under the Nepal Government, ensuring compliance with national education standards and regulations.",
                        color: "bg-purple-300",
                        delay: 0.2,
                      },
                      {
                        number: "3",
                        year: "",
                        title: "Program Expansion",
                        description:
                          "Expanded our programs to serve children from ECD/Playgroup through Grade 2, implementing a comprehensive curriculum that balances academic learning with social and emotional development.",
                        color: "bg-yellow-300",
                        delay: 0.3,
                      },
                      {
                        number: "4",
                        year: "",
                        title: "Present Day",
                        description:
                          "Continuing our mission to provide exceptional early childhood education with modern facilities, experienced teachers, and a parent communication app to keep families engaged in their child's learning journey.",
                        color: "bg-green-300",
                        delay: 0.4,
                      },
                    ].map((milestone, index) => (
                      <motion.div
                        key={milestone.number}
                        className="relative flex items-start space-x-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: milestone.delay }}
                        viewport={{ once: true }}
                      >
                        {/* Timeline Badge */}
                        <motion.div
                          className={`relative z-10 w-14 h-14 ${milestone.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {milestone.number}
                        </motion.div>
                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: milestone.delay + 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="flex items-center space-x-2 mb-2">
                              {milestone.year && (
                                <span className="text-lg md:text-xl font-bold text-primary">
                                  {milestone.year} -
                                </span>
                              )}
                              <h3 className="text-base md:text-lg font-bold">
                                {milestone.title}
                              </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                              {milestone.description}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Photo Collage (Right) */}
              <div className="flex-1 flex justify-center items-center mt-20 w-full">
                <div className="grid grid-cols-2 grid-rows-2 gap-10 max-w-2xl mx-auto justify-center">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/cultural-program.jpg"
                      alt="Cultural Program"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/sports-day.jpg"
                      alt="Sports Day"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/hero-image.jpg"
                      alt="Founder"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/about-us.webp"
                      alt="School Building"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  number: "3+",
                  label: "Years of Excellence",
                  color: "text-orange-500",
                },
                {
                  number: "100+",
                  label: "Happy Students",
                  color: "text-green-500",
                },
                { number: "4", label: "Grade Levels", color: "text-blue-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl backdrop-blur-sm border border-border/50 hover-lift"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Founder Message - Primary Background */}
        <section className="py-16 md:py-20 lg:py-24 bg-secondary-section">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                  Message from Our Founder
                </h2>
              </motion.div>

              <motion.div
                className="card-secondary rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* CMS Integration: Founder image should come from CMS */}
                    <Avatar className="w-32 h-32 lg:w-40 lg:h-40 ring-4 ring-primary/20">
                      <AvatarImage src="/jr-sapkota.jpg" alt="Founder" />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                        KS
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="flex-1 text-center lg:text-left">
                    {/* CMS Integration: Founder message should come from CMS */}
                    <motion.blockquote
                      className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6 font-light italic"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      "When I founded Manahara School in 2021, my vision was
                      simple yet profound: to create a place where every child
                      feels valued, loved, and inspired to learn. Our
                      Montessori-inspired approach allows children to discover
                      their unique talents while building confidence and
                      independence. I am proud of how far we've come and excited
                      about the bright future ahead for our students and school
                      community."
                    </motion.blockquote>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <p className="font-semibold text-xl mb-1">
                        Mr. J.R. Sapkota
                      </p>
                      <p className="text-primary font-medium mb-1">
                        Founder & Principal
                      </p>
                      {/* <p className="text-sm text-muted-foreground">
                        M.Ed in Early Childhood Education
                      </p> */}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-primary-section">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Our Facilities
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                Modern infrastructure designed to support learning and
                development
              </p>
            </motion.div>
            <div className="space-y-16">
              {facilities.map((facility, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={facility.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row ${
                      isEven ? "" : "md:flex-row-reverse"
                    } items-center gap-10 md:gap-16`}
                  >
                    {/* Image/Illustration */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div
                        style={{
                          aspectRatio: "16/9",
                          width: "100%",
                          maxWidth: "700px",
                          minHeight: "280px",
                          overflow: "hidden",
                          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                          borderRadius: "40px",
                          background: "#eee",
                        }}
                        className={`bg-white flex items-center justify-center relative`}
                      >
                        {/* You can replace this icon with an actual image if you have one for each facility */}
                        <facility.icon
                          className="h-40 w-40 text-white opacity-30 absolute inset-0 m-auto"
                          style={{ color: "white", zIndex: 1 }}
                        />
                        {/* Example: If you have an image, use <Image src={facility.image} ... /> here */}
                        {/* Icon in a circle below the image */}
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                      {/* Icon in a circle below the image and above the title */}
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${facility.iconBg}`}
                        style={{ zIndex: 2 }}
                      >
                        <facility.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center text-center md:text-left">
                        {facility.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg text-center md:text-left">
                        {facility.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
