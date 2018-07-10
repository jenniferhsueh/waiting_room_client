import React, { Component } from "react"
import { View } from "react-native"
import { Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

import { Auth } from "aws-amplify"

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    confirmationCode: '',
    user: {}
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    console.log("LOGGINNNNNNNNNNN ==============>");
    const { username, password } = this.state
    Auth.signIn(username, password)
      .then(user => {
        this.setState({ user })
      })
      .catch(err => {
        console.log('error signing in: ', err)
      })
  }r

  confirmSignIn() {
    console.log("CONFIRMATION LOGGING INNNNNNNN ==============>");
    const { user, confirmationCode } = this.state
    Auth.confirmSignIn(user, confirmationCode)
      .then(user => {
        console.log('user: ', user)
      }).catch(err => {
        console.log('error confirming login: ', err)
      })
  }

  render() {
    return (
      <View Style={styles.regContainer}>
        <FormInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          autoFocus={true}
          keyboardType="email-address"
          placeholder="email"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <FormInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="done"
          ref={(input) => this.passwordInput = input}
        />
        <Button 
          buttonStyle={styles.button}
          raised
          title='Login'
          onPress={() => {
            this.signIn();
          }}>
        </Button>
        <FormInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='Confirmation Code'
        />
        <Button 
          buttonStyle={styles.button}
          title="Confirm Login" 
          onPress={() => {
            this.confirmSignIn();
            this.props.setModalVisible(false);
            this.props.toggleMenu();
          }}/> 
        />
      </View>
    )
  }
}
