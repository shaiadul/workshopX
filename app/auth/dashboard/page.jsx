"use client";
import { useState } from "react";
import ServicesTab from "./ServicesTab";
import BlogsTab from "./BlogsTab";
import ContactsTab from "./ContactsTab";

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="container mx-auto bg-white px-4 my-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <nav className="flex space-x-4 mb-6 border-b">
        {[
          { key: "services", label: "Services" },
          { key: "blogs", label: "Blogs" },
          { key: "contacts", label: "Contacts" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`py-2 px-4 border-b-2 ${
              activeTab === key
                ? "border-teal-600 font-semibold"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <div>
        {activeTab === "services" && <ServicesTab />}
        {activeTab === "blogs" && <BlogsTab />}
        {activeTab === "contacts" && <ContactsTab />}
      </div>
    </div>
  );
}
