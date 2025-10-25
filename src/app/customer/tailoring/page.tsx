'use client';

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "./components/service-card";
import MeasurementGuide from "./components/MeasurementGuide";
import ProductDetailCard from "./components/ProductDetailCard";
import Image from "next/image";

// (Your Service interface remains the same)
interface Service {
  title: string;
  price: string;
  image: string;
  link: string;
  fabricType: string;
  description: string;
  careInstructions: string;
  features: string[];
}

export default function Home() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState('blazers');

  // --- MOCK DATA FOR EACH SECTION ---

  const blazersData: Service[] = [
    {
      title: "Single Breasted Slim Fit Blazer",
      price: "LKR 8,500",
      image: "/tailoring/mens-blazer-green.jpeg",
      link: "/customer/blazerRental",
      fabricType: "Cotton",
      description: "A classic green blazer tailored from premium fabric, offering comfort and elegance.",
      careInstructions: "Dry clean only.",
      features: ["Custom tailored", "Premium fabric", "Expert craftsmanship"]
    },
    {
      title: "Classic Brown Blazer",
      price: "LKR 8,500",
      image: "/tailoring/mens-blazer-brown.jpeg",
      link: "/customer/blazerRental",
      fabricType: "Wool Blend",
      description: "A versatile brown blazer for any occasion, made from a high-quality wool blend.",
      careInstructions: "Dry clean only. Iron on low heat.",
      features: ["Custom tailored", "Breathable fabric", "Modern fit"]
    },
     {
      title: "Elegant Navy Blazer",
      price: "LKR 9,000",
      image: "/tailoring/mens-blazer-navy.jpeg",
      link: "/customer/blazerRental",
      fabricType: "Linen",
      description: "A sophisticated navy blazer, perfect for formal events and business meetings.",
      careInstructions: "Dry clean recommended.",
      features: ["Lightweight linen", "Sharp tailoring", "Versatile design"]
    },
     {
      title: "Formal Black Blazer",
      price: "LKR 9,500",
      image: "/tailoring/mens-blazer-black.jpeg",
      link: "/customer/blazerRental",
      fabricType: "Velvet",
      description: "A luxurious black velvet blazer for the most formal of occasions.",
      careInstructions: "Specialist dry clean only.",
      features: ["Premium velvet", "Satin lapels", "Impeccable fit"]
    },
  ];

  const uniformsData: Service[] = [
    {
      title: "Boys' School Shirt & Trousers",
      price: "LKR 7000",
      image: "/tailoring/School-boys-Uniform.jpeg", // Replace with actual image
      link: "#",
      fabricType: "Durable Poly-Cotton",
      description: "Comfortable and durable uniform set designed for daily school wear.",
      careInstructions: "Machine washable.",
      features: ["Reinforced seams", "Stain-resistant fabric", "Easy iron"]
    },
    {
      title: "Girls' School Uniform",
      price: "LKR 3,000",
      image: "/tailoring/uniform-girl.jpg", // Replace with actual image
      link: "#",
      fabricType: "Breathable Cotton Blend",
      description: "A smart and comfortable uniform set for girls, available in various sizes.",
      careInstructions: "Machine washable.",
      features: ["Pleated skirt", "Comfortable fit", "High-quality material"]
    },
  ];
  
  const customData: Service[] = [
    {
        title: "Bespoke Wedding Suit",
        price: "Inquire for price",
        image: "/tailoring/Wedding suits for groom that speak confidence.jpeg", // Replace with actual image
        link: "#",
        fabricType: "Client's Choice (Silk, Wool, etc.)",
        description: "A completely custom-made suit for your special day, tailored to your exact specifications.",
        careInstructions: "Varies by fabric.",
        features: ["Personal consultation", "Unlimited fabric options", "Perfect fit guarantee"]
    }
  ];

  const otherData: Service[] = [
    {
        title: "Professional Alterations",
        price: "Starts at LKR 500",
        image: "/tailoring/shirt.jpeg", // Replace with actual image
        link: "#",
        fabricType: "N/A",
        description: "Expert alteration services for all types of garments to ensure the perfect fit.",
        careInstructions: "N/A",
        features: ["Hemming", "Tapering", "Resizing", "Repairs"]
    }
  ];

  const handleProductClick = (product: Service) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Banner & Measurement Guide Button */}
        <div className="relative h-64 w-320 md:h-110 bg-gray-300 overflow-hidden mx-auto ">
          <Image src="/tailoring/tailoring-sewing-tools-fabric.jpeg" alt="Tailoring and Sewing" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"/>
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pt-40">
            <div className="bg-[#D9D9D9] bg-opacity-70 py-4 px-8 ">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 px-98.25 ">Tailoring & Sewing</h1>
              <p className="text-center text-gray-700 text-sm md:text-base mt-4 ">
                        Custom-made clothing crafted with precision and care
                    </p>
            </div>
          </div>
        </div>

        {/* <p className="text-left text-gray-700 text-sm md:text-base mt-4 pl-29">
                        Custom-made clothing crafted with precision and care
                    </p> */}
        
        <div className="py-8  flex justify-center">
          <button onClick={() => setIsGuideOpen(true)} className="bg-black text-white  py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full md:w-320">
            Measurement Guide
          </button>
        </div>

        {/* Service Categories and Content */}
        <div id="services-section" className="px-4 pb-10 bg-gray-50 ">
          <div className="max-w-7xl mx-auto">
            {/* --- MODIFIED: Navigation Tabs --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
              <a href="#services-section" onClick={() => setActiveTab('blazers')} className={`py-3 rounded-lg font-medium transition-colors text-sm ${activeTab === 'blazers' ? 'bg-black text-white' : 'bg-white text-black border border-gray-300 hover:bg-gray-100'}`}>
                Men's Blazers
              </a>
              <a href="#services-section" onClick={() => setActiveTab('uniforms')} className={`py-3 rounded-lg font-medium transition-colors text-sm ${activeTab === 'uniforms' ? 'bg-black text-white' : 'bg-white text-black border border-gray-300 hover:bg-gray-100'}`}>
                School Uniforms
              </a>
              <a href="#services-section" onClick={() => setActiveTab('customise')} className={`py-3 rounded-lg font-medium transition-colors text-sm ${activeTab === 'customise' ? 'bg-black text-white' : 'bg-white text-black border border-gray-300 hover:bg-gray-100'}`}>
                Customise
              </a>
              <a href="#services-section" onClick={() => setActiveTab('other')} className={`py-3 rounded-lg font-medium transition-colors text-sm ${activeTab === 'other' ? 'bg-black text-white' : 'bg-white text-black border border-gray-300 hover:bg-gray-100'}`}>
                Men's Casual Outfits
              </a>
            </div>

            {/* --- MODIFIED: Conditional Rendering of Content --- */}
            <div>
              {activeTab === 'blazers' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blazersData.map((service, index) => (
                    <ServiceCard key={index} {...service} onCardClick={() => handleProductClick(service)} />
                  ))}
                </div>
              )}

              {activeTab === 'uniforms' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {uniformsData.map((service, index) => (
                    <ServiceCard key={index} {...service} onCardClick={() => handleProductClick(service)} />
                  ))}
                </div>
              )}

              {activeTab === 'customise' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {customData.map((service, index) => (
                    <ServiceCard key={index} {...service} onCardClick={() => handleProductClick(service)} />
                  ))}
                </div>
              )}

              {activeTab === 'other' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {otherData.map((service, index) => (
                    <ServiceCard key={index} {...service} onCardClick={() => handleProductClick(service)} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Modals */}
      {isGuideOpen && <MeasurementGuide onClose={() => setIsGuideOpen(false)} />}
      {selectedProduct && <ProductDetailCard product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}