"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide quality early childhood education that nurtures creativity, critical thinking, and character development in a safe and supportive environment.",
    iconBg: "bg-blue-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading early childhood education institution in Nepal, recognized for excellence in Montessori-inspired teaching and holistic child development.",
    iconBg: "bg-yellow-500",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in respect, kindness, curiosity, and responsibility as the foundation for lifelong learning and personal growth.",
    iconBg: "bg-pink-500",
  },
];

export function MissionVisionSection({
  missionImageUrl,
  visionImageUrl,
  valuesImageUrl,
}: {
  missionImageUrl: string;
  visionImageUrl: string;
  valuesImageUrl: string;
}) {
  return (
    <section className="py-12 px-4 md:py-16 lg:py-20 bg-primary-section">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Our Foundation
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Built on strong principles that guide our approach to early
            childhood education
          </p>
        </motion.div>

        {/* Row 1: Mission left, image right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full card-secondary hover:shadow-md transition-shadow duration-300 hover-lift">
              <CardContent className="p-6 md:p-8 text-center">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}
                >
                  <Target className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                  Our Mission
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our mission is to provide a nurturing and stimulating
                  environment where every child is empowered to discover their
                  unique potential. We are dedicated to fostering creativity,
                  critical thinking, and a lifelong love of learning through a
                  holistic approach that values academic excellence, character
                  development, and emotional well-being. By embracing
                  Montessori-inspired methods and individualized attention, we
                  aim to cultivate confident, compassionate, and responsible
                  global citizens prepared to thrive in an ever-changing world.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              style={{
                aspectRatio: "16/9",
                width: "100%",
                maxWidth: "540px",
                minHeight: "320px",
                overflow: "hidden",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "40px",
              }}
            >
              <img
                src={missionImageUrl}
                alt="Mission"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Row 2: image left, Vision right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-10">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full card-secondary hover:shadow-md transition-shadow duration-300 hover-lift">
              <CardContent className="p-6 md:p-8 text-center">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}
                >
                  <Eye className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                  Our Vision
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our vision is to be a beacon of excellence in early childhood
                  education, recognized for our innovative teaching practices
                  and unwavering commitment to holistic child development. We
                  aspire to inspire generations of learners who are not only
                  academically accomplished but also socially conscious,
                  empathetic, and resilient. Through a supportive and inclusive
                  community, we envision our students becoming leaders and
                  changemakers who contribute positively to society and the
                  world at large.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              style={{
                aspectRatio: "16/9",
                width: "100%",
                maxWidth: "540px",
                minHeight: "320px",
                overflow: "hidden",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "40px",
              }}
            >
              <img
                src={visionImageUrl}
                alt="Vision"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Row 3: Values left, image right */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full card-secondary hover:shadow-md transition-shadow duration-300 hover-lift">
              <CardContent className="p-6 md:p-8 text-center">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}
                >
                  <Heart className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                  Our Values
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  At the heart of our school are the values of respect,
                  kindness, curiosity, and responsibility. We believe in
                  fostering an environment where every child feels valued and
                  heard, encouraging them to explore with curiosity and act with
                  integrity. Our values guide our interactions, shape our
                  curriculum, and inspire our students to develop strong moral
                  character, empathy for others, and a sense of responsibility
                  towards their community and the world.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              style={{
                aspectRatio: "16/9",
                width: "100%",
                maxWidth: "540px",
                minHeight: "320px",
                overflow: "hidden",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "40px",
              }}
            >
              <img
                src={valuesImageUrl}
                alt="Values"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
