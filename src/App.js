import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './landing/Landing.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Landing />
      </div>
    </Router>
  );
}

export default App;
