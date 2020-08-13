import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import About from './pages/landing/About';
import FAQs from './pages/landing/FAQs';
import ContactUs from './pages/landing/ContactUs';

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/About" component={About} />
      <Route exact path="/FAQs" component={FAQs} />
      <Route exact path="/Contact-Us" component={ContactUs} />
    </div>
  );
}

export default App;
