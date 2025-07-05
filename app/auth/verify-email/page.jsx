"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchApi } from "@/utils/FetchApi"; 

export default function VerifyEmail() {
  const [status, setStatus] = useState({ loading: true, message: "" });
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const router = useRouter();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetchApi(`/auth/verify-email?token=${token}`, "GET");
        const result = res.data;
        setStatus({ loading: false, message: result.message || "Email verified successfully!" });
        router.push("/auth/adminlogin");
      } catch (err) {
        const message = err.response?.data?.message || "Verification failed!";
        setStatus({ loading: false, message });
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setStatus({ loading: false, message: "Invalid or missing token!" });
    }
  }, [token]);

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 text-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Verify Email</h1>
      {status.loading ? (
        <p className="text-gray-500">Verifying...</p>
      ) : (
        <p className="text-lg font-medium text-green-700">{status.message}</p>
      )}
    </main>
  );
}
