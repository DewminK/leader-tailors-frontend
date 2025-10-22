"use client";
import React, { useState } from 'react';
import { Calendar, X, Check } from 'lucide-react';

const BookAppointment = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
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
        setShowModal(false);
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
        });
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full text-center shadow-2xl border border-gray-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Appointment Confirmed!</h3>
          <p className="text-gray-600">We'll see you on {formData.date} at {formData.time}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <button 
        onClick={() => setShowModal(true)}
        className="md:ml-auto px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 flex items-center gap-2 justify-center"
      >
        <Calendar className="w-5 h-5" />
        Book Try on
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-xl w-full shadow-2xl border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Book a Try-On Appointment</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="0771234567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
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

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-6"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookAppointment;