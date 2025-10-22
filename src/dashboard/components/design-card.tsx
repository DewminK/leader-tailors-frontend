// DesignCard.tsx
import React from "react";
import Image from "next/image";

interface DesignCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const DesignCard: React.FC<DesignCardProps> = ({ image, title, description, price }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
          <button className="bg-black text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
