import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckoutSteps,
  ShippingForm,
  PaymentForm,
} from "../components/checkout/CheckoutComponents";
import { CartSummary } from "../components/cart/CartComponents";
import { Button } from "../components/common/Button";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useCart";
import "./CheckoutPage.css";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [shippingData, setShippingData] = useState(null);

  const steps = [
    { id: "review", label: "Review Order" },
    { id: "shipping", label: "Shipping" },
    { id: "payment", label: "Payment" },
    { id: "confirmation", label: "Confirmation" },
  ];

  const subtotal = getCartTotal();
  const tax = Math.round(subtotal * 0.1 * 100) / 100;
  const total = subtotal + tax;

  const handleShippingSubmit = async (shippingData) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setShippingData(shippingData);
    setCurrentStep(2);
    setLoading(false);
  };

  const handlePaymentSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock successful payment
    addToast("Payment successful!", "success");
    setCurrentStep(3);

    // Store order
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      items: cart,
      shipping: shippingData,
      total,
    };
    localStorage.setItem("lastOrder", JSON.stringify(order));

    clearCart();
    setLoading(false);
  };

  if (cart.length === 0 && currentStep !== 3) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <Button variant="primary" onClick={() => navigate("/")}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout</h1>

        <CheckoutSteps currentStep={currentStep} steps={steps} />

        <div className="checkout-content">
          {/* Step 0: Review */}
          {currentStep === 0 && (
            <div className="checkout-step">
              <h2>Order Review</h2>
              <div className="review-items">
                {cart.map((item) => (
                  <div key={item.id} className="review-item">
                    <img src={item.image} alt={item.name} />
                    <div className="review-item-details">
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setCurrentStep(1)}
              >
                Continue to Shipping
              </Button>
            </div>
          )}

          {/* Step 1: Shipping */}
          {currentStep === 1 && (
            <ShippingForm onSubmit={handleShippingSubmit} loading={loading} />
          )}

          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <PaymentForm
              amount={total}
              onSubmit={handlePaymentSubmit}
              loading={loading}
            />
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="confirmation-page">
              <div className="confirmation-icon">✓</div>
              <h2>Order Placed Successfully!</h2>
              <p>Thank you for your purchase</p>

              <div className="order-details">
                <h3>Order Summary</h3>
                <p>
                  <strong>Total Amount:</strong> ${total.toFixed(2)}
                </p>
                <p>
                  <strong>Items:</strong> {cart.length} item(s)
                </p>
                <p>
                  <strong>Shipping To:</strong> {shippingData?.fullName}
                </p>
                <p>
                  <strong>Estimated Delivery:</strong> 3-5 business days
                </p>
              </div>

              <div className="confirmation-actions">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/orders")}
                >
                  View Orders
                </Button>
                <Button variant="ghost" size="lg" onClick={() => navigate("/")}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}

          {/* Sidebar */}
          {currentStep !== 3 && (
            <div className="checkout-summary">
              <CartSummary
                subtotal={subtotal}
                tax={tax}
                discount={0}
                total={total}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
