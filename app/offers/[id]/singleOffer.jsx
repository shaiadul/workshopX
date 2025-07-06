
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function SingleOffer({ offer }) {
useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img
          data-aos="zoom-in-up"
          src={offer.image}
          alt={offer.title}
          className="w-full lg:w-[500px] rounded-xl shadow"
        />
        <div className="space-y-4">
          <h1 data-aos="fade-right" className="text-3xl font-bold text-teal-700">{offer.title}</h1>
          <p data-aos="fade-left" className="text-gray-700">{offer.description}</p>
          <p data-aos="fade-right" className="text-sm text-gray-500 italic">
            Posted on: {new Date(offer.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
