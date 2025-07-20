"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Dumakhal, Kathmandu, Nepal"],
    color: "text-red-500",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+977-1-4153708", "+977-9841234567"],
    color: "text-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@manaharaschool.edu.np", "admission@manaharaschool.edu.np"],
    color: "text-blue-500",
  },
  {
    icon: Clock,
    title: "School Hours",
    details: ["Sun - Fri: 10:00 AM - 4:00 PM"],
    color: "text-purple-500",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    url: "#",
    color: "hover:text-blue-600",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "#",
    color: "hover:text-pink-600",
  },
  {
    icon: Youtube,
    name: "YouTube",
    url: "#",
    color: "hover:text-red-600",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch with us for admissions, inquiries, or to schedule a
                visit. We're here to help you and your child begin an amazing
                educational journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-secondary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Here's how you can reach us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <info.icon className={`h-8 w-8 ${info.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-muted-foreground text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Google Map */}
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9476448963997!2d85.4025938749235!3d27.718902724982673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bc0d7a8f311%3A0x26e8006e4fc41dfa!2sManahara%20School!5e0!3m2!1sen!2snp!4v1752989717696!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "256px", width: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Manahara School Location"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Visit Us */}
                <Card>
                  <CardHeader>
                    <CardTitle>Visit Our School</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We encourage parents to visit our school and see our
                      facilities firsthand. Schedule a tour to meet our staff
                      and learn more about our programs.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full mb-4 bg-transparent"
                    >
                      Schedule a Visit
                    </Button>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-3">Follow Us</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                          <Button
                            key={social.name}
                            variant="outline"
                            size="icon"
                            className={`${social.color} transition-colors`}
                            asChild
                          >
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <social.icon className="h-5 w-5" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium">Call us directly</p>
                          <p className="text-sm text-muted-foreground">
                            +977-1-4153708
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">Email us</p>
                          <p className="text-sm text-muted-foreground">
                            info@manaharaschool.edu.np
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
