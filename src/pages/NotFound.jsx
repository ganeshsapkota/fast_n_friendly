import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center'
        }}>
            <h1 className="text-gradient" style={{ fontSize: '6rem', marginBottom: '0' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
                Looks like you've taken a wrong turn. The page you are looking for doesn't exist or has been moved.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/" className="btn-primary">
                    <Home size={18} /> Go Home
                </Link>
                <Link to="/locations" className="btn-secondary">
                    <MapPin size={18} /> Find a Store
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
