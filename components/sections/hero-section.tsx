"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection({ imageUrl }: { imageUrl: string }) {
  const [animatedDots, setAnimatedDots] = useState<Array<{
    left: string;
    top: string;
    duration: number;
    delay: number;
  }> | null>(null);

  useEffect(() => {
    setAnimatedDots(
      Array.from({ length: 8 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-16 md:pt-18">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Children learning at Manahara School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {animatedDots &&
          animatedDots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full"
              style={{ left: dot.left, top: dot.top }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: dot.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-left text-white flex flex-col items-start justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl mx-0"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Nurturing Young Minds with{" "}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
            >
              <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent animate-pulse">
                Love
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-yellow-400/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              />
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "backOut" }}
            >
              <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent animate-pulse">
                Learning
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-yellow-400/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-base lg:text-lg mb-6 md:mb-8 text-gray-100 max-w-2xl mx-0 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Experience quality early childhood education with our
            Montessori-inspired curriculum in a safe, clean, and loving
            environment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-start items-start mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold text-lg md:text-base px-8 md:px-6 py-4 md:py-3 rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 group border-0"
              >
                <Link href="/admissions">
                  Apply Now
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-6 w-6 md:h-7 md:w-7 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg md:text-base px-8 md:px-6 py-4 md:py-3 rounded-full glass border-white/40 text-white hover:bg-white/10 group bg-transparent backdrop-blur-md font-medium"
                onClick={() =>
                  window.open(
                    "https://youtu.be/EFYEMqnq3B8?si=lYNAoCmVJncqV7HV",
                    "_blank"
                  )
                }
              >
                <motion.div
                  className="mr-3"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="h-6 w-6 md:h-7 md:w-7" />
                </motion.div>
                Watch Video
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-3 md:h-4 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
        <p className="text-xs mt-2 font-medium opacity-80">Scroll</p>
      </motion.div>
    </section>
  );
}
