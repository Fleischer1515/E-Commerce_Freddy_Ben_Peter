import React from 'react';
import logo from './logo.svg';
import './App.css';
import { testheader } from './headers'; // Stelle sicher, dass der Pfad zur headers-Datei korrekt ist

function App() {
  const headerText = testheader(); // Aufruf der testheader-Methode

  return (
    <div className="App">
      <header className="App-header">
        
        
        <p>
          {headerText}
        </p>

       Ben saugt an Gliedern
      </header>
    </div>
  );
}

export default App;
