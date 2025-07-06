"use client";

import { fetchApi } from "@/utils/FetchApi";
import { useEffect, useState } from "react";

export default function UserTab() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [token]);

  async function fetchUsers() {
    if (!token) return;
    try {
      const res = await fetchApi("/users", "GET");
      if (!res) throw new Error("Failed to fetch users");
      const data = await res;
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this user?")) return;
    setLoadingId(id);
    try {
      const res = await fetchApi(`/users/${id}`, "DELETE");
      if (!res) throw new Error("Failed to delete user");
      alert("User deleted");
      fetchUsers();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingId(null);
    }
  }

  async function toggleActive(id) {
    setLoadingId(id);
    try {
      const res = await fetchApi(`/users/${id}/block`, "PATCH");
      if (!res.message) throw new Error("Failed to update status");
      alert("Status updated");
      fetchUsers();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      {users.length === 0 && <p>No users found.</p>}

      <table className="w-full border-collapse border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Deleted</th>
            <th className="p-2 border">Verified</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            ({ _id, username, email, role, isVerified, isBlocked, isDeleted }) => (
              <tr key={_id} className="border-b">
                <td className="p-2 border">{username}</td>
                <td className="p-2 border">{email}</td>
                <td className="p-2 border">{isDeleted ? "Deleted" : "Not Deleted"}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      isVerified
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {isVerified ? "Verified" : "Not Verified"}
                  </span>
                </td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      !isBlocked
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {isBlocked ? "Blocked" : "Active"}
                  </span>
                </td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => toggleActive(_id, isBlocked)}
                    className="text-yellow-500 hover:text-yellow-600 underline px-2 py-1 rounded"
                    disabled={loadingId === _id}
                  >
                    {isBlocked ? "Activate" : "Block"}
                  </button>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="text-red-600 hover:text-red-700 underline px-2 py-1"
                    disabled={loadingId === _id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
