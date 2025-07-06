"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffers } from "@/redux/slice/offerSlice";

export default function OffersPageClient() {
  const dispatch = useDispatch();


  const { list, loading, error } = useSelector((state) => state.offers);


  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-gray-800 mb-10"
      >
        Hot Offers of the Month
      </h2>

      {list.map((offer, index) => (
        <Link
          href={`/offers/${offer._id}`}
          key={index}
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
            <p className="text-gray-700 text-base max-w-4xl line-clamp-4">
              {offer.description}
            </p>
            <p className="text-sm text-gray-500 italic">
              {" "}
              Posted on: {new Date(offer.createdAt).toLocaleString()}
            </p>
            <button className="mt-4 inline-block py-2 text-teal-500 rounded-md hover:text-teal-700 transition duration-700 underline">
              Explore More
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
