import React from 'react';
import './App.css';
import RightsOverview from './components/RightsOverview';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            {/* Remove Template Button for cleaner main page */}
          </div>
        </div>
      </nav>
      <main>
        <RightsOverview />
      </main>
    </div>
  );
}

export default App;