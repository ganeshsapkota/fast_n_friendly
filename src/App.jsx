import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FoodCatalog from './pages/FoodCatalog';
import Fuel from './pages/Fuel';
import StoreLocator from './pages/StoreLocator';
import Rewards from './pages/Rewards';
import Login from './pages/Login';
import GiftCards from './pages/GiftCards';
import About from './pages/About';
import StoreDetails from './pages/StoreDetails';
import NotFound from './pages/NotFound';
import ScratchWin from './pages/ScratchWin';
import Employment from './pages/Employment';
import TobaccoPromotions from './pages/TobaccoPromotions';
import DeliExpress from './pages/DeliExpress';
import ProtectedRoute from './components/ProtectedRoute';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="food" element={<FoodCatalog />} />
          <Route path="fuel" element={<Fuel />} />
          <Route path="locations" element={<StoreLocator />} />
          <Route path="locations/:id" element={<StoreDetails />} />
          <Route path="rewards" element={
            <ProtectedRoute>
              <Rewards />
            </ProtectedRoute>
          } />
          <Route path="scratch-win" element={
            <ProtectedRoute>
              <ScratchWin />
            </ProtectedRoute>
          } />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Employment />} />
          <Route path="tobacco" element={<TobaccoPromotions />} />
          <Route path="deli-express" element={<DeliExpress />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
