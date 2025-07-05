"use client";
import { useEffect, useState } from "react";

export default function ProfileTab() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [token]);

  async function fetchProfile() {
    if (!token) return;
    try {
      const res = await fetch("/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch profile");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      {!user ? (
        <p>Loading...</p>
      ) : (
        <div className="border p-4 rounded bg-gray-50">
          <p>
            <span className="font-semibold">Name:</span> {user.username}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Joined: {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}
