import React from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { searchProducts } from "../utils/mockData";

export const useCart = () => {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

export const useToast = () => {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    (message, type = "info", duration = 3000) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { id, message, type, duration }]);
    },
    []
  );

  const removeToast = React.useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const search = React.useCallback(async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setSearchQuery(query);
    setIsSearching(true);
    try {
      const results = await searchProducts(query);
      setSearchResults(results);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const clearSearch = React.useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
  }, []);

  return {
    searchQuery,
    searchResults,
    isSearching,
    search,
    clearSearch,
  };
};

export const useFilter = (products = []) => {
  const [filters, setFilters] = React.useState({
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    sort: "newest",
  });

  const filteredProducts = React.useMemo(() => {
    let result = [...products];

    if (filters.minPrice) {
      result = result.filter((p) => p.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= filters.maxPrice);
    }

    if (filters.minRating) {
      result = result.filter((p) => p.rating >= filters.minRating);
    }

    if (filters.sort) {
      if (filters.sort === "price-asc") {
        result.sort((a, b) => a.price - b.price);
      } else if (filters.sort === "price-desc") {
        result.sort((a, b) => b.price - a.price);
      } else if (filters.sort === "rating") {
        result.sort((a, b) => b.rating - a.rating);
      } else if (filters.sort === "newest") {
        result.sort((a, b) => b.id - a.id);
      }
    }

    return result;
  }, [products, filters]);

  const updateFilter = React.useCallback((filterKey, value) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  }, []);

  const clearFilters = React.useCallback(() => {
    setFilters({
      minPrice: 0,
      maxPrice: 1000,
      minRating: 0,
      sort: "newest",
    });
  }, []);

  return {
    filters,
    updateFilter,
    clearFilters,
    filteredProducts,
  };
};
