import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { useAuth } from "../hooks/useCart";
import "./OrderHistoryPage.css";

export const OrderHistoryPage = () => {
  const { user, isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage
    const lastOrder = localStorage.getItem("lastOrder");
    if (lastOrder) {
      try {
        const order = JSON.parse(lastOrder);
        setOrders([order]);
      } catch (error) {
        console.error("Failed to load orders:", error);
      }
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="order-history-page">
        <div className="not-authenticated">
          <h2>Please sign in to view your orders</h2>
          <Link to="/login">
            <Button variant="primary">Sign In</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-history-page">
      <div className="order-history-container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders yet</p>
            <Link to="/">
              <Button variant="primary">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-number">
                    <p className="label">Order ID</p>
                    <p className="value">{order.id}</p>
                  </div>
                  <div className="order-date">
                    <p className="label">Order Date</p>
                    <p className="value">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="order-amount">
                    <p className="label">Total Amount</p>
                    <p className="value">${order.total.toFixed(2)}</p>
                  </div>
                  <div className="order-status">
                    <p className="label">Status</p>
                    <p className="value status-processing">🎁 Processing</p>
                  </div>
                </div>

                <div className="order-items">
                  <h4>Items ({order.items.length})</h4>
                  {order.items.map((item) => (
                    <div key={item.id} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <p className="item-name">{item.name}</p>
                        <p className="item-qty">Qty: {item.quantity}</p>
                      </div>
                      <p className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="order-actions">
                  <Button variant="ghost">View Details</Button>
                  <Button variant="outline">Track Order</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
