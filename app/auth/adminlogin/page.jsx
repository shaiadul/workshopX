"use client";
import Link from "next/link";
import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    loading: false,
    error: "",
  })



  const { email, password, loading, error } = loginData;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoginData((prev) => ({ ...prev, loading: true, error: "" }));

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // localStorage.setItem("token", data.token);
      onLogin();
    } catch (err) {
      setLoginData((prev) => ({ ...prev, error: err.message }));
    } finally {
      setLoginData((prev) => ({ ...prev, loading: false }));
    }
  }


  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg my-40">
      <h2 className="text-2xl mb-4 text-center font-semibold">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="email"
          className="w-full p-2 border rounded"
          value={loginData.email}
          onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
          required
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={loginData.password}
          onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
          required
        />
        {loginData.error && (
          <div className="text-red-600 text-sm text-left">{loginData.error}</div>
        )}
        <Link
          href="/auth/reset-password"
          className="text-teal-600 hover:underline text-left block"
        >
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
          disabled={loginData.loading}
        >
          {loginData.loading ? "Logging in..." : "Login"}
        </button>

        <div>
          <p className="text-center">
            Don't have an account?{" "}
            <a href="/auth/adminsignup" className="text-teal-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
