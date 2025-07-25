import React from 'react';
import '../styles/MobileBlocker.css';

function MobileBlocker() {
  return (
    <div className="mobile-blocker">
      <div className="mobile-blocker-content">
        <div className="mobile-blocker-icon">
          💻
        </div>
        <h1 className="mobile-blocker-title">
          Desktop Only
        </h1>
        <p className="mobile-blocker-message">
          Ideal Bookstore is optimized for desktop experience only.
        </p>
        <p className="mobile-blocker-instruction">
          Please open this website on a desktop or laptop computer to access all features.
        </p>
        <div className="mobile-blocker-features">
          <div className="feature-item">
            <span className="feature-icon">📚</span>
            <span>Browse Books</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <span>Buy & Sell</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎓</span>
            <span>Student Community</span>
          </div>
        </div>
        <div className="mobile-blocker-footer">
          <p>
            <strong>Ideal Institute of Technology</strong>
          </p>
          <p>Making textbooks affordable for every student</p>
        </div>
      </div>
    </div>
  );
}

export default MobileBlocker;