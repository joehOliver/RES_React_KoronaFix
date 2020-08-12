import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Landing from './pages/landing/Landing';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
