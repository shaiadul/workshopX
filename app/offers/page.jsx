"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function OfferPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const offers = [
    {
      id: 1,
      title: "Big Discount on Smart TVs!",
      description:
        "Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last. Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last.",
      date: "July 10, 2025",
      expiry: "July 15, 2025",
      image:
        "https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg",
    },
    {
      id: 2,
      title: "Kitchen Appliances Mega Sale",
      description:
        "Save big on blenders, rice cookers, and microwave ovens. Limited-time offer! Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last.",
      date: "July 15, 2025",
      expiry: "July 20, 2025",
      image:
        "https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg",
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free: Fans & Coolers",
      description:
        "Beat the heat with our Buy 1 Get 1 Free offer on selected cooling appliances. Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last.",
      date: "July 20, 2025",
      expiry: "July 30, 2025",
      image:
        "https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-gray-800 mb-10"
      >
        Hot Offers of the Month
      </h2>

      {offers.map((offer, index) => (
        <Link
          href={`/offers/${offer.id}`}
          key={offer.id}
          className="flex flex-col lg:flex-row items-center gap-5 bg-white p-6 md:p-1"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="w-full lg:w-[300px] h-[200px] lg:h-[300px] overflow-hidden rounded-lg">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-teal-700">
              {offer.title}
            </h3>
            <p className="text-gray-700 text-base max-w-4xl">{offer.description}</p>
            <p className="text-sm text-gray-500 italic"> Posted on: {offer.date}</p>
            <button className="mt-4 inline-block py-2 text-teal-500 rounded-md hover:text-teal-700 transition duration-700 underline">
              Explore More
            </button>
          </div>
        </Link>
      ))}
      
    </div>
  );
}
