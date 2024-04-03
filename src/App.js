import React from 'react';
import GaForm from './GaForm';
import './styles.css'; // Import the stylesheet

function App() {
  return (
    <div className="App">
      <header className="sbb-header">
        <img src="./image.gif" alt="SBB Logo" className="sbb-logo" />
        <h2>GA Bestellung</h2>
      </header>
      <main>
        <GaForm />
      </main>
    </div>
  );
}

export default App;
