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
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-8 text-gray-900 text-center">About Us</h1>
            
            {/* Image with overlay text - Slightly Reduced Width, Increased Height */}
            <div className="relative w-full max-w-7xl mx-auto mb-16">
              <div className="bg-gray-300 h-[550px] rounded-lg flex items-center justify-center relative">
                <span className="text-gray-500 text-lg">Image Placeholder</span>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-2">
                    Meet Leader Tailors
                  </h2>
                  <p className="text-lg text-white drop-shadow-md">
                    Crafting elegance for every occasion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left - Text (Left Aligned) */}
              <div className="pr-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-left">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-left">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
              
              {/* Right - Image (Right Aligned) */}
              <div className="pl-8">
                <div className="bg-gray-300 h-96 w-full rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Box - Slightly Left Aligned */}
              <div className="p-10 rounded-[20px] mr-4" style={{ backgroundColor: '#D9D9D9' }}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-800 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur.
                </p>
              </div>
              
              {/* Vision Box - Slightly Right Aligned */}
              <div className="p-10 rounded-[20px] ml-4" style={{ backgroundColor: '#D9D9D9' }}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-800 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Meet Our Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Person 1 */}
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Person 1</h3>
              </div>
              
              {/* Person 2 */}
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Person 2</h3>
              </div>
              
              {/* Person 3 */}
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Person 3</h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
