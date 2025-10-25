// "use client";
// import React, { useState } from 'react';
// import { X, Check } from 'lucide-react';

// interface Blazer {
//   id?: string;
//   name: string;
//   fabric?: string;
//   price: number;
//   sizes: string[];
//   image?: string;
//   [key: string]: unknown;
// }

// interface ReservationFormData {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   size: string;
//   startDate: string;
//   endDate: string;
// }

// const ReservationProcess = ({ 
//   blazer, 
//   onClose 
// }: { 
//   blazer: Blazer; 
//   onClose: () => void;
// }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState<ReservationFormData>({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     size: '',
//     startDate: '',
//     endDate: ''
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const validatePersonalInfo = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone is required';
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = 'Phone must be 10 digits';
//     }
//     if (!formData.address.trim()) newErrors.address = 'Address is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateRentalDetails = () => {
//     const newErrors: { [key: string]: string } = {};
    
//     if (!formData.size) newErrors.size = 'Size is required';
//     if (!formData.startDate) newErrors.startDate = 'Start date is required';
//     if (!formData.endDate) newErrors.endDate = 'End date is required';

//     if (formData.startDate && formData.endDate) {
//       const start = new Date(formData.startDate);
//       const end = new Date(formData.endDate);
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
      
//       if (start < today) {
//         newErrors.startDate = 'Start date must be in the future';
//       }
//       if (end <= start) {
//         newErrors.endDate = 'End date must be after start date';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (step === 1 && validatePersonalInfo()) {
//       setStep(2);
//     }
//   };

//   const handleAddToCart = () => {
//     if (validateRentalDetails()) {
//       // Format data to match cart's expected structure
//       const cartItem = {
//         id: blazer.id || `blazer-${Date.now()}`,
//         name: blazer.name,
//         size: formData.size,
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//         price: blazer.price,
//         totalAmount: calculateDays() * blazer.price,
//         image: blazer.image || '/placeholder-blazer.jpg'
//       };
      
//       // Get existing cart items
//       const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      
//       // Add new item to cart
//       existingCart.push(cartItem);
//       localStorage.setItem('cartItems', JSON.stringify(existingCart));
      
//       // Also save customer details separately for checkout
//       localStorage.setItem('customerDetails', JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         address: formData.address
//       }));
      
//       // Navigate to cart page
//       window.location.href = '/customer/cart';
//     }
//   };

//   const calculateDays = () => {
//     if (formData.startDate && formData.endDate) {
//       const start = new Date(formData.startDate);
//       const end = new Date(formData.endDate);
//       const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
//       return days > 0 ? days : 0;
//     }
//     return 0;
//   };

//   const totalAmount = blazer.price * Math.max(calculateDays(), 1);

//   return (
//     <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 overflow-y-auto">
//       <div className="bg-white rounded-lg max-w-3xl w-full my-8 shadow-2xl border border-gray-200">
//         <div className="p-6 border-b border-gray-200 flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">Reserve Blazer</h2>
//             <div className="flex items-center mt-4 space-x-2">
//               {[1, 2].map((s) => (
//                 <div key={s} className="flex items-center">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
//                     step >= s ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
//                   }`}>
//                     {s}
//                   </div>
//                   {s < 2 && (
//                     <div className={`w-12 h-0.5 ${step > s ? 'bg-black' : 'bg-gray-200'}`} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="p-6">
//           {step === 1 && (
//             <div className="space-y-6">
//               <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                 <h4 className="font-bold text-lg mb-1 text-gray-900">{blazer.name}</h4>
//                 <p className="text-sm text-gray-700">{blazer.fabric}</p>
//                 <p className="text-lg font-bold mt-2 text-gray-900">LKR {blazer.price.toLocaleString()} / day</p>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-900">Full Name *</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
//                     errors.name ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="John Doe"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Email *</label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
//                     errors.email ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="john@example.com"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Phone *</label>
//                 <input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
//                     errors.phone ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="0771234567"
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Address *</label>
//                 <textarea
//                   value={formData.address}
//                   onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
//                     errors.address ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   rows={3}
//                   placeholder="123 Main Street, Colombo"
//                 />
//                 {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//               </div>

//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
//               >
//                 Next Step
//               </button>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Select Size *</label>
//                 <div className="flex gap-2">
//                   {blazer.sizes.map((size) => (
//                     <button
//                       key={size}
//                       type="button"
//                       onClick={() => setFormData({ ...formData, size })}
//                       className={`px-6 py-3 border rounded-lg font-medium ${
//                         formData.size === size
//                           ? 'bg-black text-white border-black'
//                           : 'border-gray-300 hover:border-black'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//                 {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size}</p>}
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Start Date *</label>
//                   <input
//                     type="date"
//                     value={formData.startDate}
//                     onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
//                       errors.startDate ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     min={new Date().toISOString().split('T')[0]}
//                   />
//                   {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">End Date *</label>
//                   <input
//                     type="date"
//                     value={formData.endDate}
//                     onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
//                       errors.endDate ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     min={formData.startDate || new Date().toISOString().split('T')[0]}
//                   />
//                   {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
//                 </div>
//               </div>

//               {calculateDays() > 0 && (
//                 <div className="bg-black text-white p-4 rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <span>Rental Duration:</span>
//                     <span className="font-bold">{calculateDays()} days</span>
//                   </div>
//                   <div className="flex justify-between items-center mt-2">
//                     <span>Total Amount:</span>
//                     <span className="font-bold text-xl">LKR {totalAmount.toLocaleString()}</span>
//                   </div>
//                 </div>
//               )}

//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setStep(1)}
//                   className="flex-1 border border-black text-black py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleAddToCart}
//                   className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReservationProcess;
"use client";
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface Blazer {
  id: string;
  id: string;
  name: string;
  price: number;
  images: string[];
  sizes: string[];
  fabric: string;
  construction: string;
  structure: string;
  event: string[];
  image?: string;
}

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  size: string;
  startDate: string;
  endDate: string;
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validatePersonalInfo = () => {
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
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRentalDetails = () => {
    const newErrors: { [key: string]: string } = {};
    
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

  const handleNext = () => {
    if (step === 1 && validatePersonalInfo()) {
      setStep(2);
    }
  };

  const handleAddToCart = () => {
    if (validateRentalDetails()) {
      // Format data to match cart's expected structure
      const cartItem = {
        id: blazer.id || `blazer-${Date.now()}`,
        name: blazer.name,
        size: formData.size,
        startDate: formData.startDate,
        endDate: formData.endDate,
        price: blazer.price,
        totalAmount: calculateDays() * blazer.price,
        image: blazer.image || '/placeholder-blazer.jpg'
      };
      
      // Get existing cart items
      const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      
      // Add new item to cart
      existingCart.push(cartItem);
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
      
      // Also save customer details separately for checkout
      localStorage.setItem('customerDetails', JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address
      }));
      
      // Navigate to cart page
      window.location.href = '/customer/cart';
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

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-3xl w-full my-8 shadow-2xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Reserve Blazer</h2>
            <div className="flex items-center mt-4 space-x-2">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                    step >= s ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {s}
                  </div>
                  {s < 2 && (
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

        <div className="p-6">
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
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationProcess;