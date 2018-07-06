import React, { Component } from 'react';
import logo from '../assets/clock-logo.svg';
import RegisterModal from '../components/RegisterModal'
import LoginModal from '../components/LoginModal'
import MyClinic from '../components/MyClinic'
import '../component-styles/nav.css';

class Nav extends Component {
  state = {
    open: false
  }

  currentWaitTime = (waitTime) => {
    this.props.waitTime(waitTime)
    // console.log('data from Nav.js =====>', data)
  }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div className="nav">
          <img width="20" src={logo} alt="clock-logo"/>
          <h1 className="text-logo">Waiting Room</h1>
          <div className="nav-right">
            <MyClinic open={ open } waitMinutes={this.currentWaitTime}/>
            <div className="item">For Patients</div>
            <div className="item">For Clinics</div>
            <RegisterModal open={ open }/>
            <LoginModal open={ open }/>
          </div>
        </div>
      </div>
    );
  }
}


export default Nav;


