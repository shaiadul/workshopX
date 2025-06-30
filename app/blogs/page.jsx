"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const blogs = [
    {
      id: 1,
      title: "How to Build a Modern Web App",
      excerpt:
        "Learn the step-by-step process of building a performant and responsive web app using the latest tools.",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "John Doe",
      date: "June 28, 2025",
    },
    {
      id: 2,
      title: "UI/UX Trends to Watch in 2025",

      excerpt:
        "Explore the most important user experience and design trends shaping the digital landscape in 2025.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Jane Smith",
      date: "June 26, 2025",
    },
    {
      id: 3,
      title: "Performance Optimization Techniques",
      excerpt:
        "Boost your website speed and efficiency with proven frontend and backend performance tips.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Alex Johnson",
      date: "June 24, 2025",
    },
    {
      id: 4,
      title: "Frontend Framework Comparison",
      excerpt:
        "Evaluate the performance and features of popular frontend frameworks like React, Vue, and Angular.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Sarah Thompson",
      date: "June 22, 2025",
    },
    {
      id: 5,
      title: "Best Practices for SEO Optimization",
      excerpt:
        "Learn how to optimize your website for search engine optimization (SEO) to improve visibility and organic traffic.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Michael Brown",
      date: "June 20, 2025",
    },
    {
      id: 6,
      title: "Responsive Web Design Principles",
      excerpt:
        "Understand the importance of responsive design and learn how to create websites that adapt to different screen sizes.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Emily Wilson",
      date: "June 18, 2025",
    },
    {
      id: 7,
      title: "Accessibility Best Practices",
      excerpt:
        "Learn how to create accessible websites that meet the needs of users with disabilities.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "David Lee",
      date: "June 16, 2025",
    },
    {
      id: 8,
      title: "Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)",
      excerpt:
        "Compare the performance and SEO benefits of server-side rendering (SSR) and client-side rendering (CSR).",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Olivia Martinez",
      date: "June 14, 2025",
    },
    {
      id: 9,
      title: "Web Accessibility Guidelines",
      excerpt:
        "Understand the web accessibility guidelines and best practices for creating accessible websites.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Daniel Clark",
      date: "June 12, 2025",
    },
    {
      id: 10,
      title: "Performance Optimization Techniques",
      excerpt:
        "Boost your website speed and efficiency with proven frontend and backend performance tips.",
      image:
        " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Sophia Lewis",
      date: "June 10, 2025",
    },
  ];

  // State hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const parseDate = (dateStr) => {
    return new Date(dateStr);
  };

  // Filter and sort logic
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  return (
    <div className="px-4 py-10 container mx-auto">
      {/* Header */}
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
        <p data-aos="fade-left" className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Stay up to date with web development trends, UX insights, and
          tutorials.
        </p>
      </motion.div>

      {/* Search & Sort Controls */}
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-teal-600 rounded-xl transform -skew-y-1"></div>
        <div className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-200">
          {/* Search Input */}
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

          {/* Sort Dropdown */}
          <div className="w-full md:w-auto">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full md:w-48 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;utf8,<svg fill=\'%236B7280\' height=\'16\' viewBox=\'0 0 24 24\' width=\'16\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5H7z\'/></svg>')] pr-10"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <Link href={`/blogs/${blog.id}`}>
              <div
                key={blog.id}
                custom={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-teal-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
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
