import React, { Component } from 'react';
import logo from '../assets/clock-logo.svg';
import '../component-styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <img width="20" src={logo} alt="clock-logo"/>
          <h1 className="text-logo">Waiting Room.</h1>
          <div className="nav-right">
            <div className="item">For Patients</div>
            <div className="item">For Clinics</div>
            <div className="item">Register</div>
            <div className="item">Login</div>
          </div>
        </div>
      </div>
    );
  }
}


export default Nav;


