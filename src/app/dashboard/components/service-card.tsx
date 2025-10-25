'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface ServiceCardProps {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    linkText?: string;
    linkColor?: string;
    route?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkText, linkColor, route }) => {
    const router = useRouter();

    const handleClick = () => {
        if (route) {
            router.push(route);
        }
    };

    return (
        <div 
            className="max-w-sm bg-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-transaction duration-300 cursor-pointer"
            onClick={handleClick}
        >
            {/* Icon */}
            <div className="mb-4">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {description}
            </p>

            {/* See More Link */}
            <button
                className={`${linkColor} hover:underline text-sm font-medium inline-flex items-center group`}
            >
                {linkText}
                <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ServiceCard;