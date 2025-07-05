import { useState } from "react";

export default function BlogsTab() {
  const [blogs, setBlogs] = useState([
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
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      author: "Jane Smith",
      date: "June 26, 2025",
    },
    // Add the remaining blogs...
  ]);

  const [form, setForm] = useState({ title: "", excerpt: "", image: "", author: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setBlogs((prev) =>
        prev.map((blog) => (blog.id === editId ? { ...blog, ...form } : blog))
      );
    } else {
      setBlogs((prev) => [
        { id: Date.now(), date: new Date().toLocaleDateString(), ...form },
        ...prev,
      ]);
    }
    setForm({ title: "", excerpt: "", image: "", author: "" });
    setEditId(null);
  };

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  const handleEdit = (blog) => {
    setForm({ title: blog.title, excerpt: blog.excerpt, image: blog.image, author: blog.author });
    setEditId(blog.id);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="p-2 border rounded"
          required
        />
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="Excerpt"
          className="p-2 border rounded md:col-span-2"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded col-span-full"
        >
          {editId ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      {/* Blog Cards */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded shadow-md overflow-hidden flex flex-col"
          >
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-semibold text-lg mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{blog.excerpt}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
