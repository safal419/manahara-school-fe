"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ZoomIn, Download, Share2, Heart, Filter } from "lucide-react";
import { fetchGallery } from "@/lib/api";

const categories = [
  "All",
  "Classroom",
  "Events",
  "Sports",
  "Cultural",
  "Trips",
  "Celebrations",
];

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loader state

  // Scroll to top when component mounts
  useEffect(() => {
    setLoading(true); // Start loading
    window.scrollTo(0, 0);
    fetchGallery()
      .then((data) => {
        const images = (data.data || []).map((item: any) => {
          // Try all possible image array locations
          let imageArray = [];
          if (Array.isArray(item.image)) {
            imageArray = item.image;
          } else if (Array.isArray(item.image?.data)) {
            imageArray = item.image.data;
          } else if (Array.isArray(item.attributes?.image?.data)) {
            imageArray = item.attributes.image.data;
          }
          return {
            id: item.id,
            title: item.title || item.attributes?.title,
            description: item.description || item.attributes?.description,
            category: item.category || item.attributes?.category,
            images: imageArray.map((img: any) => {
              const formats = img.formats || img.attributes?.formats || {};
              const url =
                formats.medium?.url ||
                formats.small?.url ||
                img.url ||
                img.attributes?.url;
              const alt =
                img.alternativeText ||
                img.caption ||
                img.attributes?.alternativeText ||
                img.attributes?.caption ||
                item.alt ||
                item.attributes?.alt ||
                item.title ||
                item.attributes?.title;
              return { src: url, alt };
            }),
          };
        });
        setGalleryImages(images);
        setLoading(false); // End loading
      })
      .catch(() => {
        setGalleryImages([]);
        setLoading(false); // End loading on error
      });
  }, []);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

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
                Gallery
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Explore moments of joy, learning, and growth captured at
                Manahara School
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section - Not Sticky */}
        <section className="py-6 md:py-8 bg-secondary-section border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                <span className="font-medium text-sm md:text-base">
                  Filter by category:
                </span>
              </div>

              {/* Desktop Filter */}
              <div className="hidden sm:flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="transition-all duration-200 text-xs md:text-sm"
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Filter */}
              <div className="sm:hidden w-full">
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full justify-between text-sm"
                >
                  {selectedCategory}
                  <Filter className="h-4 w-4" />
                </Button>
                <AnimatePresence>
                  {isFilterOpen && (
                    <motion.div
                      className="mt-2 grid grid-cols-2 gap-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={
                            selectedCategory === category
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsFilterOpen(false);
                          }}
                          className="text-xs"
                        >
                          {category}
                        </Button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            {loading ? (
              <main className="flex-grow flex items-center  justify-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                  <p className="text-lg font-medium text-gray-700 animate-pulse">
                    Loading, please wait...
                  </p>
                </div>
              </main>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                layout
              >
                <AnimatePresence>
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer"
                      onClick={() => {
                        setSelectedImage(image);
                        setCurrentImageIdx(0);
                      }}
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={image.images[0]?.src || "/placeholder.svg"}
                          alt={image.images[0]?.alt || image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ZoomIn className="h-6 w-6 md:h-8 md:w-8 text-white" />
                          </motion.div>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="text-xs">
                            {image.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-3 px-1">
                        <h3 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                          {image.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!loading && filteredImages.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground">
                  No images found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Navigation Buttons using real <button> */}
                {selectedImage.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
                      onClick={() =>
                        setCurrentImageIdx((prevIdx) =>
                          prevIdx > 0
                            ? prevIdx - 1
                            : selectedImage.images.length - 1
                        )
                      }
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
                      onClick={() =>
                        setCurrentImageIdx((prevIdx) =>
                          prevIdx < selectedImage.images.length - 1
                            ? prevIdx + 1
                            : 0
                        )
                      }
                    >
                      {">"}
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  type="button"
                  className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10 p-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Current Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={
                      selectedImage.images[currentImageIdx]?.src ||
                      "/placeholder.svg"
                    }
                    alt={
                      selectedImage.images[currentImageIdx]?.alt ||
                      selectedImage.title
                    }
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="mt-4 text-white">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-300">
                        {selectedImage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
