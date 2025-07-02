"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SingleBlog({ blog }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 data-aos="fade-left" className="text-3xl font-bold text-slate-900 mb-4">{blog.title}</h1>
      <p data-aos="fade-right" className="text-sm text-slate-500 mb-2">
        {blog.author} — {blog.date}
      </p>
      <img
        data-aos="zoom-in-up"
        // src={blog.image}
        src="https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg"
        alt={blog.title}
        className="w-full h-[600px] rounded-lg mb-6"
      />
      <p data-aos="fade-up" className="text-lg text-slate-700">{blog.excerpt}</p>
    </main>
  );
}
