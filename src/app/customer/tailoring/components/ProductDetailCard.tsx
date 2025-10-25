import Image from "next/image";
import Link from "next/link";

// Define an interface for the detailed product data
interface Product {
  title: string;
  price: string;
  image: string;
  description: string;
  fabricType: string;
  careInstructions: string;
  features: string[];
  link: string;
}

// Define the props for the component
interface ProductDetailCardProps {
  product: Product;
  onClose: () => void;
}

// A reusable CheckIcon for the features list
const CheckIcon = () => (
  <svg className="w-4 h-4 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function ProductDetailCard({ product, onClose }: ProductDetailCardProps) {
  // We'll use the product's main image for all thumbnails in this example
  const thumbnails = [product.image, product.image, product.image];

  return (
    // Modal backdrop with blur effect
    <div
      className="fixed inset-0 bg-br bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] flex flex-col font-serif border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gray-200 p-4 rounded-t-lg border-b border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800">Product Details</h2>
        </div>

        {/* Main Content (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Image Column */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {thumbnails.map((thumb, index) => (
                  <div key={index} className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={thumb}
                      alt={`${product.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="15vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Column */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-sm text-gray-600 mt-1">Perfect for formal occasions</p>
              <p className="text-4xl font-semibold text-gray-800 my-4">{product.price.replace("USD", "LKR")}</p>

              <div className="text-sm space-y-4 text-gray-700">
                <p><span className="font-bold text-gray-900">Fabric Type :</span> {product.fabricType}</p>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Description :</h4>
                  <p className="leading-relaxed">{product.description}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Care Instructions :</h4>
                  <p>{product.careInstructions}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Features :</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Buttons */}
        <div className="flex justify-end items-center gap-4 p-4 bg-gray-50 border-t border-gray-200 rounded-b-lg mt-auto">
          <Link
            href="/appointment"
            className="bg-black text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors"
          >
            Book Appointment
          </Link>
          <button
            onClick={onClose}
            className="bg-white text-black border border-gray-400 px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}