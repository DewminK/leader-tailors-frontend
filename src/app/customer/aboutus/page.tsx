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
              <div className="relative h-[550px] rounded-lg overflow-hidden">
                <Image 
                  src="/aboutus.png" 
                  alt="About Us Hero" 
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 className="text-4xl font-bold text-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-2">
                    Meet Leader Tailors
                  </h2>
                  <p className="text-lg text-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
                    Founded in 2009 by Mr. B. A. D. Sujeewa, Leader Tailors began as a small home-based tailoring service in Katubedda.
                     With a passion for quality, detail, and friendly service, the business quickly built a 
                     strong customer base. In 2022, it expanded into a full shop offering custom tailoring, blazer rentals,
                      wedding car rentals, and event decorations. Today, Leader Tailors proudly serves over 1,000 orders per month
                       with trusted craftsmanship and care.
                  </p>
                </div>
              </div>
              
              {/* Right - Image (Right Aligned) */}
              <div className="pl-8">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/ourstory.webp" 
                    alt="Our Story" 
                    fill
                    className="object-cover rounded-lg"
                  />
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
                  To deliver exceptional craftsmanship and friendly service through personalized
                   tailoring and event solutions that reflect our passion for detail and customer happiness.
                </p>
              </div>
              
              {/* Vision Box - Slightly Right Aligned */}
              <div className="p-10 rounded-[20px] ml-4" style={{ backgroundColor: '#D9D9D9' }}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-800 leading-relaxed">
                 To inspire confidence and style by becoming a leading brand in 
                 personalized tailoring and event services across the nation.
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
                <div className="w-48 h-48 rounded-full mx-auto mb-6 relative overflow-hidden">
                  <Image 
                    src="/person.png" 
                    alt="B.A.D. Sujeewa" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">B.A.D. Sujeewa</h3>
                <p className="text-sm text-gray-600 mb-3">Master Tailor and Founder</p>
                <div className="flex flex-col items-center space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+94 77 707 2478</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>sujeewaleadertailors2@gmail.com</span>
                  </div>
                </div>
              </div>
              
              {/* Person 2 */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 relative overflow-hidden">
                  <Image 
                    src="/person.png" 
                    alt="Mrs. Sujeewa" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mrs. Sujeewa</h3>
                <p className="text-sm text-gray-600 mb-3">Supporting Staff</p>
                <div className="flex flex-col items-center space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+94 11 265 5083</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>leadertailors@gmail.com</span>
                  </div>
                </div>
              </div>
              
              {/* Person 3 */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 relative overflow-hidden">
                  <Image 
                    src="/person.png" 
                    alt="Supporting Staff" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. Saman</h3>
                <p className="text-sm text-gray-600 mb-3">Supporting Staff</p>
                <div className="flex flex-col items-center space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+94 11 265 5083</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>leadertailors@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
