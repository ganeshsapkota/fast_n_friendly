import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'Fast N Friendly C-Stores';

        const routeTitles = {
            '/': 'Home - Fast N Friendly',
            '/food': 'Food & Drink - Fast N Friendly',
            '/fuel': 'Fuel Prices & EV - Fast N Friendly',
            '/locations': 'Store Locator - Fast N Friendly',
            '/rewards': 'My Rewards - Fast N Friendly',
            '/gift-cards': 'Gift Cards - Fast N Friendly',
            '/about': 'About Us - Fast N Friendly',
            '/careers': 'Join Our Team - Fast N Friendly',
            '/login': 'Login / Join - Fast N Friendly'
        };

        // Handle dynamic routes partly
        if (path.startsWith('/locations/')) {
            title = 'Store Details - Fast N Friendly';
        } else if (routeTitles[path]) {
            title = routeTitles[path];
        }

        document.title = title;
    }, [location]);
};

export default usePageTitle;
