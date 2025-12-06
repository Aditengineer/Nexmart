import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts, CATEGORIES } from "../utils/mockData";
import { ProductGrid } from "../components/product/ProductGrid";
import { Button } from "../components/common/Button";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useCart";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setFeaturedProducts(data.slice(0, 8));
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    addToast(`Added ${product.name} to cart`, "success");
  };

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Nexmart</h1>
          <p>Discover thousands of products with amazing deals</p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate("/search?q=")}
          >
            Explore Products
          </Button>
        </div>
        <div className="hero-background">
          <div className="hero-shape-1"></div>
          <div className="hero-shape-2"></div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/?category=${category.slug}`}
              className="category-card"
              style={{ borderColor: category.color }}
            >
              <div
                className="category-icon"
                style={{ backgroundColor: category.color }}
              >
                {category.name.charAt(0)}
              </div>
              <h3>{category.name}</h3>
              <p>Explore →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h3>Limited Time Offer</h3>
          <p>Get up to 40% off on selected items</p>
          <Button variant="outline" size="md">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/search?q=" className="view-all-link">
            View All →
          </Link>
        </div>
        <ProductGrid
          products={featuredProducts}
          onAddToCart={handleAddToCart}
          loading={loading}
        />
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h3>Get Exclusive Deals</h3>
          <p>Subscribe to our newsletter for special offers and updates</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="your@email.com" required />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};
