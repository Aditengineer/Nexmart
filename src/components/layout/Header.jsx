import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { Badge } from "../common/Badge";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useCart";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const { getCartItemCount } = useCart();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate("/");
  };

  const cartCount = getCartItemCount();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="logo-icon">★</div>
          <span className="logo-text">Nexmart</span>
        </Link>

        {/* Search Bar */}
        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" aria-label="Search">
            🔍
          </button>
        </form>

        {/* Right Section */}
        <div className="header-right">
          {/* Cart */}
          <Link to="/cart" className="header-icon-link">
            <span className="header-icon">🛒</span>
            {cartCount > 0 && <Badge variant="secondary">{cartCount}</Badge>}
          </Link>

          {/* Auth */}
          {user ? (
            <div className="profile-menu">
              <button
                className="profile-button"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                aria-label="Profile menu"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="profile-avatar"
                />
              </button>
              {showProfileMenu && (
                <div className="profile-dropdown">
                  <div className="profile-info">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="profile-avatar-lg"
                    />
                    <div>
                      <p className="profile-name">{user.name}</p>
                      <p className="profile-email">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <Link to="/profile" className="profile-link">
                    👤 My Profile
                  </Link>
                  <Link to="/orders" className="profile-link">
                    📦 My Orders
                  </Link>
                  <Link to="/wishlist" className="profile-link">
                    ❤️ Wishlist
                  </Link>
                  <hr />
                  <button className="profile-logout" onClick={handleLogout}>
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="header-auth">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
