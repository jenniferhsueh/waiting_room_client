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
            <td className="item">For Patients</td>
            <td className="item">For Clinics</td>
            <td className="item">Register</td>
            <td className="item">Login</td>
          </div>
        </div>
      </div>
    );
  }
}


export default Nav;


