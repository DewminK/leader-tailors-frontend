'use client';
// DesignCard.tsx
import React, { useState } from "react";
import Image from "next/image";

interface DesignCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  id?: number;
}

const DesignCard: React.FC<DesignCardProps> = ({ image, title, description, price, id }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    // Parse price to number (remove "Rs " and convert to number)
    const numericPrice = parseFloat(price.replace(/Rs |,/g, ''));

    // Create cart item
    const cartItem = {
      id: `design-${id || Date.now()}`,
      name: title,
      size: description,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      price: numericPrice,
      totalAmount: numericPrice,
      image: image,
      type: "custom-design",
      details: {
        description: description,
      }
    };

    // Add to cart
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    existingCart.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // Dispatch event to update cart count
    window.dispatchEvent(new Event("cartUpdated"));

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative">
      {/* Success Message */}
      {showSuccess && (
        <div className="absolute inset-0 bg-black/80 z-10 flex items-center justify-center rounded-lg">
          <div className="text-center text-white">
            <div className="text-3xl mb-2">✓</div>
            <div className="font-semibold">Added to Cart!</div>
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 w-full bg-gray-100">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-orange-500 font-semibold text-lg">{price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-black text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
