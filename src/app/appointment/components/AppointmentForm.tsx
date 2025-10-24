"use client";

import type React from "react";
import { useState } from "react";

const SERVICE_TYPES = [
  { value: "tailoring", label: "Tailoring" },
  { value: "rent-car", label: "Rent Car" },
  { value: "rent-blazers", label: "Rent Blazers" },
  { value: "decorations", label: "Decorations" },
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: "",
    date: "",
    time: "",
  });

  // Track if the user has confirmed
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Show success after booking
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Lightweight "all required fields present" check
  const isFormComplete =
    formData.fullName &&
    formData.phoneNumber &&
    formData.email &&
    formData.serviceType &&
    formData.date &&
    formData.time;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Any change invalidates previous confirmation and hides success message
    setIsConfirmed(false);
    setBookingSuccess(false);
  };

  const handleConfirm = () => {
    if (!isFormComplete) {
      alert("Please fill in all fields before confirming.");
      return;
    }
    setIsConfirmed(true);
    console.log("Appointment confirmed:", formData);
  };

  const handleBookAppointment = () => {
    if (!isConfirmed) return;
    console.log("Booking appointment:", formData);
    setBookingSuccess(true);

    //  auto-hide success after a few seconds
    setTimeout(() => setBookingSuccess(false), 4000);

    // reset the form after booking
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      serviceType: "",
      date: "",
      time: "",
    });
    setIsConfirmed(false);
  };

  const getServiceLabel = () => {
    return (
      SERVICE_TYPES.find((s) => s.value === formData.serviceType)?.label ||
      "Select Service"
    );
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Appointment Details Form */}
        <div className="lg:col-span-2">
          <div className="border border-gray-300 rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Appointment Details
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your information and we'll get back to you to confirm your
              appointment
            </p>

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+94 0000000000"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Service Type
                </label>

                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-black bg-white
                  ${!formData.serviceType ? "text-gray-400" : "text-gray-900"}`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_TYPES.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-black
                    ${!formData.date ? "text-gray-400" : "text-gray-900"}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Preferred Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-black
                    ${!formData.time ? "text-gray-500" : "text-gray-900"}`}
                  />
                </div>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                className="w-full bg-black text-white hover:bg-gray-900 font-semibold py-3 rounded-lg mt-6 transition-colors"
              >
                Confirm
              </button>

              {/* Confirm status helper */}
              {isConfirmed ? (
                <p className="text-green-600 text-sm mt-2">
                  Details confirmed ✓
                </p>
              ) : (
                <p className="text-gray-500 text-sm mt-2">
                  Please confirm your details to enable booking.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Appointment Summary */}
        <div className="lg:col-span-1">
          <div className="border border-gray-300 rounded-lg p-6 bg-white sticky top-20">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Appointment Summary
            </h3>

            <div className="space-y-4 mb-6">
              {/* Service Type Summary */}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Service Type</span>
                <span className="font-semibold text-gray-900">
                  {getServiceLabel()}
                </span>
              </div>

              {/* Date Summary */}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">
                  {formatDate(formData.date)}
                </span>
              </div>

              {/* Time Summary */}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Time</span>
                <span className="font-semibold text-gray-900">
                  {formData.time || "—"}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">
                    Total Cost
                  </span>
                  <span className="font-bold text-gray-900">Free</span>
                </div>
              </div>
            </div>

            {/* Book Appointment Button */}
            <button
              onClick={handleBookAppointment}
              disabled={!isConfirmed}
              aria-disabled={!isConfirmed}
              className={`w-full font-semibold py-3 rounded-lg mb-4 transition-colors
                ${
                  isConfirmed
                    ? "bg-black text-white hover:bg-gray-900 cursor-pointer"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              title={isConfirmed ? "Book Appointment" : "Confirm details first"}
            >
              Book Appointment
            </button>

            {/* Success Message */}
            {bookingSuccess && (
              <div className="p-4 mb-6 text-green-800 bg-green-100 border border-green-300 rounded-lg">
                ✅ Appointment booked successfully!
              </div>
            )}

            {/* Booking Policy */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex gap-2">
                <span className="text-lg">ℹ️</span>
                <div>
                  <p className="text-xs font-semibold text-gray-900 mb-1">
                    Booking Policy
                  </p>
                  <p className="text-xs text-gray-600">
                    Free cancellation up to 24 hours before your appointment.
                    Late cancellations may incur charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
