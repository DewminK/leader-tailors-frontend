
"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const cars = [
  {
    name: "Toyota Premio",
    flowers: "Fresh Flowers",
    price: 1500,
    displayPrice: "LKR 1,500 / day",
    status: "Available",
    image: "/dashboard/designs/premio.jpg",
    button: "Book Now",
    disabled: false,
  },
  {
    name: "Toyota Prius",
    flowers: "Artificial flowers",
    price: 1500,
    displayPrice: "LKR 1,500 / day",
    status: "Available",
    image: "/dashboard/designs/prius.jpg",
    button: "Book Now",
    disabled: false,
  },
  {
    name: "Mercedes Benz",
    flowers: "Fresh Flowers",
    price: 2500,
    displayPrice: "LKR 2,500 / day",
    status: "Booked",
    image: "/dashboard/designs/benz.jpg",
    button: "Add to Cart",
    disabled: true,
  },
];

const decorations = [
  { name: "Fresh Flowers", image: "/dashboard/designs/fresh.jpg", price: 500 },
  { name: "Artificial Flowers", image: "/dashboard/designs/artificial.jpg", price: 300 },
  { name: "Rosa Flowers", image: "/dashboard/designs/rosa.jpg", price: 700 },
  { name: "Custom Decoration", image: "/dashboard/designs/custom.jpg", price: 1000 },
];


