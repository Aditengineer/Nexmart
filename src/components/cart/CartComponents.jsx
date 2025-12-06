import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import "./CartComponents.css";

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <Link to={`/product/${item.id}`} className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </Link>

      <div className="cart-item-details">
        <Link to={`/product/${item.id}`} className="cart-item-name">
          {item.name}
        </Link>
        <p className="cart-item-category">{item.category}</p>
        <div className="cart-item-actions">
          <button
            className="cart-item-remove"
            onClick={() => onRemove(item.id)}
          >
            🗑️ Remove
          </button>
        </div>
      </div>

      <div className="cart-item-quantity">
        <select
          value={item.quantity}
          onChange={handleQuantityChange}
          className="quantity-select"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>

      <div className="cart-item-price">
        <div className="item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <div className="item-price-unit">${item.price.toFixed(2)} each</div>
      </div>
    </div>
  );
};

export const CartSummary = ({ subtotal, tax = 0, discount = 0, total }) => {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      {tax > 0 && (
        <div className="summary-row">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      )}
      {discount > 0 && (
        <div className="summary-row discount">
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
      <div className="summary-divider"></div>
      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
