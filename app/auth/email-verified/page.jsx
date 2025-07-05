"use client";

import Link from "next/link";

export default function EmailVerifiedPage() {
  return (
    <main className="max-w-2xl mx-auto py-48 px-4 text-center">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">
        Email Verified Successfully 🎉
      </h1>
      <p className="text-gray-700 mb-6">
        Your email has been successfully verified. You can now log in to your
        admin dashboard.
      </p>

      <Link
        href="/auth/adminlogin"
        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded transition duration-700"
      >
        Login as Admin
      </Link>
    </main>
  );
}
