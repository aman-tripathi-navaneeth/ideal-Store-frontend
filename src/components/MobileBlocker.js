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
          Desktop Mode Required
        </h1>
        <p className="mobile-blocker-message">
          Ideal Bookstore requires desktop mode for the best experience.
        </p>
        <p className="mobile-blocker-instruction">
          Please switch to desktop mode in your browser or use a larger screen (1024px+ width) to access all features.
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
        <div className="mobile-blocker-instructions">
          <p><strong>How to switch to desktop mode:</strong></p>
          <p>📱 <strong>Mobile:</strong> Use browser menu → "Desktop site" or "Request desktop site"</p>
          <p>💻 <strong>Browser:</strong> Make your browser window wider (1024px+)</p>
          <p>🔄 <strong>Tablet:</strong> Rotate to landscape or use desktop mode</p>
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