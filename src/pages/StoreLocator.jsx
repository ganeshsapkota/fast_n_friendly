import React, { useState } from 'react';
import { stores, servicesList } from '../data/stores';
import MapPlaceholder from '../components/MapPlaceholder';
import StoreCard from '../components/StoreCard';
import { Search, Filter } from 'lucide-react';
import './StoreLocator.css';

const StoreLocator = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStore, setSelectedStore] = useState(null);

    const toggleService = (service) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    const filteredStores = stores.filter(store => {
        const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            store.address.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesServices = selectedServices.length === 0 ||
            selectedServices.every(s => {
                if (s === "Open 24/7") return store.hours === "24/7";
                return store.services.includes(s);
            });

        return matchesSearch && matchesServices;
    });

    return (
        <div className="page-locator">
            <div className="locator-sidebar">
                <div className="search-box">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="City, State, or Zip"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="filters-section">
                    <div className="filters-header">
                        <Filter size={16} /> Filters
                    </div>
                    <div className="filter-tags">
                        {servicesList.map(service => (
                            <button
                                key={service}
                                className={`filter-chip ${selectedServices.includes(service) ? 'active' : ''}`}
                                onClick={() => toggleService(service)}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="stores-list">
                    {filteredStores.map(store => (
                        <StoreCard
                            key={store.id}
                            store={store}
                            isSelected={selectedStore?.id === store.id}
                            onClick={() => setSelectedStore(store)}
                        />
                    ))}
                    {filteredStores.length === 0 && (
                        <div className="no-results">No stores found matching your criteria.</div>
                    )}
                </div>
            </div>

            <div className="locator-map">
                <MapPlaceholder
                    stores={filteredStores}
                    selectedStore={selectedStore}
                    onSelectStore={setSelectedStore}
                />
            </div>
        </div>
    );
};

export default StoreLocator;
