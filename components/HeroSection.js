"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
      {/* Subtle animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] to-black opacity-90 z-0" />

      {/* Hero Content */}
      <motion.section
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          AI-Powered Websites, <br /> Future-Ready Design.
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Build stunning, AI-driven websites with effortless customization and automation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 text-lg font-semibold bg-purple-500 rounded-xl shadow-lg hover:bg-purple-600 transition-all"
          >
            Get Started
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 text-lg font-semibold border border-gray-300 rounded-xl hover:bg-gray-800 transition-all"
          >
            View Portfolio
          </motion.a>
        </div>
      </motion.section>

      {/* 🚀 Services Overview Section */}
      <section id="services" className="relative w-full py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            AI-Powered Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Leverage the power of AI for ultra-responsive, high-converting websites.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-6">
                  <service.icon className="text-5xl text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// AI Services Data
const services = [
  {
    title: "AI Website Generation",
    description: "Instantly create & customize websites using AI-driven templates.",
    icon: () => <span>🚀</span>,
  },
  {
    title: "AI Chatbot Integration",
    description: "Seamlessly integrate AI-powered customer support chatbots.",
    icon: () => <span>🤖</span>,
  },
  {
    title: "Automated SEO Optimization",
    description: "AI optimizes your site for search engines, increasing visibility.",
    icon: () => <span>🔍</span>,
  },
  {
    title: "AI Content Generation",
    description: "Auto-generate high-quality content & blog posts with AI.",
    icon: () => <span>✍️</span>,
  },
  {
    title: "AI UX & Personalization",
    description: "Personalized user experiences with AI-driven recommendations.",
    icon: () => <span>🎨</span>,
  },
  {
    title: "AI-Enhanced Analytics",
    description: "Get deep insights and AI-powered reports on user behavior.",
    icon: () => <span>📊</span>,
  },
];