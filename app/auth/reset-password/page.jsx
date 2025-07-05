"use client";
import { useState } from "react";

export default function ResetPassword( ) {
  const [resetData, setResetData] = useState({
    email: "",
    loading: false,
    error: "",
  });

  const { password, loading, error } = resetData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      setResetData((prev) => ({ ...prev, error: "Password is required" }));
      return;
    }

    // Add your actual API call logic here
    setResetData((prev) => ({ ...prev, loading: true, error: "" }));

    try {
      // Example API call
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: new URLSearchParams(window.location.search).get("token"),
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      alert("Password changed successfully!");
      // Redirect or handle success
    } catch (err) {
      setResetData((prev) => ({ ...prev, error: err.message }));
    } finally {
      setResetData((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg my-40">
      <h2 className="text-2xl mb-4 text-center font-semibold">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full p-2 border rounded"
          value={resetData.email}
          onChange={(e) => setResetData((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
