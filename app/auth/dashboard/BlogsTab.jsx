"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/utils/FetchApi";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function BlogsTab() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: null,
    author: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetchBlogs();
  }, [loading]);

  async function fetchBlogs() {
    const res = await fetchApi("/blogs/", "GET");
    if (res) {
      const data = await res;
      setBlogs(data);
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/blogs/${editId}` : "/blogs/create-blogs";

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      if (form.image) {
        formData.append("image", form.image);
      }

      const userId =
        user?._id ||
        (typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("userInfo"))?._id
          : null);

      if (!userId) {
        alert("User not logged in");
        setLoading(false);
        return;
      }

      formData.append("author", userId);

      const res = await fetchApi(url, method, formData);

      if (res) throw new Error("Failed");

      setForm({ title: "", content: "", image: null, author: "" });
      setEditId(null);
      fetchBlogs();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this blog?")) return;
    await fetchApi(`/blogs/${id}`, "DELETE");
    fetchBlogs();
  }

  function handleEdit(blog) {
    setForm({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      image: null,
    });
    setEditId(blog._id);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4 max-w-md">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required={editId ? false : true}
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          value={form.content}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 text-white px-4 py-2 rounded"
        >
          {loading
            ? editId
              ? "Updating..."
              : "Adding..."
            : editId
            ? "Update Blog"
            : "Add Blog"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ title: "", content: "", image: null, author: "" });
            }}
            className="ml-2 px-4 py-2 rounded bg-red-600 text-white"
          >
            Cancel
          </button>
        )}
      </form>

      <ul className="space-y-3">
        {!blogs?.length && <p>No blogs found.</p>}
        {blogs?.map((blog) => (
          <li
            key={blog._id}
            className="border rounded p-4 flex justify-between items-start"
          >
            <div className="flex">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={300}
                className="w-28 h-28 object-cover mr-4"
              />
              <div className="max-w-2/3">
                <h3 className="font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-5">{blog.content}</p>
                <p className="text-xs mt-2 text-gray-500">
                  By: {blog.author?.username || "Unknown"}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(blog)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
