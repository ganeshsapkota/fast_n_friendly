import React from 'react';
import { MapPin, Navigation, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './StoreCard.css';

const StoreCard = ({ store, isSelected, onClick }) => {
    return (
        <div
            className={`store-check-card ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <div className="store-header">
                <h3>{store.name}</h3>
                <span className="distance-badge">{store.distance}</span>
            </div>
            <p className="store-address">{store.address}</p>

            <div className="store-meta">
                <div className="meta-item">
                    <Clock size={14} /> {store.hours}
                </div>
                <Link to={`/locations/${store.id}`} className="details-link">
                    Details <ChevronRight size={14} />
                </Link>
            </div>

            <div className="services-tags">
                {store.services.slice(0, 3).map(service => (
                    <span key={service} className="tag">{service}</span>
                ))}
                {store.services.length > 3 && <span className="tag">+{store.services.length - 3}</span>}
            </div>

            <div className="store-actions">
                <button className="btn-directions">
                    <Navigation size={16} /> Get Directions
                </button>
            </div>
        </div>
    );
};

export default StoreCard;
