import React from "react";

// PUBLIC_INTERFACE
export default function RightsOverview() {
  return (
    <div style={{ padding: 100, textAlign: "center" }}>
      <button
        type="button"
        className="btn"
        style={{
          fontSize: "2rem",
          padding: "25px 50px",
        }}
        onClick={() => alert("test")}
      >
        TEST
      </button>
    </div>
  );
}
