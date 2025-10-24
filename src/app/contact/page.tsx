"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Car,
  User,
  Wrench,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-6 py-16">
        {/* Main Contact Section */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get in Touch
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-3 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1 012 3456 789"
                    className="w-full px-4 py-3 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors resize-none text-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Card */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gray-700 rounded-full opacity-30"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Say something to start a live chat!
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">0112 655 083</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">leadertailors@gmail.com</span>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <MapPin size={20} />
                  </div>
                  <div className="text-lg">
                    <p>3A Kurunwamulla road, Katubedda,</p>
                    <p>Moratuwa, Sri Lanka, 10400</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-12">
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Instagram size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Car size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-gray-900 mb-16"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            What We Can Help You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Blazer Fittings */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Blazer Fittings
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our expert tailors provide custom-designed blazers to match your
                style and fit with precision.
              </p>
            </div>

            {/* Car Rentals */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Car Rentals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Convenient car rental services to take your tailoring visits
                effortless.
              </p>
            </div>

            {/* Customer Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customer Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Priority support team ready to assist you with every tailoring
                need.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
