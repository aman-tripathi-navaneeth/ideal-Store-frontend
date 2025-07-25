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

// Import viewport detection utility
import { isMobileViewport, addViewportChangeListener } from './utils/deviceDetection';

// Import test utility for development
if (process.env.NODE_ENV === 'development') {
  import('./utils/testMobileDetection');
}

function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Check if viewport is in mobile view on component mount
    setIsMobileView(isMobileViewport());

    // Add listener for window resize (viewport changes)
    const cleanup = addViewportChangeListener((viewportInfo) => {
      setIsMobileView(viewportInfo.isMobile || viewportInfo.isTablet);
    });

    // Cleanup listener on component unmount
    return cleanup;
  }, []);

  // Show mobile blocker if viewport is too small (mobile view)
  if (isMobileView) {
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