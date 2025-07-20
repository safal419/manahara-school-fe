"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from "lucide-react";

const privacySections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      "Student personal information (name, age, contact details)",
      "Parent/guardian contact information and emergency contacts",
      "Academic records, progress reports, and assessment data",
      "Health information relevant to student care and safety",
      "Photos and videos for educational and promotional purposes (with consent)",
      "Website usage data and cookies for improving user experience",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "Providing educational services and student care",
      "Communicating with parents about student progress and school activities",
      "Ensuring student safety and emergency response",
      "Improving our educational programs and services",
      "Complying with legal and regulatory requirements",
      "Marketing school programs (with appropriate consent)",
    ],
  },
  {
    icon: Shield,
    title: "Data Protection & Security",
    content: [
      "Secure storage of all personal and academic information",
      "Limited access to authorized personnel only",
      "Regular security audits and system updates",
      "Encrypted data transmission and secure backup systems",
      "Staff training on data protection and privacy protocols",
      "Compliance with Nepal's data protection regulations",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "Right to access your personal information we hold",
      "Right to correct inaccurate or incomplete information",
      "Right to request deletion of personal data (subject to legal requirements)",
      "Right to withdraw consent for non-essential data processing",
      "Right to receive information in an accessible format",
      "Right to file complaints about data handling practices",
    ],
  },
  {
    icon: Lock,
    title: "Data Sharing & Third Parties",
    content: [
      "We do not sell personal information to third parties",
      "Information may be shared with educational authorities as required by law",
      "Third-party service providers (with strict confidentiality agreements)",
      "Emergency services when student safety is at risk",
      "Academic institutions for student transfers (with consent)",
      "Legal authorities when required by court orders or legal obligations",
    ],
  },
  {
    icon: Mail,
    title: "Contact & Complaints",
    content: [
      "Contact our Data Protection Officer for privacy concerns",
      "Email: privacy@manaharaschool.edu.np",
      "Phone: +977-1-4153708",
      "Written complaints can be submitted to school administration",
      "Response to privacy inquiries within 30 days",
      "Right to escalate complaints to relevant authorities",
    ],
  },
];

export default function PrivacyClientPage() {
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
                <Shield className="h-10 w-10 text-primary" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Your privacy and the protection of your personal information is
                our top priority. Learn how we collect, use, and protect your
                data.
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
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Manahara School ("we," "our," or "us") is committed to
                      protecting the privacy and security of personal
                      information provided by students, parents, guardians, and
                      website visitors. This Privacy Policy explains how we
                      collect, use, disclose, and safeguard your information
                      when you visit our website or use our services.
                    </p>
                    <p>
                      By enrolling your child at Manahara School or using our
                      website, you consent to the data practices described in
                      this policy. We encourage you to read this policy
                      carefully and contact us if you have any questions.
                    </p>
                    <p>
                      This policy applies to all information collected through
                      our website (manaharaschool.edu.np), mobile applications,
                      and any related services, sales, marketing, or events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections - Alternating Backgrounds */}
        {privacySections.map((section, index) => (
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

        {/* Additional Information - Primary Background */}
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
                    <CardTitle className="text-2xl">Data Retention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        We retain personal information for as long as necessary
                        to fulfill the purposes outlined in this privacy policy,
                        unless a longer retention period is required or
                        permitted by law. Student academic records are
                        maintained according to educational regulations and may
                        be retained for several years after graduation.
                      </p>
                      <p>
                        When personal information is no longer needed, we will
                        securely delete or anonymize it in accordance with our
                        data retention schedule and applicable legal
                        requirements.
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
                      Children's Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        As an educational institution serving young children, we
                        take special care to protect children's privacy. We
                        collect only the minimum information necessary to
                        provide educational services and ensure student safety.
                      </p>
                      <p>
                        Photos and videos of students are only taken and used
                        with explicit parental consent. Parents have the right
                        to withdraw consent at any time and request removal of
                        their child's images from our materials.
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
                    <CardTitle className="text-2xl">Policy Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        We may update this Privacy Policy from time to time to
                        reflect changes in our practices or for other
                        operational, legal, or regulatory reasons. We will
                        notify you of any material changes by posting the new
                        Privacy Policy on our website and updating the "Last
                        updated" date.
                      </p>
                      <p>
                        We encourage you to review this Privacy Policy
                        periodically to stay informed about how we are
                        protecting your information.
                      </p>
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
