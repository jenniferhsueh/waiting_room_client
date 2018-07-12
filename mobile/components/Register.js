import React, { Component } from "react"
import { View } from "react-native"
import { Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

import Amplify, { Auth } from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

export default class Register extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationCode: ''
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
      console.log('successful registration: ', res)
    })
    .catch(err => {
      console.log('error registering: ', err)
    })
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
    .then(res => {
      console.log('successful confirmation: ', res)
    })
    .catch(err => {
      console.log('error confirming user: ', err)
    })
  }
  
  render() {
    return (
      <View Style={styles.regContainer}>
        <FormInput 
          onChangeText={value => this.onChangeText('name', value)}
          placeholder="Name"
          autoFocus={true}
          name="name" 
          returnKeyType="next"
          onSubmitEditing={() => this.emailInput.focus()}
          />
        <FormInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          returnKeyType="next"
          onSubmitEditing={() => this.emailConfInput.focus()}
          ref={(input) => this.emailInput = input}
          />
        <FormInput
          onChangeText={value => this.onChangeText('email', value)}
          style={styles.input}
          keyboardType="email-address"
          placeholder="Confirm Email"
          returnKeyType="next"
          onSubmitEditing={() => this.phoneInput.focus()}
          ref={(input) => this.emailConfInput = input}
          />
         <FormInput 
          onChangeText={value => this.onChangeText('phone_number', value)}
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad" 
          returnKeyType={"next"}
          name="phoneNumber" 
          onSubmitEditing={() => this.passwordInput.focus()}
          ref={(input) => this.phoneInput = input}
          />
        <FormInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="next"
          onSubmitEditing={() => this.passConf.focus()}
          ref={(input) => this.passwordInput = input}
          />
        <FormInput
          onChangeText={value => this.onChangeText('password_confirmation', value)}
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          returnKeyType="done"
          ref={(input) => this.passConf = input}
          />
        <Button 
          buttonStyle={styles.button}
          raised
          title='Register'
          onPress={() => {
            this.signUp();
          }}>
        </Button>
        <FormInput
          keyboardType="numeric"
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='Confirmation Code'
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

/*

  onPress={this.confirmSignUp.bind(this)} />

*/


