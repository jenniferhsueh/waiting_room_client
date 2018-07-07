import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import logo from '../assets/circle-notch-solid.svg';
import '../component-styles/LoadScreen.css';

const fadeDuration = 5

class Loading extends Component {

  render() {

    return (
      <FadeIn>
      <div>
        <div className="loading">
          <img width="20" src={logo} alt="clock-logo"/>
        </div>
        <h1 className="loading-text">Loading...</h1>
      </div>
      </FadeIn>
    )
  }
}


export default Loading;