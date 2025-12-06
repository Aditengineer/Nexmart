import React from "react";
import { ProductCard } from "./ProductCard";
import "./ProductGrid.css";

export const ProductGrid = ({ products, onAddToCart, loading = false }) => {
  if (loading) {
    return <div className="product-grid-loading">Loading products...</div>;
  }

  if (!products || products.length === 0) {
    return (
      <div className="product-grid-empty">
        <div className="empty-icon">📦</div>
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
