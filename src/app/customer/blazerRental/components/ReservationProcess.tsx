"use client";
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface Blazer {
  id?: string;
  name: string;
  fabric?: string;
  price: number;
  sizes: string[];
  [key: string]: any;
}

interface PaymentFormData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  size: string;
  startDate: string;
  endDate: string;
  paymentDetails?: PaymentFormData;
}

const ReservationProcess = ({ 
  blazer, 
  onClose 
}: { 
  blazer: Blazer; 
  onClose: () => void;
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    size: '',
    startDate: '',
    endDate: ''
  });
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validatePersonalInfo = () => {
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

  const validateRentalDetails = () => {
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

  const validatePayment = () => {
    const newErrors: any = {};
    
    if (!paymentData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(paymentData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    
    if (!paymentData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    
    if (!paymentData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(paymentData.expiryDate)) {
      newErrors.expiryDate = 'Format: MM/YY';
    }
    
    if (!paymentData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(paymentData.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validatePersonalInfo()) {
      setStep(2);
    } else if (step === 2 && validateRentalDetails()) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePayment()) {
      setSubmitted(true);
      // Here you would typically make an API call to process the payment
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
      <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl border border-gray-200">
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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-3xl w-full my-8 shadow-2xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Reserve Blazer</h2>
            <div className="flex items-center mt-4 space-x-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                    step >= s ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-12 h-0.5 ${step > s ? 'bg-black' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()} className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-1 text-gray-900">{blazer.name}</h4>
                <p className="text-sm text-gray-700">{blazer.fabric}</p>
                <p className="text-lg font-bold mt-2 text-gray-900">LKR {blazer.price.toLocaleString()} / day</p>
              </div>

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

              <div>
                <label className="block text-sm font-medium mb-2">Address *</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
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
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Size *</label>
                <div className="flex gap-2">
                  {blazer.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({ ...formData, size })}
                      className={`px-6 py-3 border rounded-lg font-medium ${
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Start Date *</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.startDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">End Date *</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
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
                    <span>Rental Duration:</span>
                    <span className="font-bold">{calculateDays()} days</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>Total Amount:</span>
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
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
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
                <label className="block text-sm font-medium mb-2">Card Number *</label>
                <input
                  type="text"
                  value={paymentData.cardNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
                    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
                    setPaymentData({ ...paymentData, cardNumber: formatted });
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cardholder Name *</label>
                <input
                  type="text"
                  value={paymentData.cardName}
                  onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.cardName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="JOHN DOE"
                />
                {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                  <input
                    type="text"
                    value={paymentData.expiryDate}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, '');
                      if (value.length >= 2) {
                        value = value.slice(0, 2) + '/' + value.slice(2, 4);
                      }
                      setPaymentData({ ...paymentData, expiryDate: value });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">CVV *</label>
                  <input
                    type="text"
                    value={paymentData.cvv}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setPaymentData({ ...paymentData, cvv: value });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
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

export default ReservationProcess;