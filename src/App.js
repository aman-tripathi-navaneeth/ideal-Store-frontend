import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ChoosePage from './components/ChoosePage';
import BuyBooksPage from './components/BuyBooksPage';
import SellerForm from './components/SellerForm';
import ProfilePage from './components/ProfilePage';
import MyProfilePage from './components/MyProfilePage';
import AppContent from './components/AppContent';
import MobileBlocker from './components/MobileBlocker';

// Import device detection utility
import { isMobileDevice, addDeviceChangeListener } from './utils/deviceDetection';

// Import test utility for development
if (process.env.NODE_ENV === 'development') {
  import('./utils/testMobileDetection');
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on component mount
    setIsMobile(isMobileDevice());

    // Add listener for window resize (orientation changes, etc.)
    const cleanup = addDeviceChangeListener((deviceInfo) => {
      setIsMobile(deviceInfo.isMobile || deviceInfo.isTablet);
    });

    // Cleanup listener on component unmount
    return cleanup;
  }, []);

  // Show mobile blocker if accessing from mobile/tablet
  if (isMobile) {
    return <MobileBlocker />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route path="/buy" element={<BuyBooksPage />} />
        <Route path="/sell" element={<SellerForm />} />
        <Route path="/profile/:rollNumber" element={<ProfilePage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;