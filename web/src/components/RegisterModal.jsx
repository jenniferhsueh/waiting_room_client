import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Switch from '@material-ui/core/Switch';

import '../component-styles/RegisterModal.css';

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      firstName:'',
      lastName: '',
      email: '',
      pw: '',
      confirmPw: '',
      admin: false
      };
    }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.sendRegisterData();
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      pw: '',
      confirmPw: '',
      admin: false
    })
    console.log("=====>", this.state)
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  setAdmin = () => {
    this.setState({
      admin:true
    })
  }

  formValidation = () => {
    if (this.newValue = "") {
      console.log('field is blank')
    }
  }

  sendRegisterData = (e) => {
    let data = {
      ...this.state, ...this.props
      }
     fetch('/api/users/new', {
        method:'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response
      })
    }

  render() {
    const { open } = this.state;
    return (
      <div className="register-modal">
        <div className="item" onClick={ this.onOpenModal }>Register</div>
         <Modal
          className="register"
          open={open} onClose={ this.onCloseModal }
          center>
          {/*<form onSubmit={this.handleSubmit}>
        </form>*/}
        <MuiThemeProvider>

          <div>
            <h1>Register</h1>
            <label>Are you registering a clinic?</label>
            <Switch
              onChange={ this.setAdmin }
              style={{
                color:'black'
              }}
            />
           <br/>
            <TextField
              hintText="First Name"
              floatingLabelText=" First Name"
              onChange={(event, newValue) =>
                this.setState({firstName: newValue})
              }/>
              <br/>
            <TextField
              hintText="Last Name"
              floatingLabelText=" Last Name"
              onChange={(event, newValue) =>
                this.setState({lastName: newValue})
              }/>
            <br/>
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
            <TextField
              type="password"
              hintText="Confirm Your Password"
              floatingLabelText="Confirm Your Password"
              onChange={(event, newValue) =>
                this.setState({confirmPw: newValue})
              }/>
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

export default RegisterModal;