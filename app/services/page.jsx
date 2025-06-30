"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications tailored to your business needs, using the latest technologies like React, Next.js, and Node.js.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Build intuitive, high-performance mobile apps for Android and iOS using cross-platform frameworks like Flutter and React Native.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "Craft engaging user interfaces and seamless user experiences through design thinking, wireframing, and prototyping.",
    icon: "🎨",
  },
  {
    title: "E-commerce Solutions",
    description:
      "End-to-end e-commerce development including store setup, product management, secure payments, and performance optimization.",
    icon: "🛒",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Improve your website visibility and rankings with data-driven SEO, SEM, and targeted digital marketing strategies.",
    icon: "📈",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support, bug fixes, and performance enhancements to keep your website or app secure and up to date.",
    icon: "🛠️",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 data-aos="fade-right" className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
        <p data-aos="fade-left" className="text-slate-600 max-w-2xl mx-auto">
          Discover how we help businesses build scalable and innovative
          solutions with our range of development and design services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-xl shadow-md bg-white border border-slate-200 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold text-slate-900 mb-2">
              {service.title}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
