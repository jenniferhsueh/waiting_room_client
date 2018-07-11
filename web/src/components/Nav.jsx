import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import logo from '../assets/clock-logo.svg';
import RegisterModal from '../components/RegisterModal'
import LoginModal from '../components/LoginModal'
import MyClinic from '../components/MyClinic'
import ClinicPortal from '../components/ClinicPortal'
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

  toggleView = () => {
    if(!this.props.currentUser) {

    } else {

    }
    if (this.props.currentUser && this.props.currentUser.clinics_id) {
      if (this.props.openClinicView) {
        return (<div className="item" onClick={ this.props.toggleClinic }>Map</div>)
      } else {
        return (<div className="item" onClick={ this.props.toggleClinic } >My Clinic</div>)
      }
    } else {
      return ""
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div className="nav">
          <img width="20" src={logo} alt="clock-logo"/>
          <h1 className="text-logo">Waiting Room</h1>
          <div className="nav-right">
            { this.props.currentUser ? <div className="user-name">Hello, { this.props.currentUser.first_name }</div> : ""}
            { this.toggleView() }
            {/*{ this.props.currentUser && this.props.currentUser.clinics_id ? (this.props.openClinicView ? (<div className="item" onClick={ this.props.toggleClinic }>Map</div>) : (<div className="item" onClick={ this.props.toggleClinic } >My Clinic</div>)) : ""}*/}
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