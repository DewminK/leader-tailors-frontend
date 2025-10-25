"use client";

import type React from "react";
import { useState, useEffect } from "react";

const SERVICE_TYPES = [
  { value: "tailoring", label: "Tailoring" },
  { value: "rent-car", label: "Rent Car" },
  { value: "rent-blazers", label: "Rent Blazers" },
  { value: "decorations", label: "Decorations" },
];

const TAILORING_TYPES = [
  { value: "blazers", label: "Blazers" },
  { value: "uniforms", label: "School Uniforms" },
  { value: "custom", label: "Custom Tailoring" },
  { value: "shirts", label: "Shirts" },
  { value: "trousers", label: "Trousers" },
  { value: "wedding-suits", label: "Wedding Suits" },
  { value: "other", label: "Other" },
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: "",
    tailoringType: "",
    tailoringDetails: "",
    date: "",
    time: "",
  });

  // Track if the user has confirmed
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Show success after booking
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Load pre-selected tailoring type from localStorage on mount
  useEffect(() => {
    const selectedTailoring = localStorage.getItem("selectedTailoringType");
    const tailoringDetails = localStorage.getItem("selectedTailoringDetails");
    
    if (selectedTailoring) {
      setFormData((prev) => ({
        ...prev,
        serviceType: "tailoring",
        tailoringType: selectedTailoring,
        tailoringDetails: tailoringDetails || "",
      }));
      
      // Clear localStorage after loading
      localStorage.removeItem("selectedTailoringType");
      localStorage.removeItem("selectedTailoringDetails");
    }
  }, []);

  // Lightweight "all required fields present" check
  const isFormComplete =
    formData.fullName &&
    formData.phoneNumber &&
    formData.email &&
    formData.serviceType &&
    (formData.serviceType !== "tailoring" || formData.tailoringType) &&
    formData.date &&
    formData.time;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      tailoringType: "",
      tailoringDetails: "",
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
              Fill in your information and we&apos;ll get back to you to confirm your
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

              {/* Tailoring Type - Only shown when Tailoring is selected */}
              {formData.serviceType === "tailoring" && (
                <>
                  <div>
                    <label
                      htmlFor="tailoringType"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Tailoring Type
                    </label>
                    <select
                      id="tailoringType"
                      name="tailoringType"
                      value={formData.tailoringType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-black bg-white
                      ${!formData.tailoringType ? "text-gray-400" : "text-gray-900"}`}
                    >
                      <option value="" disabled>
                        Select tailoring type
                      </option>
                      {TAILORING_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tailoring Details/Specific Item */}
                  <div>
                    <label
                      htmlFor="tailoringDetails"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Specific Item/Details
                      <span className="text-gray-500 text-sm ml-1">(Optional)</span>
                    </label>
                    <textarea
                      id="tailoringDetails"
                      name="tailoringDetails"
                      placeholder="E.g., Single Breasted Slim Fit Blazer, Navy Blue Uniform, etc."
                      value={formData.tailoringDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                </>
              )}

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

              {/* Tailoring Type Summary - Only shown for tailoring */}
              {formData.serviceType === "tailoring" && formData.tailoringType && (
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">Tailoring Type</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      {TAILORING_TYPES.find((t) => t.value === formData.tailoringType)?.label || "—"}
                    </div>
                    {formData.tailoringDetails && (
                      <div className="text-xs text-gray-500 mt-1">
                        {formData.tailoringDetails}
                      </div>
                    )}
                  </div>
                </div>
              )}

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
