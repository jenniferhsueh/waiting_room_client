import React, { Component } from 'react';
import logo from '../assets/circle-notch-solid.svg';
import '../component-styles/LoadScreen.css';

class Loading extends Component {
  render() {
    return (
      <div className="visible">
      <div className="loading">
        <img width="20" src={logo} alt="clock-logo"/>

      </div>
      <h1>Loading...</h1>
      </div>
    )
  }
}


export default Loading;