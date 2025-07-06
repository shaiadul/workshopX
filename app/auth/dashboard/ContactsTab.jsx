"use client";
import { fetchApi } from "@/utils/FetchApi";
import { useState, useEffect } from "react";

export default function ContactsTab() {
  const [contacts, setContacts] = useState([]);
  const [replyMap, setReplyMap] = useState({});
  const [loadingReply, setLoadingReply] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) fetchContacts();
  }, [token]);

  async function fetchContacts() {
    try {
      const res = await fetchApi("/contacts", "GET");
      if (!res) throw new Error("Failed to fetch contacts");
      const data = await res;
      setContacts(data);

      // Initialize replies
      const initialReplies = {};
      data.forEach((c) => {
        if (c.reply) initialReplies[c._id] = c.reply;
      });
      setReplyMap(initialReplies);
    } catch (err) {
      console.error(err.message);
    }
  }

  function handleReplyChange(id, value) {
    setReplyMap({ ...replyMap, [id]: value });
  }

  async function handleReplySubmit(id) {
    if (!replyMap[id] || replyMap[id].trim() === "") {
      alert("Reply cannot be empty");
      return;
    }
    setLoadingReply(id);
    try {
      const res = await fetchApi(`/api/contacts/${id}/reply`, "PUT", {
        reply: replyMap[id],
      });
      if (!res.ok) throw new Error("Failed to reply");
      alert("Reply saved");
      fetchContacts();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingReply(null);
    }
  }

  async function handleMarkRead(id) {
    try {
      const res = await fetchApi(`/contacts/${id}/read`, "PATCH");
      console.log(" read as read", res);
      if (!res) throw new Error("Failed to mark as read");
      fetchContacts();
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetchApi(`/contacts/${id}`, "DELETE");
      fetchContacts();
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact Messages</h2>
      {contacts.length === 0 && <p>No messages yet.</p>}

      <ul className="space-y-6">
        {contacts.map((contact) => (
          <li
            key={contact._id}
            className={`border p-4 rounded ${
              contact.isRead ? "bg-gray-50" : "bg-yellow-50 border-yellow-400"
            }`}
          >
            {!contact.isRead && (
              <span className="inline-block bg-yellow-400 text-xs text-black font-bold px-2 py-0.5 rounded mb-2">
                🕐 Unread
              </span>
            )}
            {contact.isRead && (
              <span className="inline-block bg-blue-400 text-xs text-black font-bold px-2 py-0.5 rounded mb-2">
                🕐 Read
              </span>
            )}

            <p>
              <span className="font-semibold">Name:</span> {contact.name} (
              {contact.email})
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Phone: {contact.phone} | Purpose: {contact.purpose} | Vehicle:{" "}
              {contact.vehicleModel}
            </p>

            <p className="my-2 whitespace-pre-wrap text-gray-800">
              {contact.context}
            </p>

            <div className="space-y-2 mt-2">
              <label
                htmlFor={`reply-${contact._id}`}
                className="block font-semibold"
              >
                Admin Reply
              </label>
              <textarea
                id={`reply-${contact._id}`}
                rows="3"
                className="w-full border p-2 rounded"
                value={replyMap[contact._id] || ""}
                onChange={(e) => handleReplyChange(contact._id, e.target.value)}
              />
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleReplySubmit(contact._id)}
                  // disabled={loadingReply === contact._id}
                  disabled
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-1 rounded cursor-not-allowed"
                >
                  {loadingReply === contact._id ? "Saving..." : "Save Reply"}
                </button>
                {!contact.isRead && (
                  <button
                    onClick={() => handleMarkRead(contact._id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>

              {contact.reply && contact.repliedAt && (
                <p className="text-sm text-gray-600">
                  Last replied: {new Date(contact.repliedAt).toLocaleString()}
                </p>
              )}
            </div>

            <p className="mt-2 text-xs text-gray-400">
              Received: {new Date(contact.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
