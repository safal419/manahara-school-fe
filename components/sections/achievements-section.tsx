"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Early Childhood School",
    description: "Recognized by Kathmandu Education Board 2023",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    title: "Excellence in Teaching",
    description: "Outstanding Montessori Implementation Award",
    color: "text-blue-500",
  },
  {
    icon: Medal,
    title: "Community Impact",
    description: "Local Community Service Recognition",
    color: "text-green-500",
  },
];

export function AchievementsSection() {
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
            Our Achievements
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Recognition that motivates us to continue our mission of excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center card-secondary hover:shadow-md transition-shadow duration-300 hover-lift">
                <CardContent className="p-6 md:p-8">
                  <achievement.icon
                    className={`h-12 w-12 md:h-14 md:w-14 ${achievement.color} mx-auto mb-4 md:mb-6`}
                  />
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {achievement.description}
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
