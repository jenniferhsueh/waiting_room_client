import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../component-styles/RegisterModal.css';

class RegisterModal extends Component {
 state = {
    open: false,
    email: "",
    password: "",
    pwConfirm: "",
    firstName: "",
    lastName: ""
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.pwConfirm.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="register-modal">
        <div className="item" onClick={ this.onOpenModal }>Register</div>
         <Modal className="register" open={open} onClose={ this.onCloseModal } center>
          <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
            <div className="reg-wrapper">

              <FormGroup className="first-name" controlId="first-name" bsSize="large">
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                  autoFocus
                  type="name"
                  /*{value={this.state.firstName}}*/
                  /* uncommenting this field prevents form input because state is set to "". but why not email??? */
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup className="last-name" controlId="last-name" bsSize="large">
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  type="name"
                  /*value={this.state.lastName}*/
                  /*uncommenting this field prevents form input because state is set to "". but why not email???*/
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup className="form-email" controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup className="password" controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>

              <FormGroup className="pw-confirm" controlId="password" bsSize="large">
                <ControlLabel>Confirm Password</ControlLabel>
                <FormControl
                  /*value={this.state.pwConfirm}*/
                  /*uncommenting this field prevents form input because state is set to "". but why not email???*/
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>

            </div>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </Button>
        </form>
        </Modal>
      </div>
    )
  }
}

export default RegisterModal;