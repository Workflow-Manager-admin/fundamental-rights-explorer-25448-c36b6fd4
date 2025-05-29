import React from "react";
import { useNavigate } from "react-router-dom";
import rightsData from "../data/rights";
import "./RightsOverview.css";
import { JusticeIcon } from "./Icon";

/**
 * RightsOverview
 * Main page component listing all fundamental rights as large clickable cards.
 * Navigates to the detail page when a right is clicked.
 */
// PUBLIC_INTERFACE
function RightsOverview() {
  const navigate = useNavigate();

  /**
   * Handles click on a right card/button.
   * Navigates to the corresponding right's detail page using its index.
   * Ensures both keyboard and mouse activation are supported for accessibility.
   */
  const handleRightClick = (idx) => {
    // Diagnostic: Show alert and console.log to verify event and then navigate
    alert("Clicked! idx=" + idx);
    console.log("RightsOverview card clicked. idx:", idx);
    // Defensive: prevent invalid navigation if idx is not a valid right
    if (typeof idx === "number" && idx >= 0 && idx < rightsData.length) {
      navigate(`/right/${idx}`);
    }
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
            onClick={() => handleRightClick(idx)}
            type="button"
            tabIndex={0}
            aria-label={`View details for ${right.title}`}
          >
            <span aria-hidden="true" style={{ marginRight: 13, display: "inline-flex" }}>
              <JusticeIcon size={28} />
            </span>
            <span className="right-card-title">{right.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RightsOverview;
