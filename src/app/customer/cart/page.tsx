"use client";
import React from "react";
import SelectedItems from "./components/selectedItems";
import MainHeader from "../../components/Header";
import MainFooter from "../../components/Footer";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            YOUR CART
          </h1>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Review your selected items before checkout.
          </p>
        </div>
      </main>
      <SelectedItems />
      <MainFooter />
    </div>
  );
}
