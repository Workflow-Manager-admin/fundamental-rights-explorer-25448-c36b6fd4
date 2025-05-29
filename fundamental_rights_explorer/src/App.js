import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./animations.css";
import RightsOverview from "./components/RightsOverview";
import RightsDetail from "./components/RightsDetail";

// PUBLIC_INTERFACE
function App() {
  const location = window.location; // fallback in BrowserRouter
  const useLoc = (() => {
    try {
      // Try to use useLocation in react-router
      // eslint-disable-next-line
      // @ts-ignore
      return require('react-router-dom').useLocation();
    } catch {
      return { pathname: location?.pathname || "/" };
    }
  })();

  // Static view: animation & PageTransition removed; direct render.
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <div className="logo">
                <span className="logo-symbol">*</span> KAVIA AI
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Routes location={useLoc}>
            <Route path="/" element={<RightsOverview />} />
            <Route path="/right/:rightId" element={<RightsDetail />} />
            {/* Fallback for unrecognized routes */}
            <Route path="*" element={
              <div className="rights-overview-root" style={{ textAlign: "center", marginTop: 100 }}>
                <h2>Page not found</h2>
                <a className="btn" href="/">Back to Overview</a>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;