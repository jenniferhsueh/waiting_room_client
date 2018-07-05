import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../component-styles/LoginModal.css';

class LoginModal extends Component {
  state = {
    open: false,
    email: "",
    password: ""
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
      <div className="login-modal">
        <div className="item" onClick={ this.onOpenModal }>Login</div>
         <Modal className="login" open={open} onClose={ this.onCloseModal } center>
          <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <FormGroup className="form-email" controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;