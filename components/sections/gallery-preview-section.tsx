"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Montessori Learning",
    category: "Classroom",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Outdoor Activities",
    category: "Playground",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Cultural Events",
    category: "Events",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Art & Craft",
    category: "Activities",
  },
];

export function GalleryPreviewSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-primary-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Gallery Preview
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our vibrant school life and learning environment
          </p>
        </motion.div>

        <div className="relative mb-8 md:mb-12">
          <Carousel>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem
                  key={image.id}
                  className="px-2 w-1/2 sm:w-1/3 md:w-1/4 basis-1/2 sm:basis-1/3 md:basis-1/4"
                >
                  <motion.div
                    className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Eye className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2" />
                        <p className="text-xs md:text-sm font-medium">
                          {image.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="group hover-glow text-sm md:text-base px-6 py-3"
          >
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
