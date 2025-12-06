import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../utils/mockData";
import { Button } from "../components/common/Button";
import { Rating } from "../components/common/Rating";
import { Badge } from "../components/common/Badge";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useCart";
import "./ProductDetailPage.css";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toasts, addToast } = useToast();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      addToast(`Added ${quantity} item(s) to cart`, "success");
      setTimeout(() => navigate("/cart"), 1000);
    }
  };

  const handleAddToWishlist = () => {
    setInWishlist(!inWishlist);
    addToast(
      inWishlist ? "Removed from wishlist" : "Added to wishlist",
      inWishlist ? "info" : "success"
    );
  };

  if (loading) {
    return <div className="product-detail-loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="product-detail-error">Product not found</div>;
  }

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Images */}
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
            {discountPercentage > 0 && (
              <Badge variant="secondary" className="price-badge">
                -{discountPercentage}%
              </Badge>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="product-info-section">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={`/?category=${product.category}`}>
              {product.category}
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <h1 className="product-title">{product.name}</h1>

          <div className="product-rating-section">
            <Rating
              value={Math.round(product.rating)}
              max={5}
              size="lg"
              count={product.reviews}
            />
            <p className="rating-description">
              Highly rated by {product.reviews} customers
            </p>
          </div>

          <div className="product-pricing">
            <div className="price">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {discountPercentage > 0 && (
              <p className="savings">Save {discountPercentage}% on this item</p>
            )}
          </div>

          <div className="product-status">
            {product.inStock ? (
              <p className="in-stock">✓ In Stock - Ready to ship</p>
            ) : (
              <p className="out-of-stock">Out of Stock</p>
            )}
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="product-specs">
            <h3>Key Features</h3>
            <ul>
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* Purchase Options */}
          <div className="purchase-section">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>

            <Button
              variant="primary"
              size="lg"
              fullWidth
              disabled={!product.inStock}
              onClick={handleAddToCart}
              className="add-to-cart-button"
            >
              {product.inStock ? "🛒 Add to Cart" : "Out of Stock"}
            </Button>

            <Button
              variant="outline"
              size="lg"
              fullWidth
              onClick={handleAddToWishlist}
              className={`wishlist-button ${inWishlist ? "active" : ""}`}
            >
              {inWishlist ? "❤️ In Wishlist" : "🤍 Add to Wishlist"}
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="shipping-info">
            <p>🚚 Free shipping on orders over $50</p>
            <p>↩️ 30-day returns & exchanges</p>
            <p>🛡️ Secure checkout & buyer protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};
