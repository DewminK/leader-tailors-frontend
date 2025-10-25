"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

interface PaymentDetailsProps {
  orderDetails: OrderDetails | null;
}

export default function PaymentDetails({ orderDetails }: PaymentDetailsProps) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const deliveryFee = 350;
  const finalTotal = orderDetails
    ? deliveryOption === "deliver-to-location"
      ? orderDetails.totalPrice + deliveryFee
      : orderDetails.totalPrice
    : 0;

  const handleCardDetailChange = (field: string, value: string) => {
    setCardDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    // Save payment method and card details to localStorage
    const paymentData = {
      deliveryOption,
      paymentMethod,
      cardDetails: paymentMethod === "credit-debit-card" ? cardDetails : null,
      finalTotal,
      orderDate: new Date().toISOString(),
    };

    localStorage.setItem("paymentData", JSON.stringify(paymentData));

    // Here you would typically send the data to your backend
    console.log("Order placed:", {
      orderDetails,
      customerDetails: JSON.parse(
        localStorage.getItem("customerDetails") || "{}"
      ),
      paymentData,
    });

    // Clear cart and order details from localStorage
    localStorage.removeItem("cartItems");
    localStorage.removeItem("orderDetails");
    localStorage.removeItem("customerDetails");

    // Dispatch event to update cart count in header
    window.dispatchEvent(new Event("cartUpdated"));

    // Show success message and redirect to home
    alert("Order placed successfully!");
    router.push("/");
  };

  // Reset payment method when delivery option changes
  useEffect(() => {
    if (deliveryOption === "pay-at-shop") {
      setPaymentMethod("");
    }
  }, [deliveryOption]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 border-b pb-3 border-gray-400">
        Payment Details
      </h2>

      <div className="space-y-6">
        {/* Delivery Option Selection */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="pay-at-shop"
              name="delivery-option"
              value="pay-at-shop"
              checked={deliveryOption === "pay-at-shop"}
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="h-4 w-4 text-black border-gray-300 focus:ring-black"
            />
            <label
              htmlFor="pay-at-shop"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Pay at Shop - Pickup at Shop
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="deliver-to-location"
              name="delivery-option"
              value="deliver-to-location"
              checked={deliveryOption === "deliver-to-location"}
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="h-4 w-4 text-black border-gray-300 focus:ring-black"
            />
            <label
              htmlFor="deliver-to-location"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Deliver to Location
            </label>
          </div>
        </div>

        {/* Payment Methods - Only show when delivery option is selected */}
        {deliveryOption === "deliver-to-location" && (
          <div className="space-y-4 pl-6 border-l-2 border-gray-200 ml-2">
            <h3 className="font-medium text-gray-900 text-lg">
              Payment Method
            </h3>

            {/* Credit/Debit Card Option */}
            <div className="flex items-center">
              <input
                type="radio"
                id="credit-debit-card"
                name="payment-method"
                value="credit-debit-card"
                checked={paymentMethod === "credit-debit-card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-black border-gray-300 focus:ring-black"
              />
              <label
                htmlFor="credit-debit-card"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Credit/Debit Card
              </label>
            </div>

            {/* Credit Card Details - Show only if credit/debit card is selected */}
            {paymentMethod === "credit-debit-card" && (
              <div className="space-y-4 pl-6 border-l-2 border-gray-200 ml-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <div className="border-b border-gray-300 pb-2">
                    <input
                      aria-label="text"
                      type="text"
                      className="w-full outline-none bg-transparent"
                      placeholder="Enter cardholder name"
                      value={cardDetails.cardholderName}
                      onChange={(e) =>
                        handleCardDetailChange("cardholderName", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <div className="border-b border-gray-300 pb-2">
                    <input
                      type="text"
                      className="w-full outline-none bg-transparent"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      value={cardDetails.cardNumber}
                      onChange={(e) =>
                        handleCardDetailChange("cardNumber", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <div className="border-b border-gray-300 pb-2">
                      <input
                        type="text"
                        className="w-full outline-none bg-transparent"
                        placeholder="MM/YY"
                        value={cardDetails.expiryDate}
                        onChange={(e) =>
                          handleCardDetailChange("expiryDate", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <div className="border-b border-gray-300 pb-2">
                      <input
                        type="text"
                        className="w-full outline-none bg-transparent"
                        placeholder="XXX"
                        value={cardDetails.cvv}
                        onChange={(e) =>
                          handleCardDetailChange("cvv", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cash on Delivery Option */}
            <div className="flex items-center">
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment-method"
                value="cash-on-delivery"
                checked={paymentMethod === "cash-on-delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-black border-gray-300 focus:ring-black"
              />
              <label
                htmlFor="cash-on-delivery"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Cash on Delivery
              </label>
            </div>
          </div>
        )}

        {/* Totals */}
        <div className="space-y-3 border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="font-medium">Subtotal:</span>
            <span className="font-medium">
              LKR {orderDetails?.totalPrice.toLocaleString() || "0"}
            </span>
          </div>
          {deliveryOption === "deliver-to-location" && (
            <div className="flex justify-between">
              <span className="font-medium">Delivery Fee:</span>
              <span className="font-medium">
                LKR {deliveryFee.toLocaleString()}
              </span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
            <span>Total:</span>
            <span>LKR {finalTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="flex flex-col-2 gap-4">
          <Link href="/customer/cart" className="w-full">
            <button className="w-full bg-black cursor-pointer text-white rounded-lg font-medium text-[13px] p-2 hover:bg-gray-800 transition-colors mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed">
              Back to Cart
            </button>
          </Link>
          <button
            onClick={handlePlaceOrder}
            disabled={
              !deliveryOption ||
              (deliveryOption === "deliver-to-location" && !paymentMethod)
            }
            className="w-full bg-black cursor-pointer text-white rounded-lg font-medium text-[13px] p-2 hover:bg-gray-800 transition-colors mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Place Order
          </button>
        </div>

        {/* Validation Messages */}
        {!deliveryOption && (
          <p className="text-sm text-red-600 text-center">
            Please select a delivery option
          </p>
        )}
        {deliveryOption === "deliver-to-location" && !paymentMethod && (
          <p className="text-sm text-red-600 text-center">
            Please select a payment method
          </p>
        )}
      </div>
    </div>
  );
}
