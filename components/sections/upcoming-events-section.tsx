"use client";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function UpcomingEventsSection({ events }: { events: any[] }) {
  function getFullDescription(descArray: any[]) {
    return (
      descArray
        ?.map((block: any) =>
          block.children?.map((child: any) => child.text).join(" ")
        )
        .join("\n\n") || ""
    );
  }

  function isEventCompleted(eventDate: string) {
    const today = new Date();
    const date = new Date(eventDate);
    return (
      date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  }

  // Sort events by date descending and take the latest 4
  const latestEvents = [...events]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="py-12 md:py-20 bg-secondary-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar for these exciting upcoming events and activities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {latestEvents.map((event: any, index: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="hover-lift cursor-pointer">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            {event.type && (
                              <Badge variant="outline" className="text-xs">
                                {event.type}
                              </Badge>
                            )}
                            <div className="flex items-center space-x-1 text-xs md:text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                              <span>{event.date}</span>
                            </div>
                            {isEventCompleted(event.date) && (
                              <Badge
                                variant="destructive"
                                className="text-xs bg-red-600 text-white"
                              >
                                Event Completed
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base mb-2">
                            {getFullDescription(event.description).slice(
                              0,
                              100
                            )}
                            ...
                          </p>
                          <div className="flex items-center space-x-1 text-xs md:text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{event.title}</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-muted-foreground flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {event.time}
                    </span>
                    {event.type && (
                      <Badge className="text-xs">{event.type}</Badge>
                    )}
                  </div>
                  <p className="text-base leading-relaxed whitespace-pre-line">
                    {getFullDescription(event.description)}
                  </p>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
