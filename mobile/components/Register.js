import React, { Component } from "react"
import { View } from "react-native"
import { Button, FormInput } from "react-native-elements"
import { styles } from "../assets/styles"

export default class Register extends Component {
  render() {
    return (
      <View Style={styles.regContainer}
        // visible={this.state.regVisible}
      >
        <FormInput 
          textAlign="left"
          placeholder="Name"
          autoFocus={true}
          name="name" 
          returnKeyType="next"
          selectionColor="black"
        />
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
        <FormInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          returnKeyType="done"
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