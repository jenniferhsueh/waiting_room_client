import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
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
  }

  logoutUser = (user) => {
    this.props.getCurrentUser(null)
  }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div className="nav">
          <img width="20" src={logo} alt="clock-logo"/>
          <h1 className="text-logo">Waiting Room</h1>
          <div className="nav-right">
            { console.log('this.props.currentUser from nav.js =====> ', this.props.currentUser)}
            { this.props.currentUser ? <div className="user-name">Hello, { this.props.currentUser.first_name }</div> : ""}
            { this.props.currentUser ? <MyClinic open={ open } waitMinutes={ this.currentWaitTime } clinic={ this.props.clinic } currentUser={ this.props.currentUser }/> : ""}
            { this.props.currentUser ? "" : <div className="item">For Patients</div> }
            { this.props.currentUser ? "" : <div className="item">For Clinics</div> }
            { this.props.currentUser ? "" : <RegisterModal open={ open }/> }
            { this.props.currentUser ? "" : <LoginModal currentUser={ this.props.currentUser } getCurrentUser={ this.props.getCurrentUser } /> }
            { !this.props.currentUser ? "" : <div className="item" onClick={ () => this.logoutUser(this.state.user) } >Logout</div> }
          </div>
        </div>
      </div>
    );
  }
}


export default Nav;


