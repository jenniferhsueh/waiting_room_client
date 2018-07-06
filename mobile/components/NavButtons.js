import React, { Component } from "react"
import { StyleSheet, View, Alert } from "react-native"
import { ButtonGroup } from "react-native-elements"

export default class NavButtons extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2,
      currView: "List"
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  buttonEventHandler = (touchedButton) => {
    switch (touchedButton) {
      case 0:
        this.props.toggleView();
        this.state.currView === "Map" ? 
        this.state.currView = "List" : 
        this.state.currView = "Map";
        break;
      case 1:
        console.log("Favs button")
        break;
      default:
        console.log('Finer Filtering For Fantastic Fulfillment')
    }
  } 
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.buttonEventHandler(selectedIndex)
  }

  render () {
    const { selectedIndex, currView } = this.state
    const buttons = [currView, "★", "Filter"]
  
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