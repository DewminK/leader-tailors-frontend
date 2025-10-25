'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartCount(items.length);
    };

    updateCount();
    window.addEventListener("cartUpdated", updateCount);
    return () => window.removeEventListener("cartUpdated", updateCount);
  }, []);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[150px] h-[50px]">
              <Image
                src="/logo.png"
                alt="Leader Tailors Logo"
                fill
                sizes="200px"
                className="object-contain"
                priority
                loading="eager"
              />
            </div>
          </Link>

          {/* Navigation - Slightly Right Aligned */}
          <nav
            className="hidden md:flex items-center space-x-12 ml-auto mr-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600 font-semibold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-gray-600 font-semibold transition-colors"
            >
              Our Services
            </Link>
            <div className="relative group">
              <button className="text-gray-800 hover:text-gray-600 font-semibold transition-colors flex items-center focus:outline-none">
                Our Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-20">
                <Link href="/services" className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium rounded-t-xl transition-colors">All Services</Link>
                <Link href="/customer/weddingCarRental" className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium transition-colors">Wedding Car Rental</Link>
                <Link href="/customer/tailoring" className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium transition-colors">Tailoring and sewing</Link>
                {/* Add more service links here as needed */}
              </div>
            </div>
            <Link href="/customer/aboutus" className="text-gray-800 hover:text-gray-600 font-semibold transition-colors border-b-2 border-gray-800 pb-1">
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-gray-600 font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Cart and Profile Icons - Slightly Left Aligned */}
          <div className="flex items-center space-x-5">
            <Link href="/customer/cart">
              <button className="relative text-black hover:text-white hover:bg-black rounded-full p-2 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Profile Icon */}
            <button className="text-black hover:text-white hover:bg-black rounded-full p-2 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}