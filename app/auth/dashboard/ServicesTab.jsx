"use client";
import { fetchApi } from "@/utils/FetchApi";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ServicesTab() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
    createdBy: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetchServices();
  }, [loading]);

  async function fetchServices() {
    const res = await fetchApi("/services/", "GET");
    if (res) {
      const data = await res;
      setServices(data);
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
      const url = editId ? `/services/${editId}` : "/services/create-service";

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
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

      formData.append("createdBy", userId);

      const res = await fetchApi(url, method, formData);

      if (res) throw new Error("Failed");

      setForm({ title: "", description: "", image: null, createdBy: "" });
      setEditId(null);
      fetchServices();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this service?")) return;
    await fetchApi(`/services/${id}`, "DELETE");
    setForm((prev) => ({
      ...prev,
      image: null,
      createdBy: "",
      title: "",
      description: "",
    }));
    fetchServices();
  }

  function handleEdit(service) {
    setForm({
      title: service.title,
      description: service.description,
      createdBy: service.createdBy,
      image: null,
    });
    setEditId(service._id);
  }

  // console.log("services", services);

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
        <input
          name="image"
          type="file"
          accept="image/*"
          placeholder="Image insert here"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required={editId ? false : true}
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
          {loading
            ? editId
              ? "Updating..."
              : "Adding..."
            : editId
            ? "Update Service"
            : "Add Service"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ title: "", description: "" });
            }}
            className="ml-2 px-4 py-2 rounded bg-red-600 text-white"
          >
            Cancel
          </button>
        )}
      </form>

      <ul className="space-y-3">
        {!services?.length && <p>No services found.</p>}
        {services?.map((service) => (
          <li
            key={service._id}
            className="border rounded p-4 flex justify-between items-start"
          >
            <div className="flex">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={300}
                className="w-28 h-28 object-cover mr-4"
              />
              <div className="max-w-2/3">
                <h3 className="font-semibold">{service.title}</h3>
                <p className="line-clamp-3">{service.description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
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
