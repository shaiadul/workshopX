"use client";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-yellow-50">
      <h1
        data-aos="fade-up-left"
       className="text-8xl font-extrabold text-teal-600 mb-4">404</h1>
      <h2 data-aos="fade-up-right" className="text-2xl font-bold text-gray-800 mb-2">
        Lost in the Webiverse 🕸️
      </h2>
      <p data-aos="fade-up-left" className="text-gray-700 max-w-md mb-6">
        This page took a wrong turn at the homepage and never came back. Maybe
        it’s chilling with your lost socks 🧦 or hiding behind a 302 redirect.
      </p>
      <Link
        href="/"
        data-aos="fade-up-right"
        className="inline-block px-6 py-3 text-teal-600  font-semibold rounded-full underline hover:text-red-600 transition"
      >
        🚀 Take Me Home
      </Link>
    </section>
  );
}
