"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaWrench,
  FaUserFriends,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BsFillPhoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
// import bgVideo from "@/public/assets/bgtech.mp4";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pic01 from "@/public/assets/pic01.jpg";
import pic02 from "@/public/assets/pic02.jpg";
import pic03 from "@/public/assets/pic03.jpg";
import car from "@/public/assets/car.png";
import contact from "@/public/assets/contact.jpg";
import contactSvg from "@/public/assets/contactSvg.png";
import boss from "@/public/assets/boss.jpg";
import ClientLogoMarquee from "./ClientLogoMarquee";

const images = [
  // "https://www.shutterstock.com/image-photo/inside-car-workshop-cars-on-600nw-2469499053.jpg",
  // "https://plus.unsplash.com/premium_photo-1677009835876-4a29ddc4cc2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9vbHN8ZW58MHx8MHx8fDA%3D",
  // "https://cdn.pixabay.com/photo/2017/03/28/12/10/truck-2180064_1280.jpg",
  pic01,
  pic02,
  pic03,
];
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "Excellent work, fast and efficient. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Fast and reliable service. Very happy with the professionalism!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    comment: "Great experience, friendly staff and quick turnaround.",
  },
];

const heroBullets = [
  "24/7 Support Service",
  "Same Day Service Available",
  "On Time Delivery Guaranteed",
  "Affordable Prices for All Services",
  "Quality Work and Customer Satisfaction",
  "Customer Satisfaction Guaranteed",
];
export default function LandingPage() {
  const [showButton, setShowButton] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [type, setType] = useState("business");

  const scrollRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* <div className="absolute inset-0 transition-all duration-700 ease-in-out">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            fill
            priority
            className="object-cover transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
        </div> */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 1, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.9, scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
          </motion.div>
        </AnimatePresence>

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
            data-aos="fade-up"
            className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-[15px] rounded-full px-6 py-3 cursor-pointer duration-700"
          >
            Getting Started
          </Link>
        </div>

        <button
          onClick={prevSlide}
          className="absolute z-30 left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-30 right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-6 z-30 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-4 bg-gradient-to-r from-teal-50 via-teal-50 to-blue-100">
        <div className="container mx-auto">
          <div className="max-w-screen-md"></div>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6 justify-between items-center">
            <div>
              <h2
                data-aos="fade-right"
                className="text-slate-900 text-3xl font-bold !leading-tight pb-10"
              >
                The Most Modern Technology Based Services
              </h2>
              <p
                data-aos="fade-right"
                className="text-slate-600 text-base leading-relaxed"
              >
                We offer a wide range of services to help you take your business
                to the next level. From custom web development to design and
                development, we have the expertise to help you succeed.
              </p>
              <ul>
                {heroBullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                    className="flex items-center gap-2 text-slate-600 text-sm mt-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex gap-6 items-center flex-wrap">
                <Link
                  data-aos="fade-right"
                  href="/services"
                  type="button"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-[15px] rounded-full px-6 py-3 cursor-pointer duration-700"
                >
                  See our services
                </Link>
                <Link
                  data-aos="fade-left"
                  href="/blogs"
                  className="text-slate-900 text-[15px] font-semibold underline max-sm:block whitespace-nowrap cursor-pointer hover:text-teal-500 duration-700"
                >
                  Read our blog
                </Link>
              </div>
            </div>

            <div className="">
              <Image
                data-aos="fade-up-left"
                src={car}
                alt="Car"
                className="shrink-0 w-full h-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2
              data-aos="fade-right"
              className="text-3xl font-bold text-slate-900 !leading-tight"
            >
              Our Services
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Decile Pump Repair",
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
                {/* <FaWrench className="text-teal-600 text-3xl mb-4" /> */}
                <img
                  src="https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg"
                  className="w-32 shrink-0"
                  alt="brand-logo1"
                />
                <h4 className="font-bold text-xl mb-2">{service}</h4>
                <p className="text-sm text-gray-600">
                  Premium {service.toLowerCase()} by certified professionals.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white w-full px-4 pt-16 pb-16" id="faq">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2
            data-aos="fade-right"
            className="text-3xl font-bold text-slate-900 !leading-tight"
          >
            Brand we work with
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

        <div
          data-aos="fade-up"
          className="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
        >
          <a target="_blank" href="">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/442910/brand-apple.svg"
            />
          </a>
          <a target="_blank" href="">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
            />
          </a>
          <a target="_blank" href="">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
            />
          </a>
          <a target="_blank" href="">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"
            />
          </a>
          <a target="_blank" href="">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443206/brand-line.svg"
            />
          </a>
          <a target="_blank" href="">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/519278/slack.svg"
            />
          </a>
        </div>
      </section>

      <section id="contact" className=" bg-teal-50">
        <div className="container mx-auto px-4 w-full flex flex-col lg:flex-row items-stretch">
          <div className="relative w-full lg:w-1/2 h-80 lg:h-auto">
            <Image
              src={contactSvg}
              alt="Contact"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center 0">
            <form className="w-full max-w-xl space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Are you a Business or Private Individual ?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="clientType"
                      value="business"
                      checked={type === "business"}
                      onChange={() => setType("business")}
                      className="accent-teal-500 border-0"
                    />
                    <span>Business</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="clientType"
                      value="private"
                      checked={type === "private"}
                      onChange={() => setType("private")}
                      className="accent-teal-500 border-0"
                    />
                    <span>Private Individual</span>
                  </label>
                </div>
              </div>

              <input
                type="text"
                placeholder="Model of Vehicle"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <textarea
                placeholder="Tell us more about your request..."
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-md transition duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="p-4 py-20 max-w-6xl mx-auto">
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

      <section className="w-full py-20 px-4 md:px-12">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2
              data-aos="fade-right"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Meet Our Chairman
            </h2>
            <p
              data-aos="fade-left"
              className="text-xl font-semibold text-teal-600 mb-2"
            >
              Mr. Abdul Karim Chowdhury (CEO)
            </p>
            <p
              data-aos="fade-up"
              className="text-gray-700 mb-6 leading-relaxed"
            >
              Mr. Abdul Karim is the visionary leader behind our organization’s
              growth and innovation. With over 30 years of experience in the
              logistics and supply chain industry, he has led with integrity,
              strategy, and a strong commitment to service excellence. Under his
              leadership, we have reached new milestones in efficiency and
              customer satisfaction.
            </p>

            <p
              data-aos="fade-up"
              className="text-gray-700 mb-6 leading-relaxed"
            >
              With over 30 years of experience in the logistics and supply chain
              industry, he has led with integrity, strategy, and a strong
              commitment to service excellence. Under his leadership, we have
              reached new milestones in efficiency and customer satisfaction.
            </p>

            <Link
              href="/chairman-profile"
              className="inline-block text-teal-600 font-semibold underline underline-offset-4 hover:text-teal-800 transition duration-300"
            >
              View Full Profile
            </Link>
          </div>
          <div
            data-aos="fade-right"
            className="relative w-full md:w-1/3 h-72 md:h-96 rounded-xl overflow-hidden shadow-lg order-first md:order-last"
          >
            <Image
              // src={boss}
              src="https://i.pravatar.cc/100?img=2"
              alt="Chairman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 data-aos="fade-up" className="text-3xl font-bold mb-10">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((data, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="bg-white snap-center min-w-[300px] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="italic text-gray-700">“{data.comment}”</p>

                <img
                  src={`https://i.pravatar.cc/100?img=${i + 1}`}
                  alt={`Customer ${i + 1}`}
                  className="w-14 h-14 flex mx-auto rounded-full mb-4 object-cover my-5"
                />
                <p className="font-semibold text-teal-700 flex items-center justify-center gap-1">
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoMarquee />

      <section className="mb-32">
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height="480"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <div className="relative">
                  {/* Image */}
                  <Image
                    src={contact}
                    alt="contact"
                    className="w-full rounded-lg shadow-lg object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-teal-200 p-4 text-primary">
                          <BiSupport className="text-2xl" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Technical support</p>
                        <p className="text-sm text-neutral-500">
                          example@gmail.com
                        </p>
                        <p className="text-sm text-neutral-500">
                          1-600-890-4567
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-teal-200 p-4 text-primary">
                          <GrMapLocation className="text-2xl" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Address</p>
                        <p className="text-sm text-neutral-500">
                          Dhanmondi 32, Kolabagan, <br />
                          Dhaka, Bangladesh <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-teal-200 p-4 text-primary">
                          <TbDeviceLandlinePhone className="text-2xl" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Land Line</p>
                        <p className="text-neutral-500"> (0421) 431 2030</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-teal-200 p-4 text-primary">
                          <BsFillPhoneFill className="text-2xl" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Mobile</p>
                        <p className="text-neutral-500"> +91 123456789</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="w-full md:px-3 lg:px-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ducimus quasi adipisci veritatis cumque, ratione corrupti
                  vitae, tempore numquam necessitatibus quos soluta similique.
                  Aspernatur nam quae at perspiciatis, optio porro illo?
                </p>
              </div>
            </div>
          </div>
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
