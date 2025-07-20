"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Users, Shield } from "lucide-react";

const principles = [
  {
    icon: Gamepad2,
    title: "Play-Based Learning",
    description:
      "Learning through play develops creativity, problem-solving skills, and social interaction in a natural and enjoyable way.",
    iconBg: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Inclusiveness",
    description:
      "We welcome children from all backgrounds and abilities, creating a diverse and supportive learning community.",
    iconBg: "bg-yellow-500",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Our top priority is maintaining a safe, secure, and healthy environment where children can learn and grow confidently.",
    iconBg: "bg-pink-500",
  },
];

export function GuidingPrinciplesSection() {
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
            Our Guiding Principles
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            The core principles that shape our educational approach and school
            culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-secondary hover:shadow-md transition-shadow duration-300 hover-lift">
                <CardContent className="p-6 md:p-8">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 ${principle.iconBg} rounded-full flex items-center justify-center mb-4 md:mb-6`}
                  >
                    <principle.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
