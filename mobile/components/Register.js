import React, { Component } from "react"
import { View } from "react-native"
import { Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

import Amplify, { Auth } from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

export default class Register extends Component {
  state = {
    authCode: '',
    user: {}
  }
  onChangeText(authCode) {
    this.setState({ authCode })
  }
  signUp() {
    console.log("REGISTERINGGGGGGG ==============>");
    Auth.signUp({ 
      username: 'Jenhsueh15@gmail.com',
      password: 'Wait_123',
      attributes: {
        phone_number: '+16043151860',
        // email: 'Jenhsueh15@gmail.com'
      }
    })
    .then(res => {
      console.log('successful signup: ', res)
    })
    .catch(err => {
      console.log('error signing up: ', err)
    })
  }
  confirmUser() { 
    const { authCode } = this.state
    Auth.confirmSignUp('user', authCode)
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
          // onChangeText={value => this.onChangeText('name', value)}
          onChangeText={value => this.onChangeText(value)}
          textAlign="left"
          placeholder="Name"
          autoFocus={true}
          name="name" 
          returnKeyType="next"
          onSubmitEditing={() => this.emailInput.focus()}
        />
        <FormInput
          onChangeText={value => this.onChangeText('email', value)}
          style={styles.input}
          keyboardType="email-address"
          placeholder="email"
          returnKeyType="next"
          onSubmitEditing={() => this.phoneInput.focus()}
          ref={(input) => this.emailInput = input}
        />
         <FormInput 
          onChangeText={value => this.onChangeText('phone_number', value)}
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad" 
          name="phoneNumber" 
          returnKeyType="next"
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
          // onChangeText={value => this.onChangeText('confirmationCode', value)}
          onChangeText={value => this.onChangeText(value)}
          style={styles.input}
          placeholder='Confirmation Code'
        />
        <Button 
          buttonStyle={styles.button}
          title="Confirm Registration" 
          onPress={() => {
            this.confirmSignUp
            this.props.setModalVisible(false);
            this.props.toggleMenu()
          }}
        />
      </View>
    )
  }
}

/*

  onPress={this.confirmSignUp.bind(this)} />

*/


