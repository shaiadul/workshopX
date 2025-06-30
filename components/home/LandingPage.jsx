"use client";

import { motion } from "framer-motion";
import { FaWrench, FaUserFriends } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// import bgVideo from "@/public/assets/bgtech.mp4";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [showButton, setShowButton] = useState(false);
  const testimonials = [
    "Fast and reliable service. Very happy with the professionalism!",
    "Great experience, friendly staff and quick turnaround.",
    "Affordable and trustworthy. Highly recommend!",
  ];

  const scrollRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowButton(window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      
      <section className="relative w-full h-[600px] overflow-hidden">
        <video
          poster="https://cdni.iconscout.com/illustration/premium/thumb/male-worker-doing-wood-cutting-illustration-download-in-svg-png-gif-file-formats--carpentry-skills-woodworking-project-sawing-craftsmanship-creative-art-studio-pack-abstract-illustrations-10337990.png?f=webp"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            // src="/assets/bgtech.mp4"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Experience Innovation in Motion
          </h1>
          <p
            data-aos="zoom-in"
            className="mt-4 text-base md:text-lg max-w-xl text-gray-200"
          >
            Delivering modern web solutions with powerful technology and
            creative strategy.
          </p>
          <Link
            href="/services"
            type="button"
            data-aos="fade-up"
            className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-[15px] rounded-full px-6 py-3 cursor-pointer duration-700"
          >
            Getting Started
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 px-4 bg-gradient-to-r from-teal-50 via-teal-50 to-blue-100">
        <div className="container mx-auto">
          <div className="max-w-screen-md">
            <h2
              data-aos="fade-right"
              className="text-slate-900 xl:text-6xl md:text-5xl text-4xl font-bold !leading-tight"
            >
              The Most Modern Card Platform for Debit
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6">
            <div>
              <p
                data-aos="fade-right"
                className="text-slate-600 text-base leading-relaxed"
              >
                Explore a curated collection of ready-to-use components and
                design blocks, empowering you to create stunning, responsive
                interfaces with ease. Streamline your workflow and discover the
                future of web development.
              </p>
              <div className="mt-12 flex gap-6 items-center flex-wrap">
                <Link
                  data-aos="fade-right"
                  href="/services"
                  type="button"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-[15px] rounded-full px-6 py-3 cursor-pointer duration-700"
                >
                  Getting Started
                </Link>
                <a
                  data-aos="fade-right"
                  href="#"
                  className="text-slate-900 text-[15px] font-semibold underline max-sm:block whitespace-nowrap"
                >
                  API Documentation
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
                <img
                  data-aos="fade-up"
                  src="https://readymadeui.com/images/brand-logo1.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo1"
                />
                <img
                  data-aos="fade-up"
                  src="https://readymadeui.com/images/brand-logo2.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo2"
                />
                <img
                  data-aos="fade-up"
                  src="https://readymadeui.com/images/brand-logo3.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo3"
                />
                <img
                  data-aos="fade-up"
                  src="https://readymadeui.com/images/brand-logo4.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo4"
                />
              </div>
            </div>

            <div className="aspect-[7/4]">
              <img
                data-aos="fade-up-left"
                src="https://cdni.iconscout.com/illustration/premium/thumb/male-worker-doing-wood-cutting-illustration-download-in-svg-png-gif-file-formats--carpentry-skills-woodworking-project-sawing-craftsmanship-creative-art-studio-pack-abstract-illustrations-10337990.png?f=webp"
                className="shrink-0 w-full h-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12"
          >
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Diagnostics",
              "Engine Repair",
              "Brake Service",
              "AC Maintenance",
              "Oil Change",
              "Car Wash",
            ].map((service) => (
              <motion.div
                key={service}
                whileHover={{ scale: 1.03 }}
                data-aos="fade-up"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <FaWrench className="text-teal-600 text-3xl mb-4" />
                <h4 className="font-bold text-xl mb-2">{service}</h4>
                <p className="text-sm text-gray-600">
                  Premium {service.toLowerCase()} by certified professionals.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-4 py-10 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            data-aos="fade-right"
            className="text-3xl font-bold text-slate-900 !leading-tight"
          >
            What our happy client say
          </h2>
          <p
            data-aos="fade-left"
            className="text-[15px] mt-6 leading-relaxed text-slate-600"
          >
            See what our happy clients have to say. They’ve shared how our
            templates helped them launch quickly, look professional, and grow
            with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-md:justify-center text-center max-lg:max-w-3xl max-md:max-w-lg mx-auto mt-16">
          <div data-aos="fade-up-right">
            <div className="flex flex-col items-center">
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-24 h-24 rounded-full border-2 border-teal-600"
              />
              <div className="mt-6">
                <h4 className="text-base font-semibold text-slate-900">
                  John Doe
                </h4>
              </div>
            </div>

            <div className="flex justify-center space-x-1 mt-3">
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6">
              <p className="text-[15px] leading-relaxed text-slate-700 font-normal">
                ReadymadeUI made it so easy to launch my website. The components
                are clean, fast to use, and saved me hours of development time.
              </p>
            </div>
          </div>

          <div data-aos="fade-up">
            <div className="flex flex-col items-center">
              <img
                src="https://readymadeui.com/team-3.webp"
                className="w-24 h-24 rounded-full border-2 border-teal-600"
              />
              <div className="mt-6">
                <h4 className="text-base font-semibold text-slate-900">
                  Mark Adair
                </h4>
              </div>
            </div>

            <div className="flex justify-center space-x-1 mt-3">
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6">
              <p className="text-[15px] leading-relaxed text-slate-700 font-normal">
                I love how professional everything looks with ReadymadeUI. The
                templates are modern, responsive, and easy to customize.
              </p>
            </div>
          </div>

          <div data-aos="fade-up-left">
            <div className="flex flex-col items-center">
              <img
                src="https://readymadeui.com/team-4.webp"
                className="w-24 h-24 rounded-full border-2 border-teal-600"
              />
              <div className="mt-6">
                <h4 className="text-base font-semibold text-slate-900">
                  Simon Konecki
                </h4>
              </div>
            </div>

            <div className="flex justify-center space-x-1 mt-3">
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6">
              <p className="text-[15px] leading-relaxed text-slate-700 font-normal">
                ReadymadeUI gave my project a polished look without the hassle.
                The layouts are beautifully designed and ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-600 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 data-aos="fade-up" className="text-4xl font-bold mb-4">
            Professional Workshop Services
          </h2>
          <p data-aos="fade-up" className="text-lg mb-6">
            Expert repair, diagnostics, and maintenance — reliable and fast.
          </p>
          <a
            data-aos="fade-up"
            href="#contact"
            className="bg-white text-teal-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Book a Service
          </a>
        </div>
      </section>

      <section id="team" className="px-4 py-10">
        <div className="lg:max-w-5xl md:max-w-3xl max-w-full mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              data-aos="fade-right"
              className="text-slate-900 text-3xl font-bold"
            >
              Meet our team
            </h2>
            <p
              data-aos="fade-left"
              className="text-slate-600 text-[15px] mt-4 leading-relaxed"
            >
              Meet our team of professionals to serve you.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mx-auto mt-12">
            <div
              data-aos="fade-right"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  John Doe
                </h4>
                <p className="text-slate-600 text-xs mt-1">Software Engineer</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  Mark Adair
                </h4>
                <p className="text-slate-600 text-xs mt-1">Software Engineer</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  Simon Konecki
                </h4>
                <p className="text-slate-600 text-xs mt-1">Web Designer</p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-4.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  Sophia
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Software Developer
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up-left"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-5.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  Alen
                </h4>
                <p className="text-slate-600 text-xs mt-1">Web Designer</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-6.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  Eleanor
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Software Developer
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  Mark Adair
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Software Developer
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-50">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="text-slate-900 text-[15px] font-semibold">
                  John Doe
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Software Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 data-aos="fade-up" className="text-3xl font-bold mb-10">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((text, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="bg-white snap-center min-w-[300px] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="italic text-gray-700 mb-4">“{text}”</p>
                <p className="font-semibold text-teal-700 flex items-center justify-center gap-1">
                  <FaUserFriends /> Customer #{i + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="p-4 py-10 container mx-auto">
        <div className="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div>
            <h2 className="text-slate-900 text-3xl font-bold">Let's Talk</h2>
            <p className="text-[15px] text-slate-600 mt-4 leading-relaxed">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help.
            </p>
            <div className="mt-12">
              <h2 className="text-slate-900 text-base font-semibold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#000"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a href="javascript:void(0)" className="text-sm ml-4">
                    <small className="block text-slate-900">Mail</small>
                    <span className="text-teal-600 font-medium">
                      info@example.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-slate-900 text-base font-semibold">
                Socials
              </h2>
              <ul className="flex mt-4 space-x-4">
                <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#000"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#000"
                      viewBox="0 0 511 512"
                    >
                      <path
                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#000"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-teal-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-teal-500"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-teal-500"
            ></textarea>
            <button
              type="button"
              className="text-white bg-teal-600 hover:bg-teal-700 rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-[50px] h-[50px] z-50 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full shadow-lg transition animate-bounce"
          >
            ↑
          </button>
        )}
      </>

    </main>
  );
}
