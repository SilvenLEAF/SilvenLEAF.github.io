import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/NEXT">
      <div className="App">
        <h1 style={{ textAlign: "center", marginTop: "50px", color: "#d00" }}>SilvenLEAF</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
