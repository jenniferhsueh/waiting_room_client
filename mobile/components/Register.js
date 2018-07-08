import React, { Component } from "react"
import { View } from "react-native"
import { Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

export default class Register extends Component {
  render() {
    return (
      <View Style={styles.regContainer}>
        <FormInput 
          textAlign="left"
          placeholder="Name"
          autoFocus={true}
          name="name" 
          returnKeyType="next"
          onSubmitEditing={() => this.emailInput.focus()}
        />
        <FormInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          ref={(input) => this.emailInput = input}
        />
        <FormInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="next"
          onSubmitEditing={() => this.passConf.focus()}
          ref={(input) => this.passwordInput = input}
        />
        <FormInput
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
            this.props.setModalVisible(false);
            this.props.toggleMenu()
          }}>
        </Button>
      </View>
    )
  }
}