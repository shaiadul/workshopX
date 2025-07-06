"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const user = useSelector((state) => state.auth.user);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Services", href: "/services" },
    { label: "Offers", href: "/offers" },
    { label: "Contact", href: "/#contact" },
  ];

  if (user?.email) {
    navItems.push({ label: "Dashboard", href: "/auth/dashboard" });
  }

  return (
    <header className="w-full shadow-md z-50">
      {/* Top contact bar */}
      <div className="bg-teal-400">
        <div className="container mx-auto px-5 text-gray-700 text-sm py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="tel:+880123456789"
              className="flex items-center gap-1 hover:underline"
            >
              <FaPhoneAlt /> +880 123456789
            </a>
            <a
              href="mailto:info@workshop.com"
              className="flex items-center gap-1 hover:underline"
            >
              <FaEnvelope /> info@workshop.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-5">
        <div className="bg-white py-3 flex justify-between items-center relative">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-teal-400">
              LandwindX
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-6 text-gray-800 font-medium">
            {navItems.map((item) => {
              // const isActive =
              //   pathname === item.href ||
              //   (item.href.startsWith("/#") && item.href.startsWith("/blogs") && pathname === "/");

              const isActive =
                (item.href === "/" && pathname === "/") ||
                (item.href === "/blogs" && pathname.startsWith("/blogs")) ||
                (item.href === "/services" &&
                  pathname.startsWith("/services")) ||
                (item.href === "/offers" && pathname.startsWith("/offers")) ||
                (item.href === "/auth/dashboard" &&
                  pathname === "/auth/dashboard") ||
                (item.href.startsWith("/#") && pathname === "/");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`hover:text-teal-700 transition ${
                    isActive ? "text-teal-600 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md lg:hidden z-50"
              >
                <ul className="flex flex-col p-4 space-y-3">
                  {navItems.map((item) => {
                    const isActive =
                      (item.href === "/" && pathname === "/") ||
                      (item.href === "/blogs" &&
                        pathname.startsWith("/blogs")) ||
                      (item.href === "/services" &&
                        pathname.startsWith("/services")) ||
                      (item.href === "/offers" &&
                        pathname.startsWith("/offers")) ||
                      (item.href === "/auth/dashboard" &&
                        pathname === "/auth/dashboard") ||
                      (item.href.startsWith("/#") && pathname === "/");

                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`block text-gray-800 hover:text-teal-700 ${
                            isActive ? "text-teal-600 font-semibold" : ""
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
