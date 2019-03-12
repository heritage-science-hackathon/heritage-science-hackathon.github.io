import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav'
import Intro from './Intro'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side-image fixed vh-100 w-50 dn-m overflow-hidden">
          <img className="dn-m h-100 mw-none" src="../images/computer.jpeg" />
        </div>
        <div className="min-vh-100 ph4 w-50-l relative flex flex-column">
          <Nav />
          <Intro />
         
        </div>
      </div>
    );
  }
}

export default App;
