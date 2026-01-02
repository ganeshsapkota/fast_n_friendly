import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            triggerConfetti();
            setSubscribed(true);
            setTimeout(() => {
                setEmail('');
                setSubscribed(false);
            }, 5000);
        }
    };

    return (
        <div className="newsletter-card">
            {subscribed ? (
                <div className="newsletter-success">
                    <CheckCircle size={48} className="success-icon" />
                    <h3>You're on the list!</h3>
                    <p>Watch your inbox for exclusive deals.</p>
                </div>
            ) : (
                <>
                    <h3>Join the Inner Circle</h3>
                    <p>Get weekly coupons and special offers.</p>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-icon">
                            <Send size={18} />
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Newsletter;
