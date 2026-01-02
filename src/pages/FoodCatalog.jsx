import React, { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './FoodCatalog.css';

const FoodCatalog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
    };

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="page-catalog">
            <div className="container">
                <header className="catalog-header">
                    <h1 className="text-gradient">Food & Beverages</h1>
                    <p className="text-muted">Explore our premium selection of fresh food and drinks.</p>
                </header>

                <div className="category-filter">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            {/* AgeGate removed */}
        </div>
    );
};

export default FoodCatalog;
