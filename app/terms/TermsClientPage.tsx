"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Scale,
  Phone,
} from "lucide-react";

const termsSections = [
  {
    icon: FileText,
    title: "Enrollment Terms",
    content: [
      "Admission is subject to availability and completion of all required documentation",
      "Enrollment fees are non-refundable once the academic year begins",
      "Students must meet age requirements for their respective grade levels",
      "All health and vaccination records must be up to date",
      "Parents must provide accurate emergency contact information",
      "Enrollment may be terminated for non-compliance with school policies",
    ],
  },
  {
    icon: Users,
    title: "Student Code of Conduct",
    content: [
      "Students must treat all community members with respect and kindness",
      "Bullying, harassment, or discriminatory behavior is strictly prohibited",
      "Students are expected to follow classroom rules and teacher instructions",
      "Proper school uniform must be worn daily unless otherwise specified",
      "Electronic devices may only be used with teacher permission",
      "Vandalism or damage to school property will result in disciplinary action",
    ],
  },
  {
    icon: Shield,
    title: "Safety & Security",
    content: [
      "All visitors must check in at the main office and wear identification",
      "Students may only be picked up by authorized individuals listed in records",
      "Emergency drills and safety procedures must be followed by all",
      "Any safety concerns must be reported immediately to school staff",
      "CCTV monitoring is in place for security purposes",
      "School premises are smoke-free and alcohol-free zones",
    ],
  },
  {
    icon: Scale,
    title: "Academic Policies",
    content: [
      "Regular attendance is mandatory for academic progress",
      "Parents will be notified of excessive absences or tardiness",
      "Homework and assignments must be completed as assigned",
      "Academic assessments are conducted regularly to track progress",
      "Parent-teacher conferences are scheduled periodically",
      "Academic records are maintained confidentially and securely",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Disciplinary Procedures",
    content: [
      "Progressive discipline approach focusing on learning and growth",
      "Minor infractions addressed through discussion and guidance",
      "Serious violations may result in suspension or expulsion",
      "Parents will be involved in all disciplinary processes",
      "Due process rights are respected in all disciplinary actions",
      "Appeal procedures are available for disciplinary decisions",
    ],
  },
  {
    icon: Phone,
    title: "Communication & Complaints",
    content: [
      "Open communication between school and families is encouraged",
      "Concerns should first be addressed with the relevant teacher",
      "Formal complaints can be submitted to school administration",
      "All complaints will be investigated fairly and promptly",
      "Confidentiality will be maintained throughout the process",
      "External mediation may be sought for unresolved disputes",
    ],
  },
];

export default function TermsClientPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero Section - Primary Background */}
        <section className="py-16 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Scale className="h-10 w-10 text-primary" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Please read these terms and conditions carefully before
                enrolling your child or using our services. These terms govern
                your relationship with Manahara School.
              </p>
              <div className="mt-8 text-sm text-muted-foreground">
                <p>Last updated: January 2024</p>
                <p>Effective date: January 1, 2024</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction - Secondary Background */}
        <section className="py-16 md:py-20 bg-secondary-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Agreement to Terms
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      These Terms of Service ("Terms") constitute a legally
                      binding agreement between you (parent/guardian) and
                      Manahara School regarding your child's enrollment and your
                      use of our educational services and website.
                    </p>
                    <p>
                      By enrolling your child at Manahara School or using our
                      website (manaharaschool.edu.np), you acknowledge that you
                      have read, understood, and agree to be bound by these
                      Terms. If you do not agree to these Terms, please do not
                      enroll your child or use our services.
                    </p>
                    <p>
                      These Terms apply to all students, parents, guardians, and
                      visitors to our school and website. We reserve the right
                      to modify these Terms at any time, and such modifications
                      will be effective immediately upon posting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections - Alternating Backgrounds */}
        {termsSections.map((section, index) => (
          <section
            key={section.title}
            className={`py-16 md:py-20 ${
              index % 2 === 0 ? "bg-primary-section" : "bg-secondary-section"
            }`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Additional Terms - Primary Background */}
        <section className="py-16 md:py-20 bg-primary-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Financial Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <strong>Tuition and Fees:</strong> All tuition and fees
                        must be paid according to the agreed schedule. Late
                        payments may incur additional charges. Fee structures
                        are reviewed annually and parents will be notified of
                        any changes in advance.
                      </p>
                      <p>
                        <strong>Refund Policy:</strong> Enrollment fees are
                        non-refundable. Tuition refunds may be considered on a
                        case-by-case basis for withdrawals due to extraordinary
                        circumstances, subject to school policy and timing of
                        withdrawal.
                      </p>
                      <p>
                        <strong>Additional Costs:</strong> Parents are
                        responsible for additional costs such as uniforms,
                        books, field trips, and extracurricular activities.
                        These costs will be communicated in advance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Limitation of Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        While we take every precaution to ensure student safety,
                        Manahara School's liability is limited to the extent
                        permitted by law. The school is not liable for personal
                        property loss or damage, except in cases of gross
                        negligence.
                      </p>
                      <p>
                        Parents acknowledge that participation in school
                        activities involves inherent risks, and they assume
                        responsibility for their child's participation.
                        Appropriate insurance coverage is recommended for all
                        students.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Governing Law</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        These Terms are governed by the laws of Nepal. Any
                        disputes arising from these Terms or your relationship
                        with the school will be resolved through the appropriate
                        legal channels in Nepal.
                      </p>
                      <p>
                        If any provision of these Terms is found to be
                        unenforceable, the remaining provisions will continue to
                        be valid and enforceable.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        If you have any questions about these Terms of Service,
                        please contact us:
                      </p>
                      <div className="space-y-2">
                        <p>
                          <strong>Email:</strong> info@manaharaschool.edu.np
                        </p>
                        <p>
                          <strong>Phone:</strong> +977-1-4153708
                        </p>
                        <p>
                          <strong>Address:</strong> Devitar Marg, Baba Chowk,
                          Mulpani, Kathmandu, Nepal
                        </p>
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
