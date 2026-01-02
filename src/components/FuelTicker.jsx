import React from 'react';
import { fuelPrices } from '../data/fuel';
import { Zap, Droplet } from 'lucide-react';
import './FuelTicker.css';

const FuelTicker = () => {
    return (
        <div className="fuel-ticker-container">
            <div className="container ticker-content">
                <div className="ticker-label">LIVE PRICES</div>
                <div className="ticker-items">
                    {fuelPrices.map((fuel) => (
                        <div key={fuel.type} className="ticker-item">
                            {fuel.type.includes('EV') ? <Zap size={16} className="icon-ev" /> : <Droplet size={16} className="icon-fuel" />}
                            <span className="fuel-type">{fuel.type}</span>
                            <span className="fuel-price">${fuel.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FuelTicker;
