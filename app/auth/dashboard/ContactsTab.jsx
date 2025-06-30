"use client";
import { useState, useEffect } from "react";

export default function ContactsTab() {
  const [contacts, setContacts] = useState([]);
  const [replyMap, setReplyMap] = useState({}); // { contactId: replyText }
  const [loadingReply, setLoadingReply] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const res = await fetch("/api/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setContacts(data);
      // Initialize reply map with existing replies
      const initialReplies = {};
      data.forEach((c) => {
        if (c.reply) initialReplies[c._id] = c.reply;
      });
      setReplyMap(initialReplies);
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
      const res = await fetch(`/api/contacts/${id}/reply`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reply: replyMap[id] }),
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

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact Messages</h2>
      {contacts.length === 0 && <p>No messages yet.</p>}

      <ul className="space-y-6">
        {contacts.map(({ _id, name, email, message, reply, repliedAt, createdAt }) => (
          <li key={_id} className="border p-4 rounded bg-gray-50">
            <p>
              <span className="font-semibold">From:</span> {name} ({email})
            </p>
            <p className="my-2 whitespace-pre-wrap">{message}</p>

            <div>
              <label className="block font-semibold mb-1" htmlFor={`reply-${_id}`}>
                Admin Reply
              </label>
              <textarea
                id={`reply-${_id}`}
                rows="3"
                className="w-full border p-2 rounded mb-2"
                value={replyMap[_id] || ""}
                onChange={(e) => handleReplyChange(_id, e.target.value)}
              />
              <button
                onClick={() => handleReplySubmit(_id)}
                disabled={loadingReply === _id}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-1 rounded"
              >
                {loadingReply === _id ? "Saving..." : "Save Reply"}
              </button>

              {reply && repliedAt && (
                <p className="mt-2 text-sm text-gray-600">
                  Last replied: {new Date(repliedAt).toLocaleString()}
                </p>
              )}
            </div>

            <p className="mt-2 text-xs text-gray-400">
              Received: {new Date(createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
