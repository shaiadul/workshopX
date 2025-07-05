"use client";
import { fetchApi } from "@/utils/FetchApi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChangePassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [resetData, setResetData] = useState({
    password: "",
    loading: false,
    error: "",
    message: "",
  });

  const { password, loading, error, message } = resetData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      setResetData((prev) => ({ ...prev, error: "Password is required" }));
      return;
    }

    if (!token) {
      setResetData((prev) => ({ ...prev, error: "Token missing" }));
      return;
    }

    try {
      setResetData((prev) => ({
        ...prev,
        loading: true,
        error: "",
        message: "",
      }));

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResetData((prev) => ({
        ...prev,
        loading: false,
        message: res.message || "Password changed successfully",
      }));

      router.push("/auth/adminlogin");
    } catch (err) {
      setResetData((prev) => ({
        ...prev,
        loading: false,
        error: err.response?.message || err.message || "Something went wrong",
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg my-40">
      <h2 className="text-2xl mb-4 text-center font-semibold">
        Change Old Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Enter New Password"
          className="w-full p-2 border rounded"
          value={resetData.password}
          onChange={(e) =>
            setResetData((prev) => ({ ...prev, password: e.target.value }))
          }
          required
        />
        {resetData.error && (
          <div className="text-red-600 text-sm text-center">
            {resetData.error}
          </div>
        )}
        {resetData.massage && (
          <div className="text-teal-600 text-sm text-center">
            {resetData.massage}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
          disabled={resetData.loading}
        >
          {resetData.loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
