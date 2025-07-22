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
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Eye,
  ThumbsUp,
} from "lucide-react";
import { fetchNewsBySlug, fetchNews } from "@/lib/api";
import { toast } from "@/components/ui/use-toast";

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<any | null>(null);
  const [recentNews, setRecentNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewsBySlug(slug)
      .then((data) => {
        setArticle(data.data && data.data[0] ? data.data[0] : null);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load article");
        setLoading(false);
      });
    // Fetch recent news for the section below
    fetchNews().then((data) => {
      if (data.data) {
        // Exclude the current article and sort by date
        const sorted = data.data
          .filter((item: any) => item.slug !== slug)
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        setRecentNews(sorted.slice(0, 4));
      }
    });
  }, [slug]);

  function getImageUrl(image: any) {
    return (
      image?.formats?.medium?.url ||
      image?.formats?.small?.url ||
      image?.url ||
      "/placeholder.svg"
    );
  }

  function renderContent(content: any) {
    if (!Array.isArray(content)) return null;
    // Join all text, but preserve HTML tags if present
    return content.map((block: any, idx: number) => {
      // If the text contains HTML tags, render as HTML
      const text =
        block.children?.map((child: any) => child.text).join("") || "";
      return <div key={idx} dangerouslySetInnerHTML={{ __html: text }} />;
    });
  }

  // Calculate read time
  function getReadTime(content: any) {
    if (!Array.isArray(content)) return "1 min read";
    const text = content
      .map((block: any) =>
        Array.isArray(block.children)
          ? block.children.map((child: any) => child.text).join(" ")
          : ""
      )
      .join(" ");
    const wordCount = text
      .replace(/<[^>]+>/g, "")
      .split(/\s+/)
      .filter(Boolean).length;
    const minutes = Math.max(1, Math.round(wordCount / 200));
    return `${minutes} min read`;
  }

  // Share handler
  function handleShare() {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The article URL has been copied to your clipboard.",
      });
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center mt-96 mb-72 justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <p className="text-lg font-medium text-gray-700 animate-pulse">
              Loading, please wait...
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/news">Back to News</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Article Header */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Button variant="ghost" asChild className="mb-6">
                  <Link href="/news">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to News
                  </Link>
                </Button>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{getReadTime(article.content)}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Author */}
                <div className="flex items-center justify-between ">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={getImageUrl(article.image)}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {renderContent(article.content)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent News Section (replaces Related Articles) */}
        <section className="py-12 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Recent News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentNews.map((item) => (
                  <Card key={item.id} className="hover-lift group">
                    <Link href={`/news/${item.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={getImageUrl(item.image)}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
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
