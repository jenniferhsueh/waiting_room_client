import React, { Component } from "react"
import { StyleSheet, View, TextInput, Image, Modal, TouchableHighlight } from "react-native"
import { Button, Card, ListItem, FormLabel, FormInput, FormValidationMessage } from "react-native-elements"

export default class Navmenu extends Component {

  state = {
    modalVisible: false,
    regVisible: false,
    waitTime: ""    
  };

  updateWaitTime = (waitTime) => {
    this.props.waitMinutes(waitTime)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setRegVisible(visible){
    this.setState({regVisible: visible});
  }

  // handleSubmit = () => {

  // }

  handleChange = (waitTime) => {
    this.setState({ waitTime })
  }

  onFormChangeTime = () => {
    this.updateWaitTime(this.state.waitTime)
  }

  render() {
    const { regVisible } = this.state
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
              {regVisible ? 
              <View Style={styles.regContainer}
                visible={this.state.regVisible}
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
                    this.onFormChangeTime()
                    this.setModalVisible(!this.state.modalVisible);
                    this.props.toggleMenu()
                  }}>
                </Button>
              </View> :
              <View>
                <FormLabel labelStyle={{textAlign: "center"}}>Set Wait time for {this.props.currentUser.clinic_name}</FormLabel>
                <FormInput 
                  textAlign="left"
                  placeholder="Enter wait time"
                  keyboardType="numeric" 
                  autoFocus={true}
                  name="waitTime" 
                  returnKeyType="done"
                  selectionColor="black"
                  onChangeText={ waitTime => this.handleChange(waitTime)}
                />
                <Button 
                  buttonStyle={styles.button}
                  raised
                  title='Update Wait Time'
                  onPress={() => {
                    this.onFormChangeTime()
                    this.setModalVisible(!this.state.modalVisible);
                    this.props.toggleMenu()
                  }}>
                </Button>
              </View>
            }
                
              </View>
            </View>
          </Modal>
          

          
          <ListItem onPress={() => {
            this.setRegVisible(false)
            this.setModalVisible(!this.state.modalVisible) 
            }
          } 
            key="1" title="My Clinic" titleStyle={styles.text} 
            subtitle="Set Wait Time" subtitleStyle={styles.subtitle}
          />
          <ListItem onPress={() => {
            this.setRegVisible(true)
            this.setModalVisible(!this.state.modalVisible) 
          }}
            key="2" title="Register" titleStyle={styles.text} />
          <ListItem key="3" title="Login"titleStyle={styles.text} />
          <ListItem key="4" title="Patients" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
          <ListItem key="5" title="Clinics" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
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