import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './home.js'; 
import Kevin from './kevin.js'; 
import Nuggets from './nuggets.js'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        // Set up the Router
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Kevin} />
        <Route path="/about" component={Nuggets} />
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            // Set up the Links
            <Link to="/" className="item">Home</Link>
            <Link to="/articles" className="item">Kevin</Link>
            <Link to="/about" className="item">Nuggets</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
