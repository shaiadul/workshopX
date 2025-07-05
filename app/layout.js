import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/gloabal/Navbar";
import Footer from "@/components/gloabal/Footer";
import AnimatedLayout from "@/components/gloabal/AnimatedLayout";
import { Providers } from "@/redux/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Workshop BD",
  description: "This is a Workshop BD, created by worked with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedLayout>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </AnimatedLayout>
      </body>
    </html>
  );
}
