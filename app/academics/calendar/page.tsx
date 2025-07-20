"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Calendar, ChevronLeft, ChevronRight, Download, Filter } from "lucide-react"

// Mock calendar data
const calendarEvents = [
  {
    id: 1,
    title: "First Day of School",
    date: "2024-04-01",
    type: "Academic",
    description: "Welcome back students! New academic year begins.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: "2024-04-15",
    type: "Meeting",
    description: "Monthly parent-teacher interaction session.",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Sports Day",
    date: "2024-04-20",
    type: "Event",
    description: "Annual sports competition for all grades.",
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Science Exhibition",
    date: "2024-04-25",
    type: "Academic",
    description: "Students showcase their science projects.",
    color: "bg-blue-500",
  },
  {
    id: 5,
    title: "Cultural Program",
    date: "2024-05-01",
    type: "Event",
    description: "Celebrating Nepali culture and traditions.",
    color: "bg-orange-500",
  },
  {
    id: 6,
    title: "Mid-term Exams Begin",
    date: "2024-05-10",
    type: "Exam",
    description: "Mid-term examination period starts.",
    color: "bg-red-500",
  },
  {
    id: 7,
    title: "Field Trip - National Museum",
    date: "2024-05-15",
    type: "Trip",
    description: "Educational visit for Grade 2 & 3 students.",
    color: "bg-purple-500",
  },
  {
    id: 8,
    title: "Art & Craft Workshop",
    date: "2024-05-20",
    type: "Workshop",
    description: "Creative workshop for all students.",
    color: "bg-pink-500",
  },
  {
    id: 9,
    title: "Health Check-up Camp",
    date: "2024-05-25",
    type: "Health",
    description: "Annual health screening for students.",
    color: "bg-teal-500",
  },
  {
    id: 10,
    title: "Summer Vacation Begins",
    date: "2024-06-01",
    type: "Holiday",
    description: "School closes for summer break.",
    color: "bg-yellow-500",
  },
]

const eventTypes = ["All", "Academic", "Event", "Meeting", "Exam", "Trip", "Workshop", "Health", "Holiday"]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function AcademicCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedEvent, setSelectedEvent] = useState<(typeof calendarEvents)[0] | null>(null)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredEvents =
    selectedFilter === "All" ? calendarEvents : calendarEvents.filter((event) => event.type === selectedFilter)

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return filteredEvents.filter((event) => event.date === dateStr)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Academic Calendar</h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Stay informed about important dates, events, and activities throughout the academic year
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter and Controls */}
        <section className="py-6 md:py-8 bg-secondary-section border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                <span className="font-medium text-sm md:text-base">Filter events:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedFilter === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(type)}
                    className="text-xs md:text-sm"
                  >
                    {type}
                  </Button>
                ))}
              </div>

              <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Calendar */}
        <section className="py-12 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calendar Grid */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl md:text-2xl">
                        {months[currentMonth]} {currentYear}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" onClick={() => navigateMonth("prev")}>
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => navigateMonth("next")}>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Calendar Header */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="p-2 text-center font-medium text-sm text-muted-foreground">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {/* Empty days */}
                      {emptyDays.map((_, index) => (
                        <div key={`empty-${index}`} className="p-2 h-20 md:h-24"></div>
                      ))}

                      {/* Days with events */}
                      {days.map((day) => {
                        const dayEvents = getEventsForDate(day)
                        return (
                          <motion.div
                            key={day}
                            className="p-1 h-20 md:h-24 border rounded-lg hover:bg-muted/50 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
                          >
                            <div className="text-sm font-medium mb-1">{day}</div>
                            <div className="space-y-1">
                              {dayEvents.slice(0, 2).map((event) => (
                                <div
                                  key={event.id}
                                  className={`text-xs p-1 rounded text-white truncate ${event.color}`}
                                >
                                  {event.title}
                                </div>
                              ))}
                              {dayEvents.length > 2 && (
                                <div className="text-xs text-muted-foreground">+{dayEvents.length - 2} more</div>
                              )}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Events List */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {filteredEvents.slice(0, 10).map((event) => (
                        <motion.div
                          key={event.id}
                          className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                              <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {event.type}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {new Date(event.date).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Legend */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Event Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { type: "Academic", color: "bg-blue-500" },
                        { type: "Event", color: "bg-orange-500" },
                        { type: "Meeting", color: "bg-green-500" },
                        { type: "Exam", color: "bg-red-500" },
                        { type: "Trip", color: "bg-purple-500" },
                        { type: "Workshop", color: "bg-pink-500" },
                        { type: "Health", color: "bg-teal-500" },
                        { type: "Holiday", color: "bg-yellow-500" },
                      ].map((item) => (
                        <div key={item.type} className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                          <span className="text-sm">{item.type}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Modal */}
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-background rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-4 h-4 rounded-full ${selectedEvent.color}`}></div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedEvent(null)}>
                  ×
                </Button>
              </div>
              <h3 className="text-lg font-semibold mb-2">{selectedEvent.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedEvent.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{selectedEvent.type}</Badge>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
