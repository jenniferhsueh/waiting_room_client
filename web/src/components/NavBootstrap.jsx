import React, { Component } from 'react';
import logo from '../assets/clock-logo.svg';
import RegisterModal from '../components/RegisterModal'
import LoginModal from '../components/LoginModal'
import MyClinic from '../components/MyClinic'
import '../component-styles/NavBootstrap.css';
import ClinicPortal from '../components/ClinicPortal'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBootsrap extends Component {

  state = {
    open: false,
    isOpen: false
  }

  //Use function below to toggle between map and portal once clinic portal is integrated
  // toggleView = () => {
  //   if (this.props.currentUser && this.props.currentUser.clinics_id) {
  //     if (this.props.openClinicView) {
  //       return (<div className="item" onClick={ this.props.toggleClinic }>Map</div>)
  //     } else {
  //       return (<div className="item" onClick={ this.props.toggleClinic } >My Clinic</div>)
  //     }
  //   } else {
  //     return ""
  //   }
  // }

  currentWaitTime = (waitTime) => {
    this.props.waitTime(waitTime)
  }

  logoutUser = (user) => {
    this.props.getCurrentUser(null)
  }

  getClinicNameForCurrentUser = () => {
    let clinName;
    this.props.clinic.map((clinic, index) => {
      if (clinic.id === this.props.currentUser.id) {
        clinName = clinic.name
      }
    })
    return clinName
  }

  displayAdminOrUserGreeting = () => {
    if (!this.props.currentUser) {
      return null
    }
    if (this.props.currentUser && this.props.currentUser.clinics_id) {
      return (<div className="user-name navbar-text">Hello, { this.props.currentUser.first_name } { this.props.currentUser.last_name } (admin for { this.getClinicNameForCurrentUser() })</div>)
    } else {
      return (<div className="user-name navbar-text">Hello, { this.props.currentUser.first_name } { this.props.currentUser.last_name }</div>)
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDivider = () => {
    if (this.props.currentUser) {
      return null
    } else {
      return (<DropdownItem divider />)
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Navbar id="nav" expand="md">
          {<NavbarBrand href="/"><img width="20" src={logo} alt="clock-logo"/></NavbarBrand>}
          <h1 className="text-logo">Waiting Room</h1>
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                { this.displayAdminOrUserGreeting() }
                <NavItem>

                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                 <div className="navbar-right">
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      { this.props.currentUser ? "" : <RegisterModal open={ open }/> }
                    </DropdownItem>
                    { this.toggleDivider() }
                    <DropdownItem>
                      { this.props.currentUser ? "" : <LoginModal currentUser={ this.props.currentUser } getCurrentUser={ this.props.getCurrentUser } /> }
                    </DropdownItem>
                    <DropdownItem>
                      { this.props.currentUser && this.props.currentUser.clinics_id ? <MyClinic waitMinutes={ this.currentWaitTime } clinic={ this.props.clinic } currentUser={ this.props.currentUser}  /> : "" }
                    </DropdownItem>
                    { !this.toggleDivider() }
                    <DropdownItem>
                      { !this.props.currentUser ? "" : <div className="item" onClick={ () => this.logoutUser(this.state.user) } >Logout</div> }
                    </DropdownItem>


                  </DropdownMenu>
                  </div>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}