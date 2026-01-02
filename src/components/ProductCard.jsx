import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [imageError, setImageError] = React.useState(false);

    React.useEffect(() => {
        if (!product.image) {
            setIsVisible(false);
            return;
        }
        const img = new Image();
        img.src = product.image;
        img.onerror = () => {
            setIsVisible(false);
        };
    }, [product.image]);

    if (!isVisible) return null;

    return (
        <div className="product-card">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                <div className="product-badge">{product.category}</div>
            </div>
            <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <Link to="/locations" className="btn-locate">
                        <MapPin size={16} /> Find Store
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
