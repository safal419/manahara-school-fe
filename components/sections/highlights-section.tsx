"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar, Users } from "lucide-react";
import { fetchHighlights } from "@/lib/api";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function HighlightsSection() {
  const [highlights, setHighlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | number | null>(null);

  useEffect(() => {
    fetchHighlights()
      .then((data) => {
        setHighlights(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load highlights");
        setLoading(false);
      });
  }, []);

  // Helper to extract description as plain text array (for modal and preview)
  function getDescriptionLines(description: any): string[] {
    if (!Array.isArray(description)) return [description || ""];
    return description.map((block: any) =>
      Array.isArray(block.children)
        ? block.children.map((child: any) => child.text).join("")
        : ""
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-secondary-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            School Highlights
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Recent events and activities that showcase our vibrant school
            community
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {highlights.map((item: any, index: number) => {
              const highlight = item.attributes || item;
              const descriptionLines = getDescriptionLines(
                highlight.description
              );
              const previewText = descriptionLines.slice(0, 2).join("\n");
              const fullText = descriptionLines.join("\n");
              const imageUrl =
                highlight.image?.formats?.medium?.url ||
                highlight.image?.formats?.small?.url ||
                highlight.image?.url ||
                "/placeholder.svg";
              const participants = Number(highlight.participants) || 0;

              // Only show first 20 words for preview
              const previewWords = previewText.split(/\s+/);
              const previewShort =
                previewWords.length > 20
                  ? previewWords.slice(0, 20).join(" ") + " ..."
                  : previewText;
              return (
                <Dialog
                  key={item.id}
                  open={openId === item.id}
                  onOpenChange={(open) => setOpenId(open ? item.id : null)}
                >
                  <DialogTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="cursor-pointer"
                    >
                      <Card className="overflow-hidden card-secondary hover:shadow-md transition-shadow duration-300 group hover-lift">
                        <div className="relative h-40 md:h-48 overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={highlight.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge
                              variant="secondary"
                              className="bg-white/90 text-primary text-xs"
                            >
                              {highlight.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4 md:p-6">
                          <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {highlight.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed whitespace-pre-line">
                            {previewShort}
                          </p>
                          <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                              <span>
                                {highlight.date
                                  ? new Date(
                                      highlight.date
                                    ).toLocaleDateString()
                                  : ""}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3 md:h-4 md:w-4" />
                              <span>{participants} students</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{highlight.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mb-4">
                      <Image
                        src={imageUrl}
                        alt={highlight.title}
                        width={600}
                        height={270}
                        className="rounded-lg object-cover w-full h-auto"
                      />
                    </div>
                    <div className="mb-2 flex flex-wrap gap-2 items-center">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-white/90 text-primary"
                      >
                        {highlight.category}
                      </Badge>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {highlight.date
                          ? new Date(highlight.date).toLocaleDateString()
                          : ""}
                      </span>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        {participants} students
                      </span>
                    </div>
                    <div className="text-muted-foreground whitespace-pre-line mb-2">
                      {fullText}
                    </div>
                    {highlight.createdAt && (
                      <div className="text-xs text-gray-400 mt-2">
                        Created:{" "}
                        {new Date(highlight.createdAt).toLocaleString()}
                      </div>
                    )}
                    {highlight.updatedAt && (
                      <div className="text-xs text-gray-400">
                        Updated:{" "}
                        {new Date(highlight.updatedAt).toLocaleString()}
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
