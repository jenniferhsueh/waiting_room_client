import React, { Component } from "react"
import { View } from "react-native"
import { Text, Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

import { Auth } from "aws-amplify"

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    confirmationCode: "",
    user: {}
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { username, password } = this.state
    Auth.signIn(username, password)
      .then(user => {
        this.setState({ user })
      })
      .catch(err => {
        console.log("error signing in: ", err)
      })
  }r

  confirmSignIn() {
    const { user, confirmationCode } = this.state
    Auth.confirmSignIn(user, confirmationCode)
      .then(user => {
        console.log("user: ", user)
      }).catch(err => {
        console.log("error confirming login: ", err)
      })
  }

  render() {
    console.log("userattributes Login.js", )

    return (
      <View Style={styles.regContainer}>
        <Text style={styles.formText}>
          Welcome back,{"\n"}Please login to continue
        </Text>
        <FormInput
          autoFocus={true}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={value => this.onChangeText("username", value)}
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <FormInput
          secureTextEntry={true}
          placeholder="Password"
          returnKeyType="done"
          onChangeText={value => this.onChangeText("password", value)}
          ref={(input) => this.passwordInput = input}
        />
        <Button 
          buttonStyle={styles.button}
          raised
          title="Login"
          onPress={() => {
            this.signIn();
          }}>
        </Button>
        <FormInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          keyboardType="numeric"
          placeholder="Confirmation Code"
        />
        <Button 
          buttonStyle={styles.button}
          title="Confirm Login" 
          onPress={() => {
            this.confirmSignIn();
            this.props.setModalVisible(false);
            this.props.toggleMenu();
            this.props.displayName(this.state.username);
          }}/> 
        />
      </View>
    )
  }
}