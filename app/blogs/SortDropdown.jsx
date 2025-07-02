"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiFilter } from "react-icons/fi"; 

export default function SortDropdown({ sortOrder, setSortOrder }) {
  const [open, setOpen] = useState(false);
  const options = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];

  return (
    <div className="relative inline-block text-left w-full md:w-40">
   
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3  rounded-lg bg-white text-gray-700  transition duration-700"
      >
        <span className="flex items-center gap-2">
          <FiFilter className="text-teal-500" />
          {options.find((opt) => opt.value === sortOrder)?.label || "Sort By"}
        </span>
        <svg
          className={`ml-2 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>

  
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setSortOrder(option.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-teal-100 ${
                  sortOrder === option.value ? "bg-teal-50 text-teal-700 font-medium" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
