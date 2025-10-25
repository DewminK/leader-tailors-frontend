"use client";
import { useState, useEffect } from "react";

interface OrderDetailsData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export default function OrderDetail() {
  const [formData, setFormData] = useState<OrderDetailsData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("customerDetails");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleInputChange = (field: keyof OrderDetailsData, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    localStorage.setItem("customerDetails", JSON.stringify(updatedData));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 border-b pb-3 border-gray-400">Details</h2>
      
      <div className="space-y-6">
        {/* Name Row */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <div className="border-b border-gray-300 pb-2">
              <input 
                type="text"
                aria-label="fname" 
                className="w-full outline-none bg-transparent"
                placeholder=""
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <div className="border-b border-gray-300 pb-2">
              <input 
                type="text" 
                aria-label="lname"
                className="w-full outline-none bg-transparent"
                placeholder=""
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="border-b border-gray-300 pb-2">
              <input 
                type="email" 
                aria-label="email"
                className="w-full outline-none bg-transparent"
                placeholder=""
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="border-b border-gray-300 pb-2">
              <input 
                type="tel" 
                aria-label="tel"
                className="w-full outline-none bg-transparent"
                placeholder=""
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <div className="border-b border-gray-300 pb-2">
            <input 
              type="text" 
              aria-label="address"
              className="w-full outline-none bg-transparent"
              placeholder=""
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}