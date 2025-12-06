import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Rating } from "../common/Rating";
import { Badge } from "../common/Badge";
import "./ProductCard.css";

export const ProductCard = ({ product, onAddToCart }) => {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        {discountPercentage > 0 && (
          <Badge variant="secondary" size="sm" className="discount-badge">
            -{discountPercentage}%
          </Badge>
        )}
        {!product.inStock && <div className="stock-badge">Out of Stock</div>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <Rating value={Math.round(product.rating)} max={5} size="sm" />
          <span className="rating-text">({product.reviews})</span>
        </div>

        <div className="product-price">
          <span className="price-current">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="price-original">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button
          variant="primary"
          size="sm"
          fullWidth
          disabled={!product.inStock}
          onClick={(e) => {
            e.preventDefault();
            onAddToCart && onAddToCart(product);
          }}
          className="add-to-cart-btn"
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </Link>
  );
};
