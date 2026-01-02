import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';
import { Ticket } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import './Rewards.css';

const Rewards = () => {
    const { user, updatePoints } = useAuth();
    const { addToast } = useToast();

    // Mock offers with images (using placeholders for now)
    // Mock offers with images (using placeholders for now)
    const offers = [
        { id: 1, title: "Fresh Brewed Coffee", points: 50, image: "https://placehold.co/150x200/29B6F6/FFFFFF?text=Coffee" },
        { id: 2, title: "Pepperoni Pizza Slice", points: 75, image: "https://placehold.co/150x200/29B6F6/FFFFFF?text=Pizza" },
        { id: 3, title: "Fountain Drink 32oz", points: 60, image: "https://placehold.co/150x200/29B6F6/FFFFFF?text=Soda" },
        { id: 4, title: "Fast n' Friendly Water", points: 40, image: "https://placehold.co/150x200/29B6F6/FFFFFF?text=Water" },
        { id: 5, title: "Glazed Donut", points: 40, image: "https://placehold.co/150x200/29B6F6/FFFFFF?text=Donut" },
        { id: 6, title: "Bag of Chips", points: 90, image: "https://placehold.co/150x200/29B6F6/FFFFFF?text=Chips" }
    ];

    const handleRedeem = (offer) => {
        if (!user) {
            addToast("Please login to redeem offers.", "info");
            return;
        }

        if (user.points >= offer.points) {
            updatePoints(-offer.points);
            triggerConfetti();
            addToast(`Redeemed ${offer.title}!`, "success");
        } else {
            addToast(`Insufficient points. Need ${offer.points - user.points} more!`, "error");
        }
    };

    return (
        <div className="page-rewards">
            <div className="container">
                <div className="rewards-header">
                    <h1 className="text-gradient">Hello, {user?.name}</h1>
                    <div className="points-display">
                        <span className="points-val">{user?.points}</span>
                        <span className="points-label">POINTS</span>
                    </div>
                </div>

                <div className="daily-game-banner">
                    <div className="game-content">
                        <Ticket size={32} />
                        <div>
                            <h3>Play Daily Scratch & Win</h3>
                            <p>Win up to 500 bonus points every day!</p>
                        </div>
                    </div>
                    <Link to="/scratch-win" className="btn-primary">Play Now</Link>
                </div>

                <div className="rewards-grid-layout">
                    <div className="main-rewards full-width">
                        <section className="rewards-section">
                            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Available Offers</h2>
                            <div className="offers-grid-revamp">
                                {offers.map(offer => (
                                    <div key={offer.id} className="offer-card-revamp">
                                        <div className="offer-image-container">
                                            <img src={offer.image} alt={offer.title} />
                                            {/* Decorative elements to mimic screenshot */}
                                            <div className="decor-star star-1">★</div>
                                            <div className="decor-star star-2">★</div>
                                        </div>
                                        <div className="offer-content">
                                            <h3>{offer.title}</h3>
                                            <p className="points-badge">{offer.points} Points</p>
                                            <button
                                                className="btn-redeem"
                                                onClick={() => handleRedeem(offer)}
                                            >
                                                REDEEM
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="rewards-sidebar">
                        <Leaderboard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;
