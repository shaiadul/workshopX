"use client";
import Image from "next/image";
import googleLogo from "@/public/assets/googleLogo.png";
import yahoo from "@/public/assets/yahoo.png";

const logos = [
  googleLogo,
  googleLogo,
  googleLogo,
  googleLogo,
  googleLogo,
  yahoo,
];

export default function ClientLogoMarquee() {
  return (
    <section className="w-full bg-gray-50 py-20 overflow-hidden">
      <div className="relative whitespace-nowrap flex animate-marquee gap-20 md:gap-40">
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="w-40 h-28 grayscale hover:grayscale-0 transition duration-700 flex-shrink-0"
          >
            <Image
              src={logo}
              alt={`Client ${idx}`}
              width={128}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
