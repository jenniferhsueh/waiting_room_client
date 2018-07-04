import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { ButtonGroup } from "react-native-elements"

export default class NavButtons extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = ["Map", "List", "★"]
    const { selectedIndex } = this.state
  
    return (
      <View style={styles.container} >
        <ButtonGroup 
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 40}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
});