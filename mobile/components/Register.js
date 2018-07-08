import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Button, FormInput, FormLabel } from "react-native-elements"

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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 0,
    margin: 0,
    backgroundColor: "#476DC5"
  },
  text: {
    color: "white"
  },
  subtitle: {
    color: "lightgrey"
  },
  formText: {
    color: "black"
  },
  button: {
    width: "60%",
    alignSelf: "center",
    marginTop: 10
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#2196F3",
    margin: 10
  },
  regContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})