'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phoneNumber: string;
  } | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCount = () => {
      const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartCount(items.length);
    };

    updateCount();
    window.addEventListener("cartUpdated", updateCount);
    return () => window.removeEventListener("cartUpdated", updateCount);
  }, []);

  useEffect(() => {
    // Load current user data
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    
    // Listen for login events to update the header
    const handleLoginUpdate = () => {
      const updatedUser = sessionStorage.getItem('currentUser');
      if (updatedUser) {
        setCurrentUser(JSON.parse(updatedUser));
      } else {
        setCurrentUser(null);
      }
    };

    window.addEventListener('userLoggedIn', handleLoginUpdate);
    return () => window.removeEventListener('userLoggedIn', handleLoginUpdate);
  }, []);

  useEffect(() => {
    // Close profile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    setCurrentUser(null);
    setShowProfileMenu(false);
    router.push('/');
  };

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Check if any service page is active
  const isServiceActive = () => {
    return pathname.startsWith("/customer/tailoring") || 
           pathname.startsWith("/customer/weddingCarRental") || 
           pathname.startsWith("/customer/blazerRental") ||
           pathname.includes("premium-services");
  };

  return (
    <header className="bg-white shadow-sm">
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
              className={`text-gray-800 hover:text-gray-600 font-semibold transition-colors relative ${
                isActive("/") ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-black" : ""
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className={`text-gray-800 hover:text-gray-600 font-semibold transition-colors flex items-center focus:outline-none relative ${
                isServiceActive() ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-black" : ""
              }`}>
                Our Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-20">
                <Link href="/#premium-services" className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium rounded-t-xl transition-colors">
                  All Services
                </Link>
                <Link href="/customer/tailoring" className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium transition-colors">
                  Custom Tailoring
                </Link>
                <Link href="/customer/weddingCarRental" className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium transition-colors">
                  Wedding Car Rental
                </Link>
                <Link href="/customer/blazerRental" className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium rounded-b-xl transition-colors">
                  Blazer Rental
                </Link>
              </div>
            </div>
            <Link 
              href="/customer/aboutus" 
              className={`text-gray-800 hover:text-gray-600 font-semibold transition-colors relative ${
                isActive("/customer/aboutus") ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-black" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`text-gray-800 hover:text-gray-600 font-semibold transition-colors relative ${
                isActive("/contact") ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-black" : ""
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Cart and Right Side Actions */}
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

            {/* Show Login button if no user is logged in, otherwise show Profile Icon */}
            {!currentUser ? (
              <Link href="/auth">
                <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Log In
                </button>
              </Link>
            ) : (
              <div className="relative" ref={profileRef}>
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="text-black hover:text-white hover:bg-black rounded-full p-2 transition-all"
                >
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

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
                          {currentUser.firstName[0]}{currentUser.lastName[0]}
                        </div>
                        <div className="ml-3">
                          <div className="font-semibold text-gray-900">
                            {currentUser.firstName} {currentUser.lastName}
                          </div>
                          <div className="text-sm text-gray-500">{currentUser.email}</div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Gender:</span>
                          <span className="font-medium text-gray-900 capitalize">{currentUser.gender}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium text-gray-900">{currentUser.phoneNumber}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleLogout}
                        className="w-full mt-4 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}