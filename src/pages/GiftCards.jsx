import React from 'react';
import { Gift, CreditCard, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './GiftCards.css';

const GiftCards = () => {
    return (
        <div className="page-giftcards">
            <div className="container">
                <header className="gift-header">
                    <h1 className="text-gradient">Give the Gift of Fuel & Food</h1>
                    <p>The perfect gift for commuters, road trippers, and coffee lovers.</p>
                </header>

                <div className="gift-grid">
                    {/* Physical Card */}
                    <div className="gift-card-option">
                        <div className="card-visual physical">
                            <span className="logo-text">FUELSTOP</span>
                            <div className="card-chip"></div>
                            <span className="card-val">Gift Card</span>
                        </div>
                        <div className="option-content">
                            <h2>Physical Gift Card</h2>
                            <ul className="benefits-list">
                                <li><Gift size={16} /> Perfect for birthdays & holidays</li>
                                <li><CreditCard size={16} /> Reloadable in-store</li>
                                <li><ShoppingBag size={16} /> No expiration date</li>
                            </ul>
                            <p className="availability-text">Available for purchase at any FuelStop location.</p>
                            <Link to="/locations" className="btn-primary">Find a Store</Link>
                        </div>
                    </div>

                    {/* Digital Card */}
                    <div className="gift-card-option">
                        <div className="card-visual digital">
                            <span className="logo-text">FUELSTOP</span>
                            <span className="digital-badge">DIGITAL</span>
                            <span className="card-val">e-Gift</span>
                        </div>
                        <div className="option-content">
                            <h2>Digital e-Gift</h2>
                            <ul className="benefits-list">
                                <li><Gift size={16} /> Send instantly via email</li>
                                <li><CreditCard size={16} /> Add to Apple/Google Wallet</li>
                                <li><ShoppingBag size={16} /> Contactless redemption</li>
                            </ul>
                            <p className="availability-text">Buy online (Coming Soon) or purchase codes in-store.</p>
                            <button className="btn-secondary" disabled>Online Purchase Coming Soon</button>
                        </div>
                    </div>
                </div>

                <div className="balance-checker">
                    <h2>Check Your Balance</h2>
                    <div className="balance-form">
                        <input type="text" placeholder="Card Number" />
                        <input type="text" placeholder="PIN" />
                        <button className="btn-check">Check Balance</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
