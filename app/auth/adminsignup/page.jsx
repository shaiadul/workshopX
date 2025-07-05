"use client";
import { fetchApi } from "@/utils/FetchApi";
import { useState } from "react";

export default function AdminSignup({}) {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
    loading: false,
    error: "",
    massage: "",
  });

  const { username, password, email, massage, loading, error } = loginData;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoginData((prev) => ({
      ...prev,
      loading: true,
      error: "",
      massage: "",
    }));

    const data = {
      username,
      email,
      password,
    };

    try {
      setLoginData((prev) => ({ ...prev, loading: true, error: "" }));
      const res = await fetchApi("/auth/signup", "POST", data);
      const result = await res;

      if (!res.token) throw new Error(result.message || "Signup failed");
      if (res.token) {
        localStorage.setItem("token", res.token);
        // console.log("result", result);
        setLoginData((prev) => ({
          ...prev,
          loading: false,
          massage: result.message || "Check your email for verification",
        }));
      }
    } catch (err) {
      setLoginData((prev) => ({ ...prev, loading: false, error: err.message }));
    } finally {
      setLoginData((prev) => ({ ...prev, loading: false }));
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg my-40">
      <h2 className="text-2xl mb-4 text-center font-semibold">
        Admin Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={loginData.username}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, username: e.target.value }))
          }
          required
          autoFocus
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={loginData.email}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={loginData.password}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
          required
        />
        {loginData.error && (
          <div className="text-red-600 text-sm text-left">
            {loginData.error}
          </div>
        )}
        {loginData.massage && (
          <div className="text-green-600 text-sm text-left">
            {loginData.massage}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
          disabled={loginData.loading}
        >
          {loginData.loading ? "Signing up..." : "Sign up"}
        </button>
      </form>
      <div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/auth/adminlogin" className="text-teal-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
