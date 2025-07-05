"use client";
import { useEffect, useState } from "react";

export default function OfferTab() {
  const [offers, setOffers] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    fetchOffers();
  }, [token]);

  async function fetchOffers() {
    if (!token) return;
    try {
      const res = await fetch("/api/offers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch offers");
      const data = await res.json();
      setOffers(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Offers</h2>
      {offers.length === 0 && <p>No offers found.</p>}
      <ul className="space-y-4">
        {offers.map((offer) => (
          <li key={offer._id} className="border p-4 rounded bg-gray-50">
            <h3 className="text-lg font-bold">{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="text-sm text-gray-600 mt-2">
              Valid From: {new Date(offer.startDate).toLocaleDateString()} To:{" "}
              {new Date(offer.endDate).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
