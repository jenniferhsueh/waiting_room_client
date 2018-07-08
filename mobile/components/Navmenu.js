import React, { Component } from "react"
import { View, Modal } from "react-native"
import { Card, ListItem } from "react-native-elements"
import SetWaitTime from "./SetWaitTime"
import Register from "./Register"
import Login from "./Login"
import { styles } from "../assets/styles"

export default class Navmenu extends Component {

  state = {
    modalVisible: false,
    modalView: "Login",
    waitTime: ""    
  };

  updateWaitTime = (waitTime) => {
    this.props.waitMinutes(waitTime)
  }

  setModalVisible = (modalVisible) => {
    this.setState({modalVisible});
  }

  setModalView = (modalView) => {
    this.setState({modalView});
  }

  // handleSubmit = () => {

  // }

  handleChange = (waitTime) => {
    this.setState({ waitTime })
  }

  onFormChangeTime = () => {
    this.updateWaitTime(this.state.waitTime)
  }

  handleModalView = (currentModalView) => {
    switch(currentModalView) {
      case "WaitTime":
        return currentModalView = <SetWaitTime 
          toggleMenu={this.props.toggleMenu} 
          handleChange={this.handleChange} 
          setModalVisible={this.setModalVisible} 
          onFormChangeTime={this.onFormChangeTime}  
          clinic_name={this.props.currentUser.clinic_name}/>
        break;
      case "Register":
        return currentModalView = <Register 
          toggleMenu={this.props.toggleMenu} 
          setModalVisible={this.setModalVisible}/>
        break;
      case "Login":
        return currentModalView = <Login 
          toggleMenu={this.props.toggleMenu} 
          setModalVisible={this.setModalVisible}/>
        break;
      default:
        console.log("Not a button")
       break;
    }
  }

  render() {
    return (
      <Card containerStyle={styles.container}>
        <View>
          <Modal 
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View style={{marginTop: 22, backgroundColor: "pink", padding: 10}}>
              <View>
                {this.handleModalView(this.state.modalView)}
              </View>
            </View>
          </Modal>
          <ListItem 
            onPress={() => {
              this.setModalView("WaitTime")
              this.setModalVisible(!this.state.modalVisible) 
            }} 
            key="1" title="My Clinic" titleStyle={styles.text} 
            subtitle="Set Wait Time" subtitleStyle={styles.subtitle}
          />
          <ListItem 
            onPress={() => {
              this.setModalView("Register")
              this.setModalVisible(!this.state.modalVisible) 
            }}
            key="2" title="Register" titleStyle={styles.text} />
          <ListItem 
             onPress={() => {
              this.setModalView("Login")
              this.setModalVisible(!this.state.modalVisible) 
            }}
            key="3" title="Login"titleStyle={styles.text} />
          <ListItem key="4" title="Patients" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
          <ListItem key="5" title="Clinics" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
        </View>
      </Card>
    );
  }
}