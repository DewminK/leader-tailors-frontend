"use client";
import React, { useState, useEffect } from "react";
import MainHeader from "../../components/Header";
import MainFooter from "../../components/Footer";
import OrderDetail from "./components/orderDetails";
import PaymentDetails from "./components/paymentDetails";

interface CartItem {
  id: string;
  name: string;
  size: string;
  startDate: string;
  endDate: string;
  price: number;
  totalAmount: number;
  image: string;
}

interface OrderDetails {
  items: CartItem[];
  totalPrice: number;
  itemCount: number;
}

export default function PaymentPage() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem("orderDetails");
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SECURE YOUR ORDER
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Order Summary Component */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              {orderDetails && (
                <div className="space-y-4">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">Size: {item.size}</p>
                        <p className="text-xs text-gray-600">{item.startDate} - {item.endDate}</p>
                      </div>
                      <p className="font-medium text-sm ml-4">
                        LKR {item.totalAmount.toLocaleString()}
                      </p>
                    </div>
                  ))}
                  <div className="flex justify-between items-center text-lg font-bold pt-4 border-t border-gray-300">
                    <span>Total ({orderDetails.itemCount} items)</span>
                    <span className="text-black">
                      LKR {orderDetails.totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Order Details */}
            <OrderDetail />
          </div>
          
          {/* Right Column */}
          <div>
            <PaymentDetails orderDetails={orderDetails} />
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}