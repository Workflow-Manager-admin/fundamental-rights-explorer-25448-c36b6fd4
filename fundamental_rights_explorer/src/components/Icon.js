import React from "react";

/**
 * Accessible SVG icon components for use in the Fundamental Rights Explorer UI.
 * Each icon adapts colors to the current palette and uses role="img" with accessible labeling.
 */

// PUBLIC_INTERFACE
export function JusticeIcon({ size = 28, color = "var(--accent)" }) {
  return (
    <svg
      aria-label="Justice"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ display: "inline-block", verticalAlign: "middle", color }}
      fill="none"
    >
      <g>
        <ellipse cx="14" cy="24.2" rx="7" ry="1.1" fill="#eaeefc" />
        <path d="M14 21V4.7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M5.5 8.7c.4-2.4 3-3.9 8.5-3.9s8.1 1.5 8.5 3.9"
          stroke="currentColor"
          strokeWidth="1.7"
          fill="none"
        />
        {/* Scales */}
        <path
          d="M7 8.8A3.5 3.5 0 0 0 3.5 12.4c0 1.6 1.3 2.7 3.5 2.7s3.5-1.1 3.5-2.7A3.5 3.5 0 0 0 7 8.8zm0 1.7l2 4.2m-2-4.2-2 4.2"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M21 8.8a3.5 3.5 0 0 1 3.5 3.6c0 1.6-1.3 2.7-3.5 2.7s-3.5-1.1-3.5-2.7A3.5 3.5 0 0 1 21 8.8zm0 1.7l2 4.2m-2-4.2-2 4.2"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </g>
    </svg>
  );
}

// PUBLIC_INTERFACE
export function LightbulbIcon({ size = 22, color = "var(--accent)" }) {
  return (
    <svg
      aria-label="Explanation"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      style={{ display: "inline-block", verticalAlign: "middle", color }}
      fill="none"
    >
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M9 13c.5.95 1.5 1.25 2 0l2-3c.8-1.27-.12-3-1.5-3s-2.28 1.73-1.5 3l2 3z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.17"
      />
      <rect x="9.2" y="15" width="3.6" height="1.2" rx=".6" fill="currentColor" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function GavelIcon({ size = 22, color = "var(--primary)" }) {
  return (
    <svg
      aria-label="Case Example"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      style={{ display: "inline-block", verticalAlign: "middle", color }}
      fill="none"
    >
      {/* Handle */}
      <rect x="2.7" y="18" width="16.5" height="2" rx="1" transform="rotate(-25 2.7 18)" fill="currentColor"/>
      {/* Gavel Head */}
      <rect x="10" y="6" width="5" height="2.3" rx="0.8" transform="rotate(33 10 6)" fill="currentColor" fillOpacity="0.9"/>
      <rect x="12" y="4" width="1.5" height="3.3" rx="0.7" transform="rotate(33 12 4)" fill="#FFC107" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function CheckmarkIcon({ size = 20, color = "var(--primary)" }) {
  return (
    <svg
      aria-label="Correct"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ display: "inline-block", verticalAlign: "middle", color }}
      fill="none"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" fillOpacity="0.15" />
      <path d="M15.3 7.4l-6 5.6-3.1-2.7" stroke="currentColor" strokeWidth="2.1" fill="none" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function CrossIcon({ size = 20, color = "#C62828" }) {
  return (
    <svg
      aria-label="Incorrect"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ display: "inline-block", verticalAlign: "middle", color }}
      fill="none"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" fillOpacity="0.11" />
      <path d="M7.3 7.3l5.4 5.4m0-5.4l-5.4 5.4" stroke="currentColor" strokeWidth="2.1" fill="none" />
    </svg>
  );
}
