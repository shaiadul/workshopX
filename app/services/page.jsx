"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "@/redux/slice/serviceSlice";
import Image from "next/image";


export default function ServicesPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  console.log("list services", list);
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2
          data-aos="fade-right"
          className="text-4xl font-bold text-slate-900 mb-4"
        >
          Our Services
        </h2>
        <p data-aos="fade-left" className="text-slate-600 max-w-2xl mx-auto">
          Discover how we help businesses build scalable and innovative
          solutions with our range of development and design services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list?.map((service, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-xl shadow-md bg-white border border-slate-200 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover flex  rounded-lg mb-4"
            />
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
