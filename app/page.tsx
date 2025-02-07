"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ✅ AI Services Data
const services = [
  { title: "AI Website Generation", description: "Instantly create & customize websites using AI-driven templates.", icon: () => <span>🚀</span> },
  { title: "AI Chatbot Integration", description: "Seamlessly integrate AI-powered customer support chatbots.", icon: () => <span>🤖</span> },
  { title: "Automated SEO Optimization", description: "AI optimizes your site for search engines, increasing visibility.", icon: () => <span>🔍</span> },
  { title: "AI Content Generation", description: "Auto-generate high-quality content & blog posts with AI.", icon: () => <span>✍️</span> },
  { title: "AI UX & Personalization", description: "Personalized user experiences with AI-driven recommendations.", icon: () => <span>🎨</span> },
  { title: "AI-Enhanced Analytics", description: "Get deep insights and AI-powered reports on user behavior.", icon: () => <span>📊</span> },
];

// ✅ Portfolio Section Data (Using Local Images)
const projects = [
  { title: "AI-Powered E-Commerce", description: "Revolutionizing online shopping with personalized AI recommendations.", image: "/images/study1.png" },
  { title: "AI-Enhanced Analytics Dashboard", description: "Providing actionable insights through AI-powered analytics.", image: "/images/study2.png" },
  { title: "Custom AI Chatbot Integration", description: "Seamlessly integrated chatbots for 24/7 customer support.", image: "/images/study3.png" },
  { title: "Automated Content Generation", description: "Generating high-quality content with AI for blogs and social media.", image: "/images/study4.png" },
  { title: "AI-Personalized Marketing Campaigns", description: "Driving conversions with AI-driven audience segmentation.", image: "/images/study5.png" },
  { title: "AI UX & Design Enhancement", description: "Creating stunning, personalized user experiences with AI.", image: "/images/study6.png" },
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ✅ Contact Modal Component
function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-xl w-96 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Fill out the form and we'll get back to you shortly.
            </p>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md text-black focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md text-black focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-md text-black focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>

              <motion.button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 transition-all"
              onClick={onClose}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="relative flex flex-col items-center justify-center bg-black text-white px-6 scroll-smooth">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] to-black opacity-90 z-0" />

      {/* 🚀 Hero Section */}
      <motion.section id="home" className="relative z-10 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          AI-Powered Websites, <br /> Future-Ready Design.
        </h1>
        <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
          Build stunning, AI-driven websites with effortless customization and automation.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="#services" className="px-6 py-3 text-lg font-semibold bg-purple-500 rounded-xl shadow-lg hover:bg-purple-600 transition-all">
            Explore Services
          </a>
          <a href="#portfolio" className="px-6 py-3 text-lg font-semibold border border-gray-300 rounded-xl hover:bg-gray-800 transition-all">
            View Portfolio
          </a>
        </div>
      </motion.section>

      {/* 🚀 AI Services Section */}
      <section id="services" className="relative w-full py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            AI-Powered Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all">
                <div className="flex items-center justify-center mb-6 text-5xl">{service.icon()}</div>
                <h3 className="text-2xl font-semibold text-white text-center mb-4">{service.title}</h3>
                <p className="text-gray-400 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* 🚀 Portfolio Section */}
<section id="portfolio" className="relative w-full py-24 bg-gray-900">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
      Portfolio Highlights
    </h2>

    {/* ✅ Ensuring Grid Layout Doesn't Break */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative overflow-visible pb-8">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-all pb-4" // Add padding-bottom
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }} // Slight upward motion
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Box */}
      <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 p-3 rounded-lg opacity-90 z-10">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.description}</p>
      </div>
    </motion.div>
  ))}
</div>
    </div>
    </section>

 {/* 🚀 Call-to-Action Section */}
 <section id="contact" className="relative w-full py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to take your website to the next level with AI? Get in touch today and let's discuss your project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:contact@youragency.com"
              className="px-8 py-3 text-lg font-semibold bg-purple-500 rounded-xl shadow-lg hover:bg-purple-600 transition-all"
            >
              Get a Free Consultation
            </a>
            <button
  className="px-8 py-3 text-lg font-semibold border border-gray-300 rounded-xl hover:bg-gray-800 transition-all"
  onClick={() => setIsContactModalOpen(true)}
>
  Contact Us
</button>
          </div>
        </div>
      </section>

      {/* 🚀 Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </main>
  );
}