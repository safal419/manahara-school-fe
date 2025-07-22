"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Phone, Mail, MapPin, Smartphone } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Parents", href: "/parents" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Ultra Thin */}
      <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-8">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+977-1-5920777</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>info@manaharaschool.edu.np</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Kageshwori Manohara-5, Dumakhal, Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Mobile Contact */}
            <div className="md:hidden flex items-center space-x-2 text-xs">
              <Phone className="h-3 w-3" />
              <span>+977-1-4153708</span>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                className="h-6 px-2 text-xs bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full"
                asChild
              >
                <Link href="/parents#get-app">
                  <Smartphone className="h-3 w-3 mr-1" />
                  Get App
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 border-b shadow-lg ${
          scrolled
            ? "bg-background shadow-xl backdrop-blur-md border-border"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <Image
                  src="/logo.jpeg"
                  alt="Manahara School Logo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="block">
                <h1
                  className={`text-lg sm:text-xl font-bold group-hover:text-primary/80 transition-colors ${
                    scrolled
                      ? "text-foreground"
                      : isHome
                      ? "text-white"
                      : "text-black dark:text-white"
                  }`}
                >
                  Manahara School
                </h1>
                <p
                  className={`text-xs sm:text-sm ${
                    scrolled
                      ? "text-muted-foreground"
                      : isHome
                      ? "text-white/80"
                      : "text-black/80 dark:text-white/80"
                  }`}
                >
                  Nurturing Young Minds
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center space-x-1 ${
                scrolled
                  ? ""
                  : isHome
                  ? "text-white"
                  : "text-black dark:text-white"
              }`}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group ${
                    scrolled
                      ? "text-foreground"
                      : isHome
                      ? "text-white"
                      : "text-black dark:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Side - Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-3">
              <ThemeToggle
                variant={scrolled ? "default" : isHome ? "white" : "default"}
              />
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-12 h-12 hover:bg-muted/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X
                    className={`h-7 w-7 ${
                      scrolled
                        ? "text-foreground"
                        : isHome
                        ? "text-white"
                        : "text-black dark:text-white"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`h-7 w-7 ${
                      scrolled
                        ? "text-foreground"
                        : isHome
                        ? "text-white"
                        : "text-black dark:text-white"
                    }`}
                  />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