const WeddingCarRental = () => {
  const bookingRef = useRef<HTMLDivElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCar, setSelectedCar] = useState<string>("Toyota Premio");
  const [selectedDecoration, setSelectedDecoration] = useState<string>("Fresh Flowers");
  const [weddingDate, setWeddingDate] = useState<string>("");
  const [startLocation, setStartLocation] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");

  // Calculate charges dynamically
  const getCarPrice = () => {
    const car = cars.find(c => c.name === selectedCar);
    return car ? car.price : 0;
  };

  const getDecorationPrice = () => {
    const decoration = decorations.find(d => d.name === selectedDecoration);
    return decoration ? decoration.price : 0;
  };

  const baseRent = getCarPrice();
  const decorationCharge = getDecorationPrice();
  const discount = 0;
  const totalCharge = baseRent + decorationCharge - discount;

  // Scroll to booking form
  const handleBookNow = (carName: string) => {
    setSelectedCar(carName);
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  // Handle booking form submit
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create cart item
    const cartItem = {
      id: `wedding-car-${Date.now()}`,
      name: `Wedding Car Rental - ${selectedCar}`,
      size: selectedDecoration,
      startDate: weddingDate,
      endDate: weddingDate,
      price: baseRent,
      totalAmount: totalCharge,
      image: cars.find(c => c.name === selectedCar)?.image || "",
      type: "wedding-car",
      details: {
        car: selectedCar,
        decoration: selectedDecoration,
        location: startLocation,
        specialRequests: specialRequests,
      }
    };

    // Add to cart
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    existingCart.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // Dispatch event to update cart count
    window.dispatchEvent(new Event("cartUpdated"));

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    
    // Reset form
    setWeddingDate("");
    setStartLocation("");
    setSpecialRequests("");
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col relative">
      <Header />

      {/* Hero Section - Elegant refinement */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-2 md:p-6 relative">
          <div className="relative w-full h-[340px] md:h-[440px] rounded-3xl overflow-hidden">
            <Image
              src="/dashboard/designs/hero-car.jpg"
              alt="Wedding Car"
              fill
              className="object-cover w-full h-full rounded-3xl"
              priority
            />
            {/* Soft overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40 rounded-3xl" />
            {/* Centered overlay text */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] flex justify-center">
              <div className="bg-[#dedad6]/90 px-4 md:px-8 py-4 md:py-6 rounded-lg shadow-lg flex justify-center items-center border border-[#e5e5e5]">
                <span className="text-2xl md:text-5xl font-serif font-extrabold text-black tracking-wide text-center drop-shadow-lg">
                  MAKE YOUR WEDDING JOURNEY ELEGANT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="mt-4 text-gray-700 text-center w-full max-w-2xl text-base md:text-lg">Choose from our collection of luxury cars with your favorite floral decorations</div>
      </div>

      {/* Cars Section */}
      <div className="w-full mt-10 px-2 md:px-8">
        <h2 className="text-2xl font-bold mb-6 tracking-wide font-serif text-gray-800">Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl border border-gray-100"
            >
              <div className="w-full h-[180px] md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl mb-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={340}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-1 text-xl font-bold font-serif text-gray-800 text-center">{car.name}</div>
              <div className="text-base text-gray-600 text-center">{car.flowers}</div>
              <div className="text-lg font-semibold mt-1 text-gray-700 text-center">{car.displayPrice}</div>
              <div className={`text-base mt-1 ${car.status === 'Available' ? 'text-green-600' : 'text-red-500'} font-medium text-center`}>{car.status}</div>
              <button
                className={`mt-4 px-7 py-2 rounded-lg font-bold text-lg transition-all duration-150 ${car.disabled ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800 shadow-md'}`}
                disabled={car.disabled}
                onClick={() => !car.disabled && handleBookNow(car.name)}
              >
                {car.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorations Section - Elegant & Responsive */}
      <div className="w-full mt-16 px-2 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide font-serif text-gray-800 text-center">Decoration Options</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {decorations.map((dec, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-200 p-2 md:p-4 border border-gray-100 hover:border-gray-300"
            >
              <div className="w-full aspect-[16/10] flex items-center justify-center overflow-hidden rounded-xl relative">
                <Image 
                  src={dec.image} 
                  alt={dec.name} 
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                  sizes="(max-width: 768px) 100vw, 210px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl pointer-events-none" />
              </div>
              <div className="font-serif text-gray-900 text-lg md:text-xl text-center font-semibold mt-3 tracking-wide group-hover:text-black transition-colors duration-200 drop-shadow-sm">
                {dec.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl font-bold text-lg md:text-xl hover:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-200 tracking-wide">
            Customize Your Decorations
          </button>
        </div>
      </div>

      {/* Booking Section */}
      <div ref={bookingRef} className="w-full flex justify-center mt-12 mb-8 px-2 md:px-8">
        <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12 flex flex-col">
          <h2 className="text-2xl font-bold mb-8 font-serif text-gray-900 tracking-wide text-center">Booking Your Wedding Car</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleBookingSubmit}>
            {/* Left: Price summary and special requests */}
            <div className="flex flex-col gap-6 md:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-3 shadow-sm">
                <div className="flex justify-between text-base text-gray-700">
                  <span>Base Rent:</span>
                  <span>{baseRent} LKR</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span>Decoration:</span>
                  <span>{decorationCharge} LKR</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span>Discount:</span>
                  <span>{discount} LKR</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-3 mt-3 text-lg">
                  <span>Total:</span>
                  <span>{totalCharge} LKR</span>
                </div>
              </div>
              <div>
                <label htmlFor="special" className="block text-base font-medium mb-2 text-gray-800">Special Requests</label>
                <textarea 
                  id="special" 
                  rows={3} 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black/30 transition-all" 
                  placeholder="Any special requests?" 
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:col-span-1">
              <div>
                <label htmlFor="date" className="block text-base font-medium mb-2 text-gray-800">Wedding Date</label>
                <input 
                  id="date" 
                  type="date" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black/30 transition-all" 
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="car" className="block text-base font-medium mb-2 text-gray-800">Car</label>
                <select 
                  id="car" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black/30 transition-all" 
                  value={selectedCar} 
                  onChange={e => setSelectedCar(e.target.value)}
                >
                  {cars.filter(c => !c.disabled).map(car => (
                    <option key={car.name} value={car.name}>{car.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-base font-medium mb-2 text-gray-800">Start Location</label>
                <input 
                  id="location" 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black/30 transition-all" 
                  placeholder="Enter start location" 
                  value={startLocation}
                  onChange={(e) => setStartLocation(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="decoration" className="block text-base font-medium mb-2 text-gray-800">Decoration Type</label>
                <select 
                  id="decoration" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black/30 transition-all"
                  value={selectedDecoration}
                  onChange={(e) => setSelectedDecoration(e.target.value)}
                >
                  {decorations.map(dec => (
                    <option key={dec.name} value={dec.name}>{dec.name} - LKR {dec.price}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Book Now button full width */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2 mt-2">
              <button type="submit" className="w-full px-10 py-4 bg-black text-white rounded-2xl font-bold text-xl hover:bg-gray-800 shadow-lg transition-all duration-150">Book Now</button>
              <span className="text-xs text-center text-gray-500">Ensure booking only instant confirmation</span>
            </div>
          </form>
        </div>
        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black/60 absolute inset-0" />
            <div className="relative bg-white rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center animate-fade-in">
              <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <div className="text-2xl font-bold text-green-600 mb-2">Added to Cart!</div>
              <div className="text-gray-700 text-center">Your wedding car rental has been added to the cart.</div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default WeddingCarRental;
