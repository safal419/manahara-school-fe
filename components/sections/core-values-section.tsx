"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Heart, Lightbulb, Handshake, Award } from "lucide-react"

const values = [
  {
    icon: Handshake,
    title: "Respect",
    description: "Teaching children to respect themselves, others, and their environment",
    color: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Encouraging natural curiosity and love for learning and discovery",
    color: "bg-yellow-500",
  },
  {
    icon: Heart,
    title: "Kindness",
    description: "Fostering empathy, compassion, and caring relationships",
    color: "bg-pink-500",
  },
  {
    icon: Award,
    title: "Responsibility",
    description: "Building accountability and independence in young learners",
    color: "bg-green-500",
  },
]

export function CoreValuesSection() {
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Core Values</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            The fundamental values that guide our teaching and shape our students' character
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`w-16 h-16 md:w-18 md:h-18 ${value.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="h-8 w-8 md:h-9 md:w-9 text-white" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-xs py-1.5 px-3">
              Character Building
            </Badge>
            <Badge variant="secondary" className="text-xs py-1.5 px-3">
              Moral Development
            </Badge>
            <Badge variant="secondary" className="text-xs py-1.5 px-3">
              Social Skills
            </Badge>
            <Badge variant="secondary" className="text-xs py-1.5 px-3">
              Emotional Intelligence
            </Badge>
            <Badge variant="secondary" className="text-xs py-1.5 px-3">
              Leadership
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
