"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { fetchApi } from "@/utils/FetchApi";

export default function OfferTab() {
  const [offers, setOffers] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
    expireAt: "",
    createdBy: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetchOffers();
  }, [loading]);

  async function fetchOffers() {
    try {
      const res = await fetchApi("/offers", "GET");
      if (res) {
        const data = await res;
        setOffers(data);
      }
    } catch (err) {
      console.error("Failed to fetch offers:", err);
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
      const url = editId ? `/offers/${editId}` : "/offers";

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("expireAt", form.expireAt);
      if (form.image) formData.append("image", form.image);

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

      if (res) throw new Error("Failed to submit offer");

      setForm({
        title: "",
        description: "",
        image: null,
        expireAt: "",
        createdBy: "",
      });
      setEditId(null);
      fetchOffers();
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this offer?")) return;
    await fetchApi(`/offers/${id}`, "DELETE");
    fetchOffers();
  }

  function handleEdit(offer) {
    setForm({
      title: offer.title,
      description: offer.description,
      expireAt: offer.expireAt.split("T")[0], 
      createdBy: offer.createdBy,
      image: null,
    });
    setEditId(offer._id);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Offers</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mb-6">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required={editId ? false : true}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="date"
          name="expireAt"
          value={form.expireAt}
          onChange={handleChange}
          className="w-full p-2 border rounded"
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
            ? "Update Offer"
            : "Add Offer"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({
                title: "",
                description: "",
                image: null,
                expireAt: "",
                createdBy: "",
              });
            }}
            className="ml-2 px-4 py-2 rounded bg-red-600 text-white"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Offer List */}
      <ul className="space-y-4">
        {!offers.length && <p>No offers found.</p>}
        {offers.map((offer) => (
          <li
            key={offer._id}
            className="border p-4 rounded bg-gray-50 flex justify-between items-start"
          >
            <div className="flex">
              {offer.image && (
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover mr-4 rounded"
                />
              )}
              <div className="max-w-2/3">
                <h3 className="text-lg font-bold">{offer.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-3">{offer.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Expire Date: {new Date(offer.expireAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => handleEdit(offer)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(offer._id)}
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
