"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar, Users } from "lucide-react";

// Mock data - in real app, this would come from CMS
const highlights = [
  {
    id: 1,
    title: "Annual Sports Day 2024",
    description:
      "Our students showcased their athletic talents and team spirit in various sports activities.",
    image: "/sports-day.jpg",
    date: "2024-03-15",
    category: "Sports",
    participants: 85,
  },
  {
    id: 2,
    title: "Science Exhibition",
    description:
      "Young scientists presented amazing experiments and discoveries in our monthly science fair.",
    image:
      "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/497436493_4211605929094238_8042285986904512352_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LxxhnxQ2NbUQ7kNvwFJK5Ak&_nc_oc=Adlfb9-Ydm4hENuI6XuJPQeNGexJLqAmMvQROTS7D-Nix4rzhPdn0yZgughi0Lw42IoDC9N3QX2XTyKxilR2QkKA&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=xH6DChOAYLl8_B7V4q3GqQ&oh=00_AfSU_XvpwdxG9pQVxx8Jx6YOvH6bRy5_zxZnaX1ROeLz3w&oe=68824570",
    date: "2024-02-28",
    category: "Education",
    participants: 60,
  },
  {
    id: 3,
    title: "Cultural Program",
    description:
      "Students performed traditional dances and songs celebrating Nepali culture and heritage.",
    image: "/cultural-program.jpg",
    date: "2024-02-14",
    category: "Culture",
    participants: 95,
  },
  {
    id: 4,
    title: "Art & Craft Workshop",
    description:
      "Creative minds at work! Students created beautiful artwork using various materials and techniques.",
    image:
      "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/492378332_4191498877771610_745570651421551763_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6ed16S8PsagQ7kNvwGseA-L&_nc_oc=AdkgZFKbTk5t5VqmAZlNwHeP72v5OtDZ6yYiMc_dpz4Kiyl4DFCTYrPGOdmscQutiYX4xlqwOh90_AxtRLdugbmO&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=FDK0Ayssan_GB2SFmj9LyA&oh=00_AfSy-HNpkFe-H33Wo39OFCh1gF_rDJElQ2Yl0_fNCxyZ2w&oe=688260CB",
    date: "2024-01-30",
    category: "Arts",
    participants: 70,
  },
];

export function HighlightsSection() {
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
            School Highlights
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Recent events and activities that showcase our vibrant school
            community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-secondary hover:shadow-md transition-shadow duration-300 group hover-lift">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary text-xs"
                    >
                      {highlight.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                      <span>
                        {new Date(highlight.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{highlight.participants} students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
