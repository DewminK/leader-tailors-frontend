"use client";
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import MainHeader from '../../components/Header';
import MainFooter from '../../components/Footer';
import BookAppointment from './components/BookAppointment';
import ReservationProcess from './components/ReservationProcess';

// Types
interface Blazer {
  id: string;
  name: string;
  price: number;
  images: string[];
  sizes: string[];
  fabric: string;
  construction: string;
  structure: string;
  event: string[];
  image?: string; // Add this for cart compatibility
}

// Blazer Data
const blazersData: Blazer[] = [
  {
    id: '1',
    name: 'Sid Mashburn Ghost Blazer',
    price: 2500,
    images: [
      'https://shopmashburn.com/cdn/shop/products/S60806_2_1280x.jpg?v=1668124158&w=400',
      'https://shopmashburn.com/cdn/shop/products/S60806_1_2048x2048.jpg?v=1744653354&w=400',
      'https://shopmashburn.com/cdn/shop/files/S60806_3585_2048x2048.jpg?v=1744653354'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Wedding', 'Formal', 'Party']
  },
  {
    id: '2',
    name: 'Classic Midnight Navy Blazer',
    price: 2800,
    images: [
      'https://www.lordwillys.com/cdn/shop/files/IMG_9866.jpg?v=1757454112&w=400',
      'https://cdn.hangrr.com/v7/s3/product/657/classic-midnight-blue-blazer-multi.webp?tr=w-1200,h-1400?w=400',
      'https://shop.bluffworks.com/cdn/shop/products/HopsackBlazer_Navy_02.jpg?v=1626900971?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: '100% Wool, English High-twist',
    construction: 'Constructed',
    structure: 'Tailored fit, dual vents, half-lined',
    event: ['Wedding', 'Gala']
  },
  {
    id: '3',
    name: 'Charcoal Grey Blazer',
    price: 2700,
    images: [
      'https://themoderngroom.com/cdn/shop/files/TMG_Charcoal-Hero_2000x.jpg?v=1713982038?w=400',
      'https://classy.ca/wp-content/uploads/2022/02/Charcoal-suit-grey-261-1-scaled-700x1050.jpg?w=400',
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'Italian Linen Blend',
    construction: 'Unlined',
    structure: 'Perfect for formal events and receptions',
    event: ['Formal', 'Gala']
  },
  {
    id: '4',
    name: 'Light Beige Summer Blazer',
    price: 3000,
    images: [
      'https://i.etsystatic.com/36064523/r/il/7bba25/4131221297/il_fullxfull.4131221297_7vvm.jpg?w=400',
      'https://i.pinimg.com/564x/40/04/8d/40048d1c34a1d652c140edcf7e8ec223.jpg?w=400',
      'https://cdn.lookastic.com/looks/blazer-dress-shirt-dress-pants-large-103577.jpg?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'Cotton & Poly Mix',
    construction: 'Unlined',
    structure: 'Breathable, stylish for daytime events',
    event: ['Wedding', 'Party', 'Formal']
  },
  {
    id: '5',
    name: 'Black Tuxedo Blazer',
    price: 2900,
    images: [
      'https://content.moss.co.uk/images/extraextralarge/966152215_02.jpg?w=400',
      'https://i.etsystatic.com/21096198/r/il/927507/2067665773/il_fullxfull.2067665773_k2bu.jpg?w=300',
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: '100% Wool Satin Finish',
    construction: 'Unlined',
    structure: 'Premium finish ideal for weddings',
    event: ['Wedding', 'Formal']
  },
  {
    id: '6',
    name: 'Royal Blue Slim Fit Blazer',
    price: 3000,
    images: [
      'https://cdn.shopify.com/s/files/1/1079/1374/files/blog_royal_blue_suit_b_1024x1024.jpg?w=400',
      'https://img.drz.lazcdn.com/static/bd/p/77f89ae15a4f972ded6c6a67ccbbf9a9.jpg_960x960q80.jpg_.webp?w=400',
      'https://i.ebayimg.com/images/g/Q~gAAOSwBXldxntS/s-l1200.jpg?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Elegant fit for modern ceremonies',
    event: ['Gala', 'Party']
  },
  {
    id: '7',
    name: 'Tweed Textured Blazer',
    price: 2500,
    images: [
      'https://img.shopstyle-cdn.com/sim/87/08/8708200c4bd78c19151de8c689dad366_best/ralph-lauren-polo-tailored-plaid-tweed-sport-coat.jpg?w=400',
      'https://i.pinimg.com/736x/c4/a7/fd/c4a7fd2ff5071f32eeb2166d51a02368.jpg?w=400',
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'Tweed Wool Blend',
    construction: 'Unlined',
    structure: 'Vintage style with soft shoulder tailoring',
    event: ['Wedding', 'Formal', 'Gala']
  },
  {
    id: '8',
    name: 'Classic White Dinner Blazer',
    price: 2900,
    images: [
      'https://images.hawesandcurtis.com/tr:q-80/CO/COPLD287-N01-209469-1400px-1820px.jpg?w=400',
      'https://m.media-amazon.com/images/I/51k+9P2Vs-L._UY1000_.jpg?w=400',
      'https://editorialist.com/thumbnail/600/2022/5/019/381/671/19381671~white_1734442407563_0.webp?width=600&quality=60?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'Polyester + Viscose',
    construction: 'Unlined',
    structure: 'Ideal for grooms and evening functions',
    event: ['Wedding', 'Party']
  }
];

// Image Slideshow Component
const ImageSlideshow = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 bg-gray-100 group">
      <Image
        src={images[currentIndex]}
        alt="Blazer"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Try-On Modal Component
const TryOnModal = ({ blazer, onClose }: { blazer: Blazer; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    size: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.size) newErrors.size = 'Size is required';

    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date must be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600">We will see you on {formData.date} at {formData.time}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full my-8 shadow-2xl border border-gray-100">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Book Try-On Appointment</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">{blazer.name}</h3>
            <p className="text-sm text-gray-600">{blazer.fabric}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="0771234567"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Date *</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Preferred Time *</label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                  errors.time ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred Size *</label>
            <div className="flex gap-2">
              {blazer.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setFormData({ ...formData, size })}
                  className={`px-6 py-2 border rounded-lg font-medium ${
                    formData.size === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

// Blazer Card Component
const BlazerCard = ({ blazer, onReserve }: { 
  blazer: Blazer; 
  onReserve: () => void;
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <ImageSlideshow images={blazer.images} />
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{blazer.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{blazer.fabric} | Construction: {blazer.construction}</p>
        <p className="text-sm text-gray-600 mb-3">{blazer.structure}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold">LKR {blazer.price.toLocaleString()}</p>
            <p className="text-xs text-gray-500">/ day</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-gray-600 mb-2">Available Sizes:</p>
          <div className="flex gap-2">
            {blazer.sizes.map((size) => (
              <span key={size} className="px-3 py-1 border border-gray-300 rounded text-sm">
                {size}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={onReserve}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-2"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

// Filter Section Component
const FilterSection = ({ 
  onEventFilter, 
  onPriceFilter,
  selectedEvent,
  selectedPrice
}: { 
  onEventFilter: (event: string) => void;
  onPriceFilter: (price: string) => void;
  selectedEvent: string;
  selectedPrice: string;
}) => {
  const events = ['All', 'Wedding', 'Formal', 'Gala', 'Party'];
  const prices = ['All', 'Low to High', 'High to Low'];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1">
        <p className="text-sm font-medium mb-2">Filter by:</p>
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedEvent}
            onChange={(e) => onEventFilter(e.target.value)}
            className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 cursor-pointer"
          >
            <option value="">By Event</option>
            {events.map((event) => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
          
          <select
            value={selectedPrice}
            onChange={(e) => onPriceFilter(e.target.value)}
            className="px-6 py-2 bg-white text-black border border-black rounded-full font-medium hover:bg-gray-50 cursor-pointer"
          >
            <option value="">By Price</option>
            {prices.map((price) => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>
        </div>
      </div>
      
      <BookAppointment />
    </div>
  );
};

// Main App Component
export default function BlazerRentalApp() {
  const [selectedBlazer, setSelectedBlazer] = useState<Blazer | null>(null);
  const [tryOnBlazer, setTryOnBlazer] = useState<Blazer | null>(null);
  const [showReserveModal, setShowReserveModal] = useState(false);
  const [showTryOnModal, setShowTryOnModal] = useState(false);
  const [eventFilter, setEventFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const handleReserve = (blazer: Blazer) => {
    // Add the image property (first image from images array)
    const blazerWithImage = {
      ...blazer,
      image: blazer.images[0]
    };
    setSelectedBlazer(blazerWithImage);
    setShowReserveModal(true);
  };

  const handleTryOn = (blazer: Blazer) => {
    setTryOnBlazer(blazer);
    setShowTryOnModal(true);
  };

  const filteredBlazers = blazersData.filter((blazer) => {
    if (eventFilter && eventFilter !== 'All' && !blazer.event.includes(eventFilter)) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (priceFilter === 'Low to High') return a.price - b.price;
    if (priceFilter === 'High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      <MainHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PREMIUM BLAZER RENTALS</h1>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Elevate your special moments with our curated collection of luxury blazers for weddings, parties, galas and formal events
          </p>
        </div>
        
        <FilterSection 
          onEventFilter={setEventFilter}
          onPriceFilter={setPriceFilter}
          selectedEvent={eventFilter}
          selectedPrice={priceFilter}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBlazers.map((blazer) => (
            <BlazerCard
              key={blazer.id}
              blazer={blazer}
              onReserve={() => handleReserve(blazer)}
            />
          ))}
        </div>
      </main>
      
      {showReserveModal && selectedBlazer && (
        <ReservationProcess
          blazer={selectedBlazer}
          onClose={() => {
            setShowReserveModal(false);
            setSelectedBlazer(null);
          }}
        />
      )}
      
      {showTryOnModal && tryOnBlazer && (
        <TryOnModal
          blazer={tryOnBlazer}
          onClose={() => {
            setShowTryOnModal(false);
            setTryOnBlazer(null);
          }}
        />
      )}
      <MainFooter />
    </div>
  );
}