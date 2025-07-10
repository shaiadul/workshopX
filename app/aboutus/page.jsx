"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import chairmanImg from "@/public/assets/boss.jpg"; // Replace with real image
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="font-sans text-gray-800">
      <section className="bg-gradient-to-r from-teal-50 via-teal-50 to-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
          >
            About Us
          </h1>
          <p
            data-aos="fade-up"
            className="text-slate-700 text-lg max-w-3xl mx-auto"
          >
            We are a technology-driven company delivering innovative solutions
            and exceptional service across industries. From startups to
            enterprises, we provide full-cycle services tailored to business
            needs.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            data-aos="fade-right"
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Our Vision
          </h2>
          <p data-aos="fade-left" className="text-gray-600 leading-relaxed">
            To become a leading force in the digital world by delivering
            cutting-edge solutions and fostering long-lasting client
            relationships built on trust, quality, and innovation.
          </p>
        </div>
        <div>
          <h2
            data-aos="fade-left"
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Our Mission
          </h2>
          <p data-aos="fade-right" className="text-gray-600 leading-relaxed">
            To empower businesses by providing high-performance technology
            services, ensuring excellence in every step of their digital
            transformation journey.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div
            data-aos="fade-right"
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={chairmanImg}
              alt="Chairman"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2
              data-aos="fade-left"
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Meet Our Chairman
            </h2>
            <p
              data-aos="fade-left"
              className="text-teal-600 font-semibold mb-2"
            >
              Mr. Abdul Karim Chowdhury (CEO)
            </p>
            <p data-aos="fade-left" className="text-gray-600 mb-4">
              With over 30 years of experience in the logistics and supply chain
              industry, Mr. Karim is a visionary leader dedicated to efficiency
              and excellence. His guidance continues to shape our future with a
              deep focus on innovation and service quality. With over 30 years
              of experience in the logistics and supply chain industry, Mr.
              Karim is a visionary leader dedicated to efficiency and
              excellence. His guidance continues to shape our future with a deep
              focus on innovation and service quality.
            </p>
            <Link
              data-aos="fade-left"
              href="/chairman-profile"
              className="text-teal-600 font-semibold underline underline-offset-4 hover:text-teal-800 transition duration-300"
            >
              View Full Profile
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-teal-600 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Commitment
          </h2>
          <p data-aos="fade-up" className="text-lg">
            We believe in pushing boundaries and delivering excellence. With a
            strong focus on customer satisfaction, timely delivery, and
            cutting-edge technology, we’re committed to transforming visions
            into results.
          </p>
        </div>
      </section>
    </main>
  );
}
