"use client";
import { fetchApi } from "@/utils/FetchApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPassword() {
  const [resetData, setResetData] = useState({
    email: "",
    loading: false,
    error: "",
    massage: "",
  });

  const { email, loading, error } = resetData;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email) {
      setResetData((prev) => ({ ...prev, error: "Password is required" }));
      return;
    }

    setResetData((prev) => ({ ...prev, loading: true, error: "" }));

    try {
      setResetData((prev) => ({ ...prev, loading: true, error: "", massage: "" }));
      const res = await fetchApi("/auth/reset-password", "POST", {
        email: resetData.email,
      });

      const result = await res;

      if (!result) {
        throw new Error(data.message || "Failed to reset password link");
      }

      if (result) {
        setResetData((prev) => ({
          ...prev,
          loading: false,
          massage: result.massage || "Check email for reset password link",
        }));
      }
      // Redirect or handle success
    } catch (err) {
      setResetData((prev) => ({ ...prev, error: err.message }));
    } finally {
      setResetData((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg my-40">
      <h2 className="text-2xl mb-4 text-center font-semibold">
        Reset Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full p-2 border rounded"
          value={resetData.email}
          onChange={(e) =>
            setResetData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
        {resetData.error && <div className="text-red-600 text-sm text-left">{resetData.error}</div>}
        {resetData.massage && <div className="text-teal-600 text-sm text-left">{resetData.massage}</div>}
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
          disabled={resetData.loading}
        >
          {resetData.loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
