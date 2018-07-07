import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import logo from '../assets/circle-notch-solid.svg';
import '../component-styles/LoadScreen.css';

const fadeDuration = 5

class Loading extends Component {

  render() {

    return (
      <div className="loading-background">
        <FadeIn>
          <div className="loading">
            <img className="loading-graphic" width="20" src={logo} alt="clock-logo"/>
          </div>
          <h1 className="loading-text">Loading...</h1>
        </FadeIn>
      </div>
    )
  }
}


export default Loading;