import React from 'react';
import { MapPin } from 'lucide-react';
import './MapPlaceholder.css';

const MapPlaceholder = ({ stores, selectedStore, onSelectStore }) => {
    return (
        <div className="map-placeholder">
            <div className="map-bg"></div>
            {stores.map(store => (
                <button
                    key={store.id}
                    className={`map-pin ${selectedStore?.id === store.id ? 'active' : ''}`}
                    style={{ left: `${store.coords.x}%`, top: `${store.coords.y}%` }}
                    onClick={() => onSelectStore(store)}
                    title={store.name}
                >
                    <MapPin size={selectedStore?.id === store.id ? 32 : 24} />
                    <span className="pin-label">{store.name}</span>
                </button>
            ))}
            <div className="map-overlay-text">Interactive Map Zone</div>
        </div>
    );
};

export default MapPlaceholder;
