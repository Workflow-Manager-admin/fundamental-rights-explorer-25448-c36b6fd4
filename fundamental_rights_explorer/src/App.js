import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./animations.css";
import RightsOverview from "./components/RightsOverview";
import RightsDetail from "./components/RightsDetail";

/**
 * PageTransition
 * Wraps children with CSS transition classes on mount/unmount.
 */
function PageTransition({ children, keyId }) {
  const [show, setShow] = React.useState(true);
  const ref = React.useRef();

  React.useEffect(() => {
    setShow(false);
    // Animate out, then switch in
    const timeout = setTimeout(() => setShow(true), 16);
    return () => clearTimeout(timeout);
  }, [keyId]);

  React.useEffect(() => {
    if (!ref.current) return;
    ref.current.classList.remove("page-fade-exit-active");
    ref.current.classList.add("page-fade-appear");
    setTimeout(() => {
      ref.current.classList.add("page-fade-appear-active");
    }, 12);
    return () => {
      if (ref.current) {
        ref.current.classList.remove("page-fade-appear", "page-fade-appear-active");
      }
    };
  }, [keyId, show]);

  if (!show) {
    // Animating out (could show loader, blank)
    return (
      <div className="page-fade-exit page-fade-exit-active" style={{ minHeight: 450 }} />
    );
  }

  return (
    <div ref={ref} className="page-fade-appear">
      {children}
    </div>
  );
}

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

  // A key based on URL path for animation trigger
  const pageKey = useLoc?.pathname || "/";
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
          <PageTransition keyId={pageKey}>
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
          </PageTransition>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;