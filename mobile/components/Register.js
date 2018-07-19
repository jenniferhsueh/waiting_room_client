import React, { Component } from "react"
import { View } from "react-native"
import { Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

import Amplify, { Auth } from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

export default class Register extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    phone_number: "",
    email: "",
    confirmationCode: ""
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  
  signUp() {
    Auth.signUp({ 
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: this.state.phone_number
      }
    })
    .then(res => {
      console.log("successful registration: ", res)
    })
    .catch(err => {
      console.log("error registering: ", err)
    })
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
    .then(res => {
      console.log("successful confirmation: ", res)
    })
    .catch(err => {
      console.log("error confirming user: ", err)
    })
  }
  
  render() {
    return (
      <View Style={styles.regContainer}>
        <FormInput 
          autoFocus={true}
          placeholder="Name"
          returnKeyType="next"
          onChangeText={value => this.onChangeText("name", value)}
          onSubmitEditing={() => this.emailInput.focus()}
          />
        <FormInput
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={value => this.onChangeText("username", value)}
          onSubmitEditing={() => this.emailConfInput.focus()}
          ref={(input) => this.emailInput = input}
          />
        <FormInput
          placeholder="Confirm Email"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={value => this.onChangeText("email", value)}
          onSubmitEditing={() => this.passwordInput.focus()}
          ref={(input) => this.emailConfInput = input}
          />
       
        <FormInput
          secureTextEntry={true}
          placeholder="Password"
          returnKeyType="next"
          onChangeText={value => this.onChangeText("password", value)}
          onSubmitEditing={() => this.passConf.focus()}
          ref={(input) => this.passwordInput = input}
          />
        <FormInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          returnKeyType="next"
          onChangeText={value => this.onChangeText("password_confirmation", value)}
          onSubmitEditing={() => this.phoneInput.focus()}
          ref={(input) => this.passConf = input}
          />
        <FormInput 
          placeholder="Phone Number"
          keyboardType="phone-pad" 
          onChangeText={value => this.onChangeText("phone_number", value)}
          ref={(input) => this.phoneInput = input}
        />
        <Button 
          buttonStyle={styles.button}
          raised
          title="Register"
          onPress={() => {
            this.signUp();
          }}>
        </Button>
        <FormInput
          placeholder="Confirmation Code"
          keyboardType="numeric"
          onChangeText={value => this.onChangeText("confirmationCode", value)}
          />
        <Button 
          buttonStyle={styles.button}
          title="Confirm Registration" 
          onPress={() => {
            this.confirmSignUp();
            this.props.setModalVisible(false);
            this.props.toggleMenu();
            this.props.displayName(this.state.name);
          }}
          />
      </View>
    )
  }
}