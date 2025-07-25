import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import "../styles/ChoosePage.css";

function ChoosePage() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = "/login";
      return;
    }
  }, []);
  return (
    <div className="choose-page">
      <button
        className="my-profile-btn"
        onClick={() => navigate("/my-profile")}
      >
        👤
      </button>
      <h2 className="choose-title">What would you like to do?</h2>
      <div className="choose-options">
        <button className="choose-card buy" onClick={() => navigate("/buy")}>
          <span role="img" aria-label="Buy">
            🛒
          </span>
          <h3>Buy Book</h3>
        </button>
        <button className="choose-card sell" onClick={() => navigate("/sell")}>
          <span role="img" aria-label="Sell">
            🏷️
          </span>
          <h3>Sell Book</h3>
        </button>
      </div>
    </div>
  );
}

export default ChoosePage;
