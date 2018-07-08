import React, { Component } from "react"
import { View } from "react-native"
import { Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

export default class Login extends Component {
  render() {
    return (
      <View Style={styles.regContainer}>
        <FormInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email"
          returnKeyType="next"
        />
        <FormInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="next"
        />
        <Button 
          buttonStyle={styles.button}
          raised
          title='Login'
          onPress={() => {
            this.props.setModalVisible(false);
            this.props.toggleMenu()
          }}>
        </Button>
      </View>
    )
  }
}