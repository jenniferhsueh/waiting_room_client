import React, { Component } from "react"
import { StyleSheet, View, Text, Image, Modal, TouchableHighlight } from "react-native"
import { Button, Card, ListItem, FormLabel, FormInput, FormValidationMessage } from "react-native-elements"

export default class Navmenu extends Component {

  state = {
    modalVisible: false,
    waitTime: ""    
  };

  updateWaitTime = (waitTime) => {
    console.log("UPDATEWAITTIME", waitTime)
    this.props.waitMinutes(waitTime)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleChange = (waitTime) => {
    this.setState({ waitTime })
    console.log(this.state.waitTime)
  }

  onFormChangeTime = () => {
    console.log("CHANGED TIIIIIMMEEEEE")
    this.updateWaitTime(this.state.waitTime)
  }

  render() {
    return (
      <Card containerStyle={styles.container}>
        <View >
          <Modal 
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View style={{marginTop: 22, backgroundColor: "pink", padding: 10}}>
              <View>
                <FormLabel labelStyle={{textAlign: "center"}}>Set Wait time for </FormLabel>
                <FormInput 
                  style={{labelStyle: "center"}}
                  placeholder="Enter current wait time"
                  keyboardType="numeric" 
                  autoFocus={true}
                  name="waitTime" 
                  onChangeText={ waitTime => this.handleChange(waitTime)}
                />
                <TouchableHighlight
                  onPress={() => {
                    this.onFormChangeTime()
                    this.setModalVisible(!this.state.modalVisible);
                    this.props.toggleMenu()
                  }}>
                  <Text style={{textAlign: "center"}}>Update Wait Time</Text>
                </TouchableHighlight>

              </View>
            </View>
          </Modal>
          
          <ListItem onPress={() => {this.setModalVisible(!this.state.modalVisible) }} 
            key="1" title="My Clinic" titleStyle={styles.text} 
            subtitle="Set Wait Time" subtitleStyle={styles.subtitle}
          />
          <ListItem key="4" title="Register" titleStyle={styles.text} />
          <ListItem key="5" title="Login"titleStyle={styles.text} />
          <ListItem key="2" title="Patients" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
          <ListItem key="3" title="Clinics" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
        </View>
      </Card>
    );
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
  }
})