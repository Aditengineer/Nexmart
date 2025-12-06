import React, { useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import "./Filters.css";

export const Filters = ({ filters, onFilterChange, onClear }) => {
  const [priceRange, setPriceRange] = useState([
    filters.minPrice,
    filters.maxPrice,
  ]);

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseFloat(value);
    setPriceRange(newRange);
    onFilterChange("minPrice", newRange[0]);
    onFilterChange("maxPrice", newRange[1]);
  };

  return (
    <div className="filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <Button variant="ghost" size="sm" onClick={onClear}>
          Clear All
        </Button>
      </div>

      {/* Price Filter */}
      <div className="filter-group">
        <h4>Price Range</h4>
        <div className="filter-prices">
          <div className="price-input">
            <label>Min</label>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
              min="0"
              max="1000"
            />
          </div>
          <span className="price-separator">-</span>
          <div className="price-input">
            <label>Max</label>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
              min="0"
              max="1000"
            />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(0, e.target.value)}
          className="price-slider"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(1, e.target.value)}
          className="price-slider"
        />
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <h4>Rating</h4>
        <div className="filter-options">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="filter-option">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.minRating === rating}
                onChange={(e) =>
                  onFilterChange("minRating", parseFloat(e.target.value))
                }
              />
              <span>{"★".repeat(rating)} & up</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="filter-group">
        <h4>Sort By</h4>
        <select
          value={filters.sort}
          onChange={(e) => onFilterChange("sort", e.target.value)}
          className="filter-select"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
};
