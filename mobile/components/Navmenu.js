import React, { Component } from "react"
import { View, Modal } from "react-native"
import { Card, ListItem } from "react-native-elements"
import SetWaitTime from "./SetWaitTime"
import Register from "./Register"
import { styles } from "../assets/styles"

export default class Navmenu extends Component {

  state = {
    modalVisible: false,
    regVisible: true,
    modalView: "",
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

  render() {
    const { regVisible, modalView } = this.state
    let currentModalView;
    switch(modalView) {
      case "WaitTime":
      // currentModalView =
        break;
      case "Register":
        break;
      case "Register":
        break;
      default:
       break;

    }
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
              {regVisible 
                ? <SetWaitTime 
                  toggleMenu={this.props.toggleMenu} 
                  handleChange={this.handleChange} 
                  setModalVisible={this.setModalVisible} 
                  onFormChangeTime={this.onFormChangeTime}/> 
                : <Register 
                  toggleMenu={this.props.toggleMenu} 
                  clinic_name={this.props.currentUser.clinic_name} 
                  setModalVisible={this.setModalVisible}/>}
                
              </View>
            </View>
          </Modal>
          

          
          <ListItem onPress={() => {
            this.setModalView("WaitTime")
            this.setModalVisible(!this.state.modalVisible) 
            }
          } 
            key="1" title="My Clinic" titleStyle={styles.text} 
            subtitle="Set Wait Time" subtitleStyle={styles.subtitle}
          />
          <ListItem onPress={() => {
            this.setModalView(true)
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