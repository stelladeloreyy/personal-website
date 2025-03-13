import React from 'react';
import pinkOverlay from './assets/pink-overlay.webp'
import './App.css';

function App() {
  return (
    <div className="bg-container">
      <img src={pinkOverlay} className="pink-overlay" alt="Pink overlay for background"></img>
    </div>
  );
}

export default App;
