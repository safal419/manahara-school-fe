import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  // TikTok icon is not in lucide-react, so use a placeholder or SVG if needed
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#18181b] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="/logo.jpeg"
                  alt="Manahara School Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">
                  Manahara School
                </h3>
                <p className="text-sm text-gray-400">Est. 2021</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Nurturing Young Minds with Love and Learning through
              Montessori-inspired education.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-700"
              >
                <Link href="#">
                  <Facebook className="h-4 w-4" style={{ color: "#1877F3" }} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-700"
              >
                <Link href="#">
                  <Instagram className="h-4 w-4" style={{ color: "#E4405F" }} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-700"
              >
                <Link href="#">
                  <Youtube className="h-4 w-4" style={{ color: "#FF0000" }} />
                </Link>
              </Button>
              {/* TikTok icon is not in lucide-react; you can add a custom SVG or use another icon library if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/parents"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Parents
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-gray-400">
                  Devitar Marg, Baba Chowk, Mulpani
                  <br />
                  Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-400">+977-1-4153708</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-400">
                  info@manaharaschool.edu.np
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-gray-400">
                  Mon - Fri: 7:00 AM - 4:00 PM
                  <br />
                  Sat: 7:00 AM - 12:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Stay Updated</h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for latest updates and announcements.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Manahara School. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
