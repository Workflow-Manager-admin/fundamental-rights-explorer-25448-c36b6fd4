import React from "react";
import { useNavigate } from "react-router-dom";
import rightsData from "../data/rights";
import "./RightsOverview.css";

/**
 * RightsOverview
 * Main page component listing all fundamental rights as large clickable cards.
 * Navigates to the detail page when a right is clicked.
 */
// PUBLIC_INTERFACE
function RightsOverview() {
  const navigate = useNavigate();
  const handleRightClick = (right, idx) => {
    navigate(`/right/${idx}`);
  };

  return (
    <div className="rights-overview-root">
      <div className="rights-overview-header">
        <h1 className="rights-overview-title">Fundamental Rights Explorer</h1>
        <p className="rights-overview-description">
          Explore the Fundamental Rights in the Indian Constitution.<br />
          Click on a right to learn more about its meaning, real-life cases, and test your knowledge.
        </p>
      </div>
      <div className="rights-overview-list">
        {rightsData.map((right, idx) => (
          <button
            key={right.title}
            className="right-card"
            onClick={() => handleRightClick(right, idx)}
            type="button"
            tabIndex={0}
            aria-label={`View details for ${right.title}`}
          >
            <span className="right-card-title">{right.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RightsOverview;
