import React from 'react';
import '../css/NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navbar"> 
      <div className="navbar-left">
        <div className="navbar-name">Spotlight</div>
        <input type="text" className="navbar-input" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Login</button>
        <button className="navbar-button">Signup</button>
      </div>
    </div>
  );
}

export default NavigationBar;
