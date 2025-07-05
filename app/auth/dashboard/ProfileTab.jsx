"use client";

import { useSelector } from "react-redux";
import { FaUserCircle, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function ProfileTab() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="max-w-full mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Admin Profile</h2>

      {!user ? (
        <div className="text-left text-gray-500">Loading...</div>
      ) : (
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
          <div className="flex flex-col items-start gap-2">
            <FaUserCircle className="text-gray-400 text-6xl mb-2" />
            <h3 className="text-xl font-semibold text-slate-800">{user.username}</h3>
            <p className="text-sm text-gray-500">Role: Admin</p>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-teal-600" />
              <span className="break-all">{user.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-teal-600" />
              <span>
                Joined on:{" "}
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
