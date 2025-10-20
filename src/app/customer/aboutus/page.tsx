import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-16 border-b">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">About Us</h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Welcome to Leader Tailors, where tradition meets innovation. With decades of experience 
              in bespoke tailoring, we are committed to delivering excellence in every stitch.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Leader Tailors was founded in 1990 with a simple yet powerful vision: to provide 
                  exceptional tailoring services that honor the timeless art of craftsmanship while 
                  embracing modern design aesthetics. What began as a modest family-owned atelier 
                  has evolved into one of the region's most trusted names in custom tailoring.
                </p>
                <p>
                  Over three decades, we have had the privilege of serving thousands of discerning 
                  clients, each receiving personalized attention and garments meticulously crafted 
                  to reflect their unique style and personality. Our unwavering commitment to quality, 
                  precision, and customer satisfaction has been the cornerstone of our enduring success.
                </p>
                <p>
                  Today, we continue to uphold the rich traditions of fine tailoring while integrating 
                  innovative techniques and contemporary trends. Every piece we create is a testament 
                  to our dedication to excellence and our passion for the art of tailoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="border-l-4 border-gray-800 pl-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To provide exceptional tailoring services that exceed our customers' expectations 
                  by delivering perfectly fitted, high-quality garments with meticulous attention 
                  to detail and personalized service.
                </p>
              </div>
              <div className="border-l-4 border-gray-800 pl-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the leading name in custom tailoring, recognized for our commitment to 
                  excellence, innovation, and customer satisfaction while preserving the art of 
                  traditional craftsmanship for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What We Stand For</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-700 leading-relaxed">
                  We never compromise on the quality of our materials and workmanship. Every garment 
                  is crafted using premium fabrics and meticulous attention to detail.
                </p>
              </div>
              <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Craftsmanship</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our master tailors bring decades of experience, combining traditional techniques 
                  with modern innovations to create perfectly fitted garments.
                </p>
              </div>
              <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in building lasting relationships with our clients through personalized 
                  service, honest communication, and exceptional customer care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Leader Tailors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Craftsmen</h4>
                <p className="text-gray-600 text-sm">
                  Highly skilled tailors with decades of experience
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Premium Materials</h4>
                <p className="text-gray-600 text-sm">
                  Only the finest fabrics sourced for our creations
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Perfect Fit</h4>
                <p className="text-gray-600 text-sm">
                  Custom fitted to your exact measurements
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Timely Delivery</h4>
                <p className="text-gray-600 text-sm">
                  Prompt service without compromising quality
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
