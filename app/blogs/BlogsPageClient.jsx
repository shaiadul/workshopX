"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SortDropdown from "./SortDropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/redux/slice/blogSlice";
import Image from "next/image";

export default function BlogsPageClient() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const dispatch = useDispatch();

  const { list, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const parseDate = (dateStr) => {
    return new Date(dateStr);
  };

  const filteredBlogs = list
    ?.filter(
      (blog) =>
        blog?.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog?.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = parseDate(a.createdAt);
      const dateB = parseDate(b.createdAt);
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  return (
    <div className="px-4 py-10 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 data-aos="fade-right" className="text-3xl font-bold text-slate-900">
          Our Latest Blog Posts
        </h2>
        <p
          data-aos="fade-left"
          className="text-slate-600 mt-4 max-w-2xl mx-auto"
        >
          Stay up to date with web development trends, UX insights, and
          tutorials.
        </p>
      </motion.div>

      <div className="relative mb-10">
        <div className="relative overflow-visible bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-200">
          <div className="relative w-full md:w-2/3 lg:w-1/2">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search blogs by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
            />
          </div>
          <div className="relative z-50 w-full md:w-40">
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-slate-600 text-md">
          Total <strong>{filteredBlogs?.length}</strong> results found for{" "}
          <strong>{searchTerm ? searchTerm : "All"}</strong>
        </h4>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredBlogs?.length > 0 ? (
          filteredBlogs?.map((blog, index) => (
            <Link key={index} href={`/blogs/${blog._id}`}>
              <div
                key={blog._id}
                custom={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-700 border border-gray-200"
              >
                <div className="relative w-full max-w-[500px] h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                    {blog.content}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span> By {blog.author?.username}</span>
                    <span>{new Date(blog.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-slate-500">
            No blogs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
