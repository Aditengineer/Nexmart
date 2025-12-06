import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";
import { CartItem, CartSummary } from "../components/cart/CartComponents";
import { useCart } from "../hooks/useCart";
import "./CartPage.css";

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const tax = Math.round(subtotal * 0.1 * 100) / 100;
  const discount = 0;
  const total = subtotal + tax - discount;

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Explore our products and add items to your cart</p>
          <Button variant="primary" size="lg" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items-section">
            <p className="items-count">{cart.length} item(s) in cart</p>

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}

            <div className="cart-actions">
              <Button variant="ghost" size="lg" onClick={() => navigate("/")}>
                ← Continue Shopping
              </Button>
            </div>
          </div>

          <div className="cart-sidebar">
            <CartSummary
              subtotal={subtotal}
              tax={tax}
              discount={discount}
              total={total}
            />

            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => navigate("/checkout")}
              className="checkout-button"
            >
              Proceed to Checkout
            </Button>

            <div className="promo-code">
              <input
                type="text"
                placeholder="Promo code"
                className="promo-input"
              />
              <Button variant="ghost" size="md">
                Apply
              </Button>
            </div>

            <div className="cart-info">
              <p>✓ Free shipping on orders over $50</p>
              <p>↩️ Easy 30-day returns</p>
              <p>🛡️ Secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
