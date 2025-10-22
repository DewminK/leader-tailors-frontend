import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

const FeedbackCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  rating,
  review
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
      {/* Header with Avatar and Name */}
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name and Stars */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-base mb-1">
            {name}
          </h4>
          {/* Star Rating */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {review}
      </p>
    </div>
  );
};

export default FeedbackCard;