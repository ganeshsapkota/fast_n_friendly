import React from 'react';
import { promotions } from '../data/promotions';
import { Clock } from 'lucide-react';
import './Specials.css';

const Specials = () => {
    return (
        <section className="specials-section">
            <div className="container">
                <h2 className="section-title">MONTHLY <span className="text-gradient">SPECIALS</span></h2>

                <div className="specials-grid">
                    {promotions.map((promo) => (
                        <div key={promo.id} className="special-card">
                            <div className="special-image" style={{ backgroundImage: `url(${promo.image})` }}>
                                <div className="special-overlay"></div>
                                <div className="special-badge">In-Store Only</div>
                            </div>
                            <div className="special-content">
                                <h3>{promo.title}</h3>
                                <p>{promo.description}</p>
                                <div className="special-footer">
                                    <div className="special-timer">
                                        <Clock size={16} /> Ends {new Date(promo.expires).toLocaleDateString()}
                                    </div>
                                    <button className="btn-link">Find Store</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;
