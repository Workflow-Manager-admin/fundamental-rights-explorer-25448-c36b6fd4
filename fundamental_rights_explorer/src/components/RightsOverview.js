import React from "react";

// PUBLIC_INTERFACE
// Renders a large centered button for test click diagnosis.
// If anything tried to overlay or block pointer events, it would be visible or intercepted here.
export default function RightsOverview() {
  // Inline style to ensure nothing (including parent) can block pointer events.
  return (
    <div
      style={{
        padding: 100,
        textAlign: "center",
        position: "relative",
        isolation: "isolate",
        zIndex: 0,
        pointerEvents: "auto",
        background: "transparent",
        minHeight: "60vh"
      }}
    >
      <button
        type="button"
        className="btn"
        style={{
          fontSize: "2rem",
          padding: "25px 50px",
          pointerEvents: "auto",
          zIndex: 10,
          position: "relative",
        }}
        onClick={() => alert("test")}
        data-testid="diagnostic-btn"
        tabIndex={0}
      >
        TEST
      </button>
      {/* Diagnostic overlay: if this is visible, then some overlay is affecting interaction */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
}
