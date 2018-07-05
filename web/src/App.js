import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import ClinicList from './components/ClinicList.js';
import MapBox from './components/MapBox.js';


class App extends Component {
  render() {
    return (
     <div className="main-container">
        <Nav />
        <div className="body-container">
          <ClinicList />
          <MapBox />
        </div>
      </div>
    )
  }
}

export default App;