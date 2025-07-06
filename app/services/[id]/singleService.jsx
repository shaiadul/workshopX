"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function SingleServices({ service }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1
        data-aos="fade-left"
        className="text-3xl font-bold text-slate-900 mb-4"
      >
        {service.title}
      </h1>
      <p data-aos="fade-right" className="text-sm text-slate-500 mb-2"></p>
      <Image
        data-aos="zoom-in-up"
        src={service.image}
        alt={service.title}
        width={200}
        height={200}
        className="w-[200px] h-[200px] flex justify-start border mb-6"
      />
      <p data-aos="fade-up" className="text-lg text-slate-700">
        {service.description}
      </p>
    </main>
  );
}
