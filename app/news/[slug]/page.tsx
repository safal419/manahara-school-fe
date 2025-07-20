"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, ThumbsUp } from "lucide-react"

// Mock data - in real app, this would come from CMS/API
const newsArticles = [
  {
    id: 1,
    slug: "new-montessori-learning-materials",
    title: "New Montessori Learning Materials Introduced",
    excerpt:
      "We've added state-of-the-art Montessori learning materials to enhance our students' educational experience.",
    content: `
      <p>Our commitment to providing the best educational resources continues with the introduction of new Montessori learning materials. These carefully selected tools will help our students develop critical thinking skills and foster independent learning.</p>
      
      <p>The new materials include:</p>
      <ul>
        <li>Advanced sensorial materials for enhanced perception development</li>
        <li>Mathematical manipulatives for concrete understanding of abstract concepts</li>
        <li>Language materials that support reading and writing development</li>
        <li>Cultural studies materials that broaden global awareness</li>
      </ul>
      
      <p>These materials have been carefully chosen to align with our Montessori philosophy and support our students' natural learning progression. Each material serves a specific purpose in developing concentration, coordination, and independence.</p>
      
      <p>Our teachers have undergone specialized training to effectively integrate these materials into our curriculum, ensuring maximum benefit for our students' educational journey.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    author: "Mrs. Kamala Shrestha",
    date: "2024-03-15",
    category: "Education",
    readTime: "3 min read",
    views: 245,
    likes: 18,
  },
  {
    id: 2,
    slug: "annual-sports-day-2024",
    title: "Annual Sports Day 2024 - A Grand Success",
    excerpt:
      "Our students showcased their athletic talents and team spirit in various sports activities during our annual sports day.",
    content: `
      <p>The Annual Sports Day 2024 was a remarkable event filled with enthusiasm, competition, and sportsmanship. Students from all grade levels participated in various activities including running, jumping, team games, and creative performances.</p>
      
      <p>Event highlights included:</p>
      <ul>
        <li>100m and 200m races for different age groups</li>
        <li>Team relay competitions</li>
        <li>Fun games like sack race and three-legged race</li>
        <li>Creative dance performances</li>
        <li>Parent participation events</li>
      </ul>
      
      <p>The event was not just about competition but also about building character, teamwork, and healthy habits. Every student received recognition for their participation, emphasizing our belief that effort and participation are as important as winning.</p>
      
      <p>We thank all the parents who attended and supported their children, making this event a memorable experience for everyone involved.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    author: "Mr. Rajesh Tamang",
    date: "2024-03-10",
    category: "Sports",
    readTime: "4 min read",
    views: 189,
    likes: 24,
  },
]

const relatedArticles = [
  {
    id: 3,
    slug: "science-exhibition-2024",
    title: "Science Exhibition: Young Minds at Work",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-02-28",
    category: "Science",
  },
  {
    id: 4,
    slug: "cultural-program-celebration",
    title: "Cultural Program Celebrates Nepali Heritage",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-02-20",
    category: "Culture",
  },
]

export default function NewsDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const article = newsArticles.find((article) => article.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/news">Back to News</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Article Header */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{article.views} views</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>

                {/* Author */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      {article.likes}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button size="sm" variant="outline">
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
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
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
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} className="hover-lift group">
                    <Link href={`/news/${relatedArticle.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{relatedArticle.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {relatedArticle.title}
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
  )
}
