"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get current path
  return (
    <nav className="bg-blue-700 p-8 shadow-md">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-gray-200 text-xl font-bold">
          VeryGood Marketing
        </Link>
        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            href="/company"
            className={`text-white text-lg font-semibold px-3 py-2 rounded-lg bg-blue-700 hover:bg-blue-900 border-transparent transition-all duration-300 ease-in-out ${
              pathname.startsWith("/company")
                ? "bg-blue-900 text-gray-200"
                : "hover:text-gray-200"
            }`}
          >
            Company
          </Link>
          <Link
            href="/blog"
            className={`text-white text-lg font-semibold px-3 py-2 rounded-lg bg-blue-700 hover:bg-blue-900 border-transparent transition-all duration-300 ease-in-out ${
              pathname === "/blog"
                ? "bg-blue-900 text-gray-200"
                : "hover:text-gray-200"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-white text-lg font-semibold px-3 py-2 rounded-lg bg-blue-700 hover:bg-blue-900 border-transparent transition-all duration-300 ease-in-out ${
              pathname === "/contact"
                ? "bg-blue-900 text-gray-200"
                : "hover:text-gray-200"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
