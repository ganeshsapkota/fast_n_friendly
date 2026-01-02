import React from 'react';
import Navbar from './Navbar';
import { Outlet, Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const Layout = () => {
    usePageTitle();

    return (
        <div className="app-layout">
            <Navbar />
            <div className="main-content">
                <Outlet />
            </div>
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-links">
                        <Link to="/about">About Us</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/locations">Locations</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                    <p className="copyright">© 2025 Fast N Friendly C-Stores. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
