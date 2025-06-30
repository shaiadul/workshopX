"use client";
import { useState, useEffect } from "react";

export default function ServicesTab() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    const res = await fetch("/api/services", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setServices(data);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/services/${editId}` : "/api/services";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setForm({ title: "", description: "" });
      setEditId(null);
      fetchServices();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this service?")) return;
    await fetch(`/api/services/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchServices();
  }

  function handleEdit(service) {
    setForm({ title: service.title, description: service.description });
    setEditId(service._id);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Services</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4 max-w-md">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 text-white px-4 py-2 rounded"
        >
          {editId ? "Update Service" : "Add Service"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ title: "", description: "" });
            }}
            className="ml-2 px-4 py-2 rounded border border-gray-400"
          >
            Cancel
          </button>
        )}
      </form>

      <ul className="space-y-3">
        {services.map((service) => (
          <li
            key={service._id}
            className="border rounded p-4 flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(service)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service._id)}
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
