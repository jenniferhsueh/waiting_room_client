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
    currentUser: {},
    open: false,
    email: "",
    pw: ""
  };

  onLogin = (event, close) => {
    this.handleSubmit(event)
    this.onCloseModal()
  }

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
    this.sendLoginData();
    console.log('handleSubmit from login modal ====>', )
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  sendLoginData = (e) => {
    let data = {
      ...this.state, ...this.props
      }
     fetch('/api/users', {
        method:'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response
      })
      .then((res) => res.json())
      .then((currentUser) =>
        this.setState({
          currentUser
        }))
      .then(() => this.props.getCurrentUser(this.state.currentUser))
    }

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
              label="Login"
              primary={true}
              style={{
                marginLeft:75
              }}
              onClick={ this.onLogin }/>
          </div>
        </MuiThemeProvider>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;