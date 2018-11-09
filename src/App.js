import React, { Component } from 'react';
import './App.css';
import Home from'./Home.js';
import About from'./About.js';
import Menu from'./Menu.js';
import Contact from'./Contact.js';

class App extends Component {
  state = {
    page: 'home'
  }

  render() {
    const page = this.state.page;
    return (
      <div id="main-page">
        <nav id="navbar">
          <h1 id="logo">5th Street Deli</h1>
          <ul>
            <li className="nav-link" onClick={() => this.setState({page: 'home'})}>Home</li>
            <li className="nav-link" onClick={() => this.setState({page: 'about'})} >About</li>
            <li className="nav-link" onClick={() => this.setState({page: 'menu'})}>Menu</li>
            <li className="nav-link" onClick={() => this.setState({page: 'contact'})}>Contact</li>
          </ul>
        </nav>
        <div id="background">
          {(() => {
            switch(page) {
              case 'home':
                return <Home />;
              case 'about':
                return <About />;
              case 'menu':
                return <Menu />;
              case 'contact':
                return <Contact />;
              default:
              console.log(page);
               return null;
            }
          })()}
        </div>
      </div>
    );
  }
}

export default App;
