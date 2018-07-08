import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Button, FormInput, FormLabel } from "react-native-elements"
import { styles } from "../assets/styles"

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