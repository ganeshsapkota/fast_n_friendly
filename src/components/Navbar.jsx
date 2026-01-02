import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MapPin, User, Menu, X, Fuel, Coffee, Gift, LogOut, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <img src={logo} alt="Fast N Friendly" style={{ height: '50px', width: 'auto' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <NavLink to="/food" className={({ isActive }) => isActive ? 'active' : ''}>Food & Drink</NavLink>
                    <NavLink to="/fuel" className={({ isActive }) => isActive ? 'active' : ''}>Fuel & EV</NavLink>
                    <NavLink to="/rewards" className={({ isActive }) => isActive ? 'active' : ''}>Rewards</NavLink>
                    <NavLink to="/tobacco" className={({ isActive }) => isActive ? 'active' : ''}>Tobacco</NavLink>
                    <NavLink to="/deli-express" className={({ isActive }) => isActive ? 'active' : ''}>Deli Express</NavLink>
                    <NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : ''}>Careers</NavLink>
                </div>

                <div className="nav-actions desktop-only">
                    <Link to="/locations" className="btn-icon">
                        <MapPin size={20} />
                        <span>Find Store</span>
                    </Link>

                    {user ? (
                        <div className="user-menu" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Link to="/rewards" className="btn-icon">
                                <User size={20} />
                                <span>{user.name.split(' ')[0]}</span>
                            </Link>
                            <button onClick={handleLogout} className="btn-icon" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn-icon">
                            <User size={20} />
                            <span>Login</span>
                        </Link>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/food" onClick={() => setIsOpen(false)}>
                        <Coffee size={18} /> Food & Drink
                    </Link>
                    <Link to="/fuel" onClick={() => setIsOpen(false)}>
                        <Fuel size={18} /> Fuel & EV
                    </Link>
                    <Link to="/rewards" onClick={() => setIsOpen(false)}>
                        <Gift size={18} /> Rewards
                    </Link>
                    <Link to="/tobacco" onClick={() => setIsOpen(false)}>
                        <Gift size={18} /> Tobacco
                    </Link>
                    <Link to="/deli-express" onClick={() => setIsOpen(false)}>
                        <Coffee size={18} /> Deli Express
                    </Link>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>
                        <Users size={18} /> Careers
                    </Link>
                    <Link to="/locations" onClick={() => setIsOpen(false)}>
                        <MapPin size={18} /> Find Store
                    </Link>

                    {user ? (
                        <>
                            <Link to="/rewards" onClick={() => setIsOpen(false)}>
                                <User size={18} /> My Profile
                            </Link>
                            <button onClick={handleLogout} className="mobile-link-btn" style={{ display: 'flex', gap: '1rem', padding: '1rem', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', cursor: 'pointer', textAlign: 'left' }}>
                                <LogOut size={18} /> Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <User size={18} /> Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
