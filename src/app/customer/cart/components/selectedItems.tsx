"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import Link from "next/link";

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

export default function SelectedItems() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) setCartItems(JSON.parse(storedItems));
  }, []);

  const handleRemove = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalAmount, 0);

  const prepareOrderDetails = (): OrderDetails => {
    return {
      items: cartItems,
      totalPrice: totalPrice,
      itemCount: cartItems.length
    };
  };

  const handleProceedToCheckout = () => {
    const orderDetails = prepareOrderDetails();
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
            <p className="text-sm text-gray-500 mt-2">
              Start adding your favorite blazers to rent!
            </p>
          </div>
        ) : (
          <div>
            {/* Header with item count and clear cart button - spans both columns */}
            <div className="bg-[#F9F9F9] rounded-xl p-4 mb-6 flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Selected Items ({cartItems.length})
              </h2>
              <button
                onClick={handleClearCart}
                className="bg-black cursor-pointer hover:bg-gray-800 text-white border-gray-300 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Clear Cart
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-center md:items-start justify-between border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-40 object-cover rounded-lg mb-4 md:mb-0"
                    />

                    <div className="flex-1 md:ml-6 w-full">
                      <h2 className="text-xl font-semibold mb-1">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2">
                        Size: {item.size}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        From{" "}
                        <span className="font-medium">{item.startDate}</span> to{" "}
                        <span className="font-medium">{item.endDate}</span>
                      </p>
                      <p className="text-sm text-gray-800 font-medium">
                        Daily Rate: LKR {item.price.toLocaleString()}
                      </p>
                      <p className="text-lg font-bold text-black mt-2">
                        Total: LKR {item.totalAmount.toLocaleString()}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label="none"
                      onClick={() => handleRemove(item.id)}
                      className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-6">
                  <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                  {/* Items List */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-start"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-gray-600">
                            Size: {item.size}
                          </p>
                          <p className="text-xs text-gray-600">
                            {item.startDate} - {item.endDate}
                          </p>
                        </div>
                        <p className="font-medium text-sm ml-4">
                          LKR {item.totalAmount.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4 border-gray-300" />

                  {/* Total */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-black">
                        LKR {totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full bg-black cursor-pointer text-white rounded-lg font-medium text-[13px] p-2 hover:bg-gray-800 transition-colors mt-6">
                      Cancel
                    </button>
                    <Link href="/customer/payment" className="w-full">
                      <button 
                        onClick={handleProceedToCheckout}
                        className="w-full bg-black cursor-pointer text-white rounded-lg font-medium text-[13px] p-2 hover:bg-gray-800 transition-colors mt-6"
                      >
                        Proceed to Checkout
                      </button>
                    </Link>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By completing your purchase you agree to our Terms of
                    Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}