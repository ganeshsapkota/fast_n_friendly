import React from 'react';
import { fuelPrices, chargingStations } from '../data/fuel';
import { Zap, Droplet, BatteryCharging, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Fuel.css';

const Fuel = () => {
    return (
        <div className="page-fuel">
            <div className="container">
                <header className="fuel-header">
                    <h1 className="text-gradient">Fueling & Charging</h1>
                    <p>Standard fuels and high-speed EV charging available at all major hubs.</p>
                </header>

                <div className="fuel-grid">
                    {/* Standard Fuel Section */}
                    <div className="fuel-card traditional">
                        <div className="card-icon">
                            <Droplet size={32} />
                        </div>
                        <h2>Traditional Fuels</h2>
                        <div className="price-list">
                            {fuelPrices.filter(f => !f.type.includes('EV')).map(fuel => (
                                <div key={fuel.type} className="price-row">
                                    <span className="type">{fuel.type}</span>
                                    <span className="price">${fuel.price} <span className="unit">/ gal</span></span>
                                </div>
                            ))}
                        </div>
                        <p className="disclaimer">*Prices vary by location. Average depicted.</p>
                    </div>

                    {/* EV Charging Section */}
                    <div className="fuel-card electric">
                        <div className="card-icon ev-icon">
                            <Zap size={32} />
                        </div>
                        <h2>EV Speed Charging</h2>
                        <div className="charging-stats">
                            <div className="stat-box">
                                <BatteryCharging size={24} />
                                <span className="stat-val">Up to 350kW</span>
                                <span className="stat-label">Ultra Fast Charge</span>
                            </div>
                            <div className="stat-box">
                                <CheckCircle size={24} />
                                <span className="stat-val">100% Green</span>
                                <span className="stat-label">Energy Source</span>
                            </div>
                        </div>

                        <div className="connectors-list">
                            <h3>Available Connectors</h3>
                            {chargingStations.map(station => (
                                <div key={station.type} className="connector-row">
                                    <div className="connector-info">
                                        <span className="c-type">{station.type}</span>
                                        <span className="c-power">{station.power}</span>
                                    </div>
                                    <span className={`status-badge ${station.status === 'Available' ? 'available' : 'busy'}`}>
                                        {station.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="fuel-cta">
                    <h2>Ready to fill up?</h2>
                    <Link to="/locations" className="btn-primary">Find Nearest Station</Link>
                </div>
            </div>
        </div>
    );
};

export default Fuel;
