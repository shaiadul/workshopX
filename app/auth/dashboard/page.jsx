"use client";
import { use, useEffect, useState } from "react";
import ServicesTab from "./ServicesTab";
import BlogsTab from "./BlogsTab";
import ContactsTab from "./ContactsTab";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearUser } from "@/redux/slice/authSlice";
import OfferTab from "./OfferTab";
import ProfileTab from "./ProfileTab";
import UserTab from "./UserTab";

export default function AdminDashboard({}) {
  const [activeTab, setActiveTab] = useState("services");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const router = useRouter();

  useEffect(() => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("token");

    const userX =
      typeof window !== "undefined" && JSON.parse(localStorage.getItem("userInfo"));

    if (!user || !token || !userX) {
      router.push("/auth/adminlogin");
    }
  }, [user, dispatch]);

  const onLogout = () => {
    dispatch(clearUser());
  };

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
          { key: "offer", label: "Offer" },
          { key: "profile", label: "Profile" },
          { key: "user", label: "User" },
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
        {activeTab === "offer" && <OfferTab />}
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "user" && <UserTab />}
      </div>
    </div>
  );
}
