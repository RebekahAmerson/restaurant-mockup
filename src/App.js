import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="main-page">
        <nav id="navbar">
          <h1 id="logo">5th Street Deli</h1>
          <ul>
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Menu</li>
            <li className="nav-link">Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
