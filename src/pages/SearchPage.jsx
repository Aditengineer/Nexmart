import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts, searchProducts } from "../utils/mockData";
import { ProductGrid } from "../components/product/ProductGrid";
import { Filters } from "../components/product/Filters";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useCart";
import { useFilter } from "../hooks/useCart";
import "./SearchPage.css";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const query = searchParams.get("q") || "";
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filters, updateFilter, clearFilters, filteredProducts } =
    useFilter(products);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let data;
        if (query) {
          data = await searchProducts(query);
        } else {
          data = await fetchProducts({ category });
        }
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [query, category]);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    addToast(`Added ${product.name} to cart`, "success");
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-header">
          <h1>{query ? `Search Results for "${query}"` : "Products"}</h1>
          <p className="results-count">
            Found {filteredProducts.length} product(s)
          </p>
        </div>

        <div className="search-content">
          <aside className="search-sidebar">
            <Filters
              filters={filters}
              onFilterChange={updateFilter}
              onClear={clearFilters}
            />
          </aside>

          <main className="search-main">
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              loading={loading}
            />
          </main>
        </div>
      </div>
    </div>
  );
};
