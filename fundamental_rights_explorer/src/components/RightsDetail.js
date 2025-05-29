import React from "react";
import { useParams, Link } from "react-router-dom";
import rightsData from "../data/rights";
import "./RightsOverview.css"; // Reuse core styling
import Quiz from "./Quiz";
import { LightbulbIcon, GavelIcon } from "./Icon";

// PUBLIC_INTERFACE
function RightsDetail() {
  const { rightId } = useParams();
  const idx = parseInt(rightId, 10);

  if (isNaN(idx) || idx < 0 || idx >= rightsData.length) {
    return (
      <div className="rights-overview-root" style={{ textAlign: "center", marginTop: 100 }}>
        <h2>Right not found</h2>
        <Link className="btn" to="/">Back to Overview</Link>
      </div>
    );
  }

  const right = rightsData[idx];

  return (
    <div className="rights-overview-root">
      <div className="rights-overview-header">
        <h1 className="rights-overview-title">{right.title}</h1>
      </div>
      <div className="container" style={{ marginBottom: 32 }}>
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ color: "var(--primary)", fontSize: "1.35rem", display: "flex", alignItems: "center", gap: 9 }}>
            <span aria-hidden="true">
              <LightbulbIcon size={22} />
            </span>
            Explanation
          </h2>
          <div className="description" style={{ color: "#444", fontSize: "1.13rem", marginTop: 8 }}>
            {right.explanation}
          </div>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ color: "var(--primary)", fontSize: "1.2rem", marginBottom: 5, display: "flex", alignItems: "center", gap: 9 }}>
            <span aria-hidden="true">
              <GavelIcon size={22} />
            </span>
            Real-life Example / Case
          </h2>
          <div style={{ color: "#555", background: "#f8f8ff", padding: "18px 18px 10px", borderRadius: 12, boxShadow: "0 2px 8px rgba(25,118,210,0.07)" }}>
            {right.example}
          </div>
        </section>

        <Link to="/" className="btn" style={{ marginBottom: 22, display: "inline-block" }}>
          Back to Overview
        </Link>

        <Quiz quiz={right.quiz || []} />
      </div>
    </div>
  );
}

export default RightsDetail;
