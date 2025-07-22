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
import { useEffect, useState } from "react";
import { Calendar, Clock, User, ArrowRight, Bell } from "lucide-react";
import { fetchNews, fetchEvents } from "@/lib/api";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews()
      .then((data) => {
        setNews(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load news");
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchEvents()
      .then((data) => {
        setEvents(data.data || []);
        setLoadingEvents(false);
      })
      .catch(() => setLoadingEvents(false));
  }, []);

  // Featured and regular articles
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const featuredNews = sortedNews.filter((item) => item.featured);
  const featuredArticles = featuredNews.slice(0, 2);
  const extraFeatured = featuredNews.slice(2); // These go to recent news
  const regularArticles = [
    ...extraFeatured,
    ...sortedNews.filter((item) => !item.featured),
  ];

  // Helper to get best image url
  function getImageUrl(image: any) {
    return (
      image?.formats?.medium?.url ||
      image?.formats?.small?.url ||
      image?.url ||
      "/placeholder.svg"
    );
  }

  const getFullDescription = (descArray: any[]) => {
    return (
      descArray
        ?.map((block: any) =>
          block.children?.map((child: any) => child.text).join(" ")
        )
        .join("\n\n") || ""
    );
  };

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

        {/* Loading/Error State */}
        {loading ? (
          <div className="min-h-screen flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              <p className="text-lg font-medium text-gray-700 animate-pulse">
                Loading, please wait...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-20">{error}</div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredArticles.length > 0 && (
              <section className="py-12 bg-secondary-section md:py-20">
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
                    {featuredArticles.map((item, index) => (
                      <Card
                        key={item.id}
                        className="overflow-hidden hover-lift mb-4 last:mb-0"
                      >
                        <Link href={`/news/${item.slug}`}>
                          <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-64 md:h-80 lg:h-full">
                              <Image
                                src={getImageUrl(item.image)}
                                alt={item.title}
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
                                  {item.category}
                                </Badge>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                  <span>{item.date}</span>
                                </div>
                              </div>
                              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                                {item.excerpt}
                              </p>
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center space-x-2">
                                  <User className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                                  <span className="text-xs md:text-sm text-muted-foreground">
                                    {item.author}
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
                    ))}
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
                  {regularArticles
                    .filter((item) => item.slug)
                    .map((item, index) => {
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="h-full hover-lift group">
                            <Link href={`/news/${item.slug}`}>
                              <div className="relative h-40 md:h-48 overflow-hidden">
                                <Image
                                  src={getImageUrl(item.image)}
                                  alt={item.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {item.category}
                                  </Badge>
                                </div>
                              </div>
                              <CardContent className="p-4 md:p-6">
                                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 text-xs md:text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                    <span>{item.date}</span>
                                  </div>
                                </div>
                                <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
                                  {item.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <User className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                                    <span className="text-xs md:text-sm text-muted-foreground">
                                      {item.author}
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
                      );
                    })}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Upcoming Events */}
        <section className="py-12 md:py-20 bg-secondary-section">
          {loadingEvents ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <UpcomingEventsSection events={events} />
          )}
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
