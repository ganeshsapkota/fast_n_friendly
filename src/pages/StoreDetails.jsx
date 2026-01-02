import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { stores } from '../data/stores';
import { MapPin, Clock, Phone, Navigation, ArrowLeft, Zap, Coffee, Pizza, Info, Heart } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import './StoreDetails.css';

const StoreDetails = () => {
    const { id } = useParams();
    const [store, setStore] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToast } = useToast();

    useEffect(() => {
        // Simulate API fetch
        const foundStore = stores.find(s => s.id === parseInt(id));
        setStore(foundStore);

        // Check favorite status
        const favorites = JSON.parse(localStorage.getItem('fnf_favorites') || '[]');
        setIsFavorite(favorites.includes(foundStore?.id));
    }, [id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('fnf_favorites') || '[]');
        if (isFavorite) {
            const newFavorites = favorites.filter(favId => favId !== store.id);
            localStorage.setItem('fnf_favorites', JSON.stringify(newFavorites));
            setIsFavorite(false);
            addToast('Removed from favorites', 'info');
        } else {
            favorites.push(store.id);
            localStorage.setItem('fnf_favorites', JSON.stringify(favorites));
            setIsFavorite(true);
            addToast('Added to favorites!', 'success');
        }
    };

    if (!store) return <div className="container" style={{ paddingTop: '5rem' }}>Loading...</div>;

    return (
        <div className="page-store-details">
            <div className="store-hero">
                <div className="store-hero-overlay"></div>
                <div className="container store-hero-content">
                    <Link to="/locations" className="back-link"><ArrowLeft size={16} /> Back to Locator</Link>
                    <h1>{store.name}</h1>
                    <div className="store-badges">
                        <span className="badge-open status-open">Open Now</span>
                        <span className="badge-dist">{store.distance} away</span>
                        <button
                            onClick={toggleFavorite}
                            className={`btn-favorite ${isFavorite ? 'active' : ''}`}
                            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                        >
                            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container store-content-grid">
                {/* Main Info */}
                <div className="main-info">
                    <section className="info-block">
                        <h2>Location & Contact</h2>
                        <div className="detail-row">
                            <MapPin className="detail-icon" />
                            <div>
                                <p className="address-text">{store.address}</p>
                                <button className="btn-secondary btn-sm">Get Directions</button>
                            </div>
                        </div>
                        <div className="detail-row">
                            <Phone className="detail-icon" />
                            <p>(555) 123-4567</p>
                        </div>
                        <div className="detail-row">
                            <Clock className="detail-icon" />
                            <p>{store.hours}</p>
                        </div>
                    </section>

                    <section className="info-block">
                        <h2>Amenities</h2>
                        <div className="amenities-grid">
                            {store.services.map(service => (
                                <div key={service} className="amenity-item">
                                    {service === 'Fuel' && <Info size={20} />}
                                    {service === 'EV Charging' && <Zap size={20} />}
                                    {service === 'Coffee' && <Coffee size={20} />}
                                    {service === 'Pizza' && <Pizza size={20} />}
                                    {/* Default icon */}
                                    {['Fuel', 'EV Charging', 'Coffee', 'Pizza'].indexOf(service) === -1 && <Info size={20} />}
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar / Map */}
                <div className="store-sidebar">
                    <div className="mini-map-placeholder">
                        <span>Map View</span>
                    </div>

                    <div className="promo-box">
                        <h3>Store Specials</h3>
                        <div className="promo-item">
                            <span className="promo-tag">DEAL</span>
                            <p>Any Size Coffee $0.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreDetails;
