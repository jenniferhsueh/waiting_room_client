import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Button, FormInput, FormLabel } from "react-native-elements"

export default class SetWaitTime extends Component {
  render() {
    return (

      <View>
        <FormLabel labelStyle={{textAlign: "center"}}>Set Wait time for {this.props.clinic_name}</FormLabel>
        <FormInput 
          textAlign="left"
          placeholder="Enter wait time"
          keyboardType="numeric" 
          autoFocus={true}
          name="waitTime" 
          returnKeyType="done"
          selectionColor="black"
          onChangeText={ waitTime => this.props.handleChange(waitTime)}
        />
        <Button 
          buttonStyle={styles.button}
          raised
          title='Update Wait Time'
          onPress={() => {
            this.props.onFormChangeTime()
            console.log(this.props.se)
            this.props.setModalVisible(false)
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