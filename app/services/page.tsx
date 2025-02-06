"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        AI-Powered Services
      </h1>
      <p className="mt-5 text-lg text-gray-300 max-w-2xl text-center">
        We offer AI-driven website development, automation, chatbot integration, and more.
      </p>
      
      {/* Placeholder for services */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6 text-5xl">{service.icon()}</div>
            <h3 className="text-2xl font-semibold text-white text-center mb-4">{service.title}</h3>
            <p className="text-gray-400 text-center">{service.description}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

const services = [
  { title: "AI Website Generation", description: "Instantly create & customize websites using AI-driven templates.", icon: () => <span>🚀</span> },
  { title: "AI Chatbot Integration", description: "Seamlessly integrate AI-powered customer support chatbots.", icon: () => <span>🤖</span> },
  { title: "Automated SEO Optimization", description: "AI optimizes your site for search engines, increasing visibility.", icon: () => <span>🔍</span> },
  { title: "AI Content Generation", description: "Auto-generate high-quality content & blog posts with AI.", icon: () => <span>✍️</span> },
  { title: "AI UX & Personalization", description: "Personalized user experiences with AI-driven recommendations.", icon: () => <span>🎨</span> },
  { title: "AI-Enhanced Analytics", description: "Get deep insights and AI-powered reports on user behavior.", icon: () => <span>📊</span> },
];