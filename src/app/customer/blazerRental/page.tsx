"use client";
import React, { useState } from 'react';
import { ShoppingCart, User, Calendar, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
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
}

// Blazer Data
const blazersData: Blazer[] = [
  {
    id: '1',
    name: 'Sid Mashburn Ghost Blazer - Navy',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Wedding', 'Formal', 'Party']
  },
  {
    id: '2',
    name: 'Sid Mashburn Ghost Blazer - Blue',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Constructed',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Wedding', 'Gala']
  },
  {
    id: '3',
    name: 'Sid Mashburn Ghost Blazer - Black',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Formal', 'Gala']
  },
  {
    id: '4',
    name: 'Sid Mashburn Ghost Blazer - Grey',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Wedding', 'Party', 'Formal']
  },
  {
    id: '5',
    name: 'Sid Mashburn Ghost Blazer - Charcoal',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Wedding', 'Formal']
  },
  {
    id: '6',
    name: 'Sid Mashburn Ghost Blazer - Dark Blue',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Gala', 'Party']
  },
  {
    id: '7',
    name: 'Sid Mashburn Ghost Blazer - Midnight',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Wedding', 'Formal', 'Gala']
  },
  {
    id: '8',
    name: 'Sid Mashburn Ghost Blazer - Steel',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400'
    ],
    sizes: ['M', 'L', 'XL'],
    fabric: 'English high-twist 100% wool',
    construction: 'Unlined',
    structure: 'Unstructured shoulder, dual vents',
    event: ['Wedding', 'Party']
  }
];

// Header component is now imported from components/Header

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
      <img
        src={images[currentIndex]}
        alt="Blazer"
        className="w-full h-full object-cover"
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
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};
    
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

    // Check if date is in the future
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
          <p className="text-gray-600">We'll see you on {formData.date} at {formData.time}</p>
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

// Reservation Modal Component
const ReservationModal = ({ blazer, onClose }: { blazer: Blazer; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    name: '',
    email: '',
    phone: '',
    address: '',
    
    // Rental Details
    size: '',
    startDate: '',
    endDate: '',
    
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validateStep1 = () => {
    const newErrors: any = {};
    
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
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: any = {};
    
    if (!formData.size) newErrors.size = 'Size is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';

    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (start < today) {
        newErrors.startDate = 'Start date must be in the future';
      }
      if (end <= start) {
        newErrors.endDate = 'End date must be after start date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: any = {};
    
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    
    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Format: MM/YY';
    }
    
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return days > 0 ? days : 0;
    }
    return 0;
  };

  const totalAmount = blazer.price * Math.max(calculateDays(), 1);

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
          <p className="text-gray-600 mb-4">Your reservation has been confirmed</p>
          <div className="bg-gray-50 p-4 rounded-lg text-left">
            <p className="text-sm mb-2"><strong>Order ID:</strong> BLZ{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-sm mb-2"><strong>Rental Period:</strong> {formData.startDate} to {formData.endDate}</p>
            <p className="text-sm"><strong>Total Amount:</strong> LKR {totalAmount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-3xl w-full my-8 shadow-2xl border border-gray-100">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Reserve Blazer</h2>
            <div className="flex items-center mt-2 space-x-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-black' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>
              
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

              <div>
                <label className="block text-sm font-medium mb-1">Address *</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  rows={3}
                  placeholder="123 Main Street, Colombo"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Next Step
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Rental Details</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">{blazer.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{blazer.fabric}</p>
                <p className="text-lg font-bold">LKR {blazer.price.toLocaleString()} / day</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Size *</label>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date *</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.startDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">End Date *</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.endDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min={formData.startDate || new Date().toISOString().split('T')[0]}
                  />
                  {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
                </div>
              </div>

              {calculateDays() > 0 && (
                <div className="bg-black text-white p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Rental Duration:</span>
                    <span className="font-bold">{calculateDays()} days</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">Total Amount:</span>
                    <span className="font-bold text-xl">LKR {totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-black text-black py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Payment Information</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Blazer Rental ({calculateDays()} days)</span>
                  <span className="font-bold">LKR {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-300">
                  <span className="font-bold">Total Amount</span>
                  <span className="font-bold text-xl">LKR {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Card Number *</label>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
                    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
                    setFormData({ ...formData, cardNumber: formatted });
                  }}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Cardholder Name *</label>
                <input
                  type="text"
                  value={formData.cardName}
                  onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.cardName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="JOHN DOE"
                />
                {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                  <input
                    type="text"
                    value={formData.expiryDate}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, '');
                      if (value.length >= 2) {
                        value = value.slice(0, 2) + '/' + value.slice(2, 4);
                      }
                      setFormData({ ...formData, expiryDate: value });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">CVV *</label>
                  <input
                    type="text"
                    value={formData.cvv}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, cvv: value });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.cvv ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="123"
                    maxLength={3}
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 border border-black text-black py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Complete Payment
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// Blazer Card Component
const BlazerCard = ({ blazer, onReserve, onTryOn }: { 
  blazer: Blazer; 
  onReserve: () => void; 
  onTryOn: () => void;
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
    setSelectedBlazer(blazer);
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
            Elevate your special moments with our curated collection if luxury blazers for weddings, parties, galas and formal events
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
              onTryOn={() => handleTryOn(blazer)}
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