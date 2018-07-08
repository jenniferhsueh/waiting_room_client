import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
         <Modal
          className="login"
          open={open}
          onClose={ this.onCloseModal }
          center>
          <MuiThemeProvider>
            <div>
            <h1>Login</h1>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              onChange={(event, newValue) =>
                this.setState({email: newValue})
              }/>
            <br/>
            <TextField
              type="password"
              hintText="Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({pw: newValue})
              }/>
            <br/>
            <br/>
            <RaisedButton
              label="Register"
              primary={true}
              style={{
                marginLeft:75
              }}
              onClick={(event, close) =>
                this.handleSubmit(event, this.onCloseModal())
              }/>
          </div>
        </MuiThemeProvider>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;