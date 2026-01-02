import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        REFUEL. <br />
                        <span className="text-gradient">RECHARGE.</span> <br />
                        REFRESH.
                    </h1>
                    <p className="hero-subtitle">
                        Experience the future of convenience. Premium fuel, gourmet coffee, and ultra-fast charging at over 12 locations nationwide.
                    </p>

                    <div className="hero-actions">
                        <Link to="/locations" className="btn-primary hero-btn">
                            <MapPin size={20} /> Find Nearest Store
                        </Link>
                        <Link to="/food" className="btn-secondary hero-btn">
                            View Menu <ChevronRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
