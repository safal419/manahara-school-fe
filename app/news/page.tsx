"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Calendar, Clock, User, ArrowRight, Bell } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    slug: "new-montessori-learning-materials",
    title: "New Montessori Learning Materials Introduced",
    excerpt:
      "We've added state-of-the-art Montessori learning materials to enhance our students' educational experience.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Mrs. Kamala Shrestha",
    date: "2024-03-15",
    category: "Education",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "annual-sports-day-2024",
    title: "Annual Sports Day 2024 - A Grand Success",
    excerpt:
      "Our students showcased their athletic talents and team spirit in various sports activities during our annual sports day.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Mr. Rajesh Tamang",
    date: "2024-03-10",
    category: "Sports",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "parent-teacher-meeting-schedule",
    title: "Parent-Teacher Meeting Schedule Released",
    excerpt:
      "Important dates for parent-teacher meetings have been announced for the upcoming month.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Ms. Sunita Maharjan",
    date: "2024-03-08",
    category: "Announcement",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "science-exhibition-2024",
    title: "Science Exhibition: Young Minds at Work",
    excerpt:
      "Students presented amazing experiments and discoveries in our monthly science exhibition.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Ms. Anita Gurung",
    date: "2024-02-28",
    category: "Science",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "cultural-program-celebration",
    title: "Cultural Program Celebrates Nepali Heritage",
    excerpt:
      "Students performed traditional dances and songs celebrating our rich cultural heritage.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Mrs. Laxmi Thapa",
    date: "2024-02-20",
    category: "Culture",
    readTime: "4 min read",
    featured: false,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Art & Craft Workshop",
    date: "2024-04-15",
    time: "10:00 AM",
    description: "Creative workshop for all grade levels",
    type: "Workshop",
  },
  {
    id: 2,
    title: "Parent Orientation Program",
    date: "2024-04-20",
    time: "2:00 PM",
    description: "Information session for new parents",
    type: "Meeting",
  },
  {
    id: 3,
    title: "Field Trip to National Museum",
    date: "2024-04-25",
    time: "9:00 AM",
    description: "Educational trip for Grade 2 & 3 students",
    type: "Trip",
  },
  {
    id: 4,
    title: "Health Check-up Camp",
    date: "2024-05-02",
    time: "11:00 AM",
    description: "Annual health screening for all students",
    type: "Health",
  },
];

export default function NewsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

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
                News & Activities
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Stay updated with the latest news, events, and activities
                happening at Manahara School
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <motion.div
                className="mb-8 md:mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Bell className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
                    Featured News
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover-lift">
                  <Link href={`/news/${featuredArticle.slug}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-64 md:h-80 lg:h-full">
                        <Image
                          src={featuredArticle.image || "/placeholder.svg"}
                          alt={featuredArticle.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground text-xs md:text-sm">
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 text-xs md:text-sm text-muted-foreground">
                          <Badge variant="secondary" className="text-xs">
                            {featuredArticle.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{featuredArticle.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{featuredArticle.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 hover:text-primary transition-colors">
                          {featuredArticle.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                          {featuredArticle.excerpt}
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center space-x-2">
                            <User className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                            <span className="text-xs md:text-sm text-muted-foreground">
                              {featuredArticle.author}
                            </span>
                          </div>
                          <Button size="sm" className="group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Recent News */}
        <section className="py-12 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Recent News
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Latest updates and announcements from our school community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover-lift group">
                    <Link href={`/news/${article.slug}`}>
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                            <span className="text-xs md:text-sm text-muted-foreground">
                              {article.author}
                            </span>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="group-hover:text-primary text-xs md:text-sm"
                          >
                            Read More
                            <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
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
                Upcoming Events
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Mark your calendar for these exciting upcoming events and
                activities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {event.type}
                            </Badge>
                            <div className="flex items-center space-x-1 text-xs md:text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                              <span>{event.date}</span>
                            </div>
                          </div>
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base mb-2">
                            {event.description}
                          </p>
                          <div className="flex items-center space-x-1 text-xs md:text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{event.time}</span>
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
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
