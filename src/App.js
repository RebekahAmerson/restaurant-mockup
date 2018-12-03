import React, { Component } from 'react';
import './App.css';
import Home from'./Home.js';
import About from'./About.js';
import Menu from'./Menu.js';
import Contact from'./Contact.js';
import { Route, Link } from 'react-router-dom';

const vh = window.innerHeight;
document.documentElement.style.setProperty('--vh', `${vh}px`);

class App extends Component {
  render() {
    return (
      <div id="main-page">
        <nav id="navbar">
          <h1 id="logo">5th Street Deli</h1>
          <ul>
            <li className="nav-link" ><Link to="/">Home</Link></li>
            <li className="nav-link" ><Link to="/about">About</Link></li>
            <li className="nav-link" ><Link to="/menu">Menu</Link></li>
            <li className="nav-link" ><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div id="background">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contact" component={Contact} />
        </div>
        <p id="photo-caption">Photo by Jimi Filipovski on Unsplash</p>
        <footer>Copyright 2018 5th Street Deli. Created by Rebekah Amerson.</footer>
      </div>
    );
  }
}

export default App;
