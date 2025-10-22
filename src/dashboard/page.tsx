
import React from 'react';
import Image from 'next/image';
import ServiceCard from './components/service-card';
import DesignCard from './components/design-card';
import FeedbackCard from './components/feedback-card';
import Footer from '@/app/components/footer';
import NavBar from '@/app/components/navbar';


const Dashboard = () => {
    const services = [
        {
            icon: (
                <span className="text-4xl">✂️</span>
            ),
            title: "Custom Tailoring",
            description: "Bespoke Suits And Blazers Crafted To Perfection With Premium Fabric And Expert Craftsmanship.",
            linkText: "See More",
            linkColor: "text-orange-500"
        },
        {
            icon: (
                <span className="text-4xl">🎩</span>
            ),
            title: "Blazer Rentals",
            description: "Premium Blazer Rentals For Weddings, Events, And Special Occasions With Perfect Fitting Guarantee.",
            linkText: "Browse Collections",
            linkColor: "text-orange-500"
        },
        {

            icon: (
                <span className="text-4xl">🚗</span>
            ),
            title: "Wedding Car Hire",
            description: "Luxury Wedding Cars With Professional Decoration Services To Make Your Special Day Unforgettable.",
            linkText: "View Fleet",
            linkColor: "text-orange-500"
        },
        {
            icon: (
                <span className="text-4xl">💐</span>
            ),
            title: "Event Decorations",
            description: "Complete Decoration Services For Weddings And Events With Fresh Or Artificial Floral Arrangements.",
            linkText: "See Gallery",
            linkColor: "text-orange-500"
        }
    ];

    const products = [
        {
            id: 1,
            image: "/dashboard/designs/design1.png",
            title: "Navy Premium Blazer",
            description: "Italian Wool Blend With Silk Lining",
            price: "Rs 899.00"
        },
        {
            id: 2,
            image: "/dashboard/designs/design2.png",
            title: "Charcoal Three-Piece",
            description: "Classic Cut With Modern Styling",
            price: "Rs 1,299.00"
        },
        {
            id: 3,
            image: "/dashboard/designs/design3.png",
            title: "Black Tuxedo",
            description: "Perfect For Weddings And Galas",
            price: "Rs 1,599.00"
        }
    ];

    const testimonials = [
        {
            id: 1,
            avatar: "/dashboard/profile/profile1.jpg",
            name: "Pasindu Ruwanima",
            review: "Exceptional service! My wedding suit was perfect in every detail. The team went above and beyond to ensure the perfect fit.",
            rating: 5
        },
        {
            id: 2,
            avatar: "/dashboard/profile/profile2.jpg",
            name: "Navoda Chathurya",
            review: "The wedding car service was absolutely beautiful. The decoration was stunning and the driver was professional and punctual.",
            rating: 5
        },
        {
            id: 3,
            avatar: "/dashboard/profile/profile3.jpg",
            name: "Manuka Methmitha",
            review: "Best blazer rental experience! High quality garments and excellent customer service. Highly recommend for any formal event.",
            rating: 5
        }
    ];
    return (
        <div className='min-h-screen'>
            <NavBar />
            {/* heroSection */}
            <section className="bg-gray-200 py-16 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Perfect Fit For Every Occasion
                            </h1>

                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                Custom tailoring, premium blazer rentals, and luxury wedding car services - all under one roof. Experience excellence in every stitch and detail.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transform transition-transform hover:scale-105">
                                    Book Appointment
                                </button>

                                <button className="bg-white text-black border-2 border-black px-6 py-3 rounded font-medium hover:bg-gray-50 transition-transform hover:scale-105">
                                    View Categories
                                </button>
                            </div>

                            {/* Yellow Button */}
                            <div className="pt-2">
                                <button className="bg-yellow-500 text-black px-6 py-3 rounded font-medium hover:bg-yellow-600 transition-transform hover:scale-105">
                                    Rent Wedding Car
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/dashboard/heroSection.jpg"
                                alt="Tailoring shop with suits"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-gray-50 py-16 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            Our Premium Service
                        </h2>
                        <p className="text-gray-600 text-base">
                            Excellence in every thread, elegance in every detail
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                            >
                                <ServiceCard icon={service.icon} title={service.title} description={service.description} linkText={service.linkText} linkColor={service.linkColor} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Designs */}
            <section className="bg-gray-200 py-16 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            Featured Designs
                        </h2>
                        <p className="text-gray-600 text-base">
                            Discover our latest collection of premium suits and blazers.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <DesignCard
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback */}
            <section className="bg-gray-50 py-16 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            What Our Client Say
                        </h2>
                        <p className="text-gray-600 text-base">
                            Trusted by thousand for life’s most importnat moments
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <FeedbackCard
                                key={testimonial.id}
                                avatar={testimonial.avatar}
                                name={testimonial.name}
                                review={testimonial.review}
                                rating={testimonial.rating}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>

        </div>
    );
};

export default Dashboard;