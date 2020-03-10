import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Platform, StyleSheet, View, Text, Button, Alert } from 'react-native';
import { retrieveSleepDiaryData } from "../utils/save-utils";
import {
  generic_messages,
  sleep_diary_messages,
  generic_tip,
  sleep_diary_tip,
  module
} from "../data/messages";
import Moment from "moment";
import SleepDiary from "../sleepDiary";
import SplashScreen from "../loading";

export default class Setting extends Component {

  state = {
    isLoading: true,
    sleepAttemptTime: null,
    wakeUpTime: null,
  }

  async componentDidMount() {
    await this.getData();
    this.setState({isLoading: false});
  }

  getData = async () => {
    try {        
          await AsyncStorage.getItem(today).then(key => {
            console.log(JSON.parse(key));
            sleepAttempt = JSON.parse(key).attemptToSleepTime;
            wakeUp = JSON.parse(key).wakeUpTime;
            sleepAttemptTime = sleepAttempt.split("T")[1].split(".")[0]; //Get time
            wakeUpTime = wakeUp.split("T")[1].split(".")[0]; //Get time
            this.setState({sleepAttemptTime: sleepAttemptTime });
            this.setState({wakeUpTime: wakeUpTime});  
          });
        } catch (error) {
      Alert.alert("Couldn't load data", error);
    }
    if (this.state.sleepAttemptTime != null){
      console.log("Attempt to sleep time: ", this.state.sleepAttemptTime);
     }
  };
  
  getSleepInfo = () =>{
    test = this.getData
    const {sleepAttemptTime} = this.state;
    const sleepAttemptTime_2 = this.state.sleepAttemptTime;
    console.log("test 1",sleepAttemptTime);
    console.log("test 2",sleepAttemptTime_2);
  }
 
 /*  sleep_hygiene_tip = () => {
    const {isLoading, sleepAttemptTime} = this.state;
    if (sleepAttemptTime != null){
      console.log('This is the sleep time',this.getData)
    }
    else{
      console.log("faillllllllll")
    }
    
  }

  testgetdata = ()=>{
    console.log(getData().wakeUpTime_)
  } */

  render() {
    const {isLoading, sleepAttemptTime} = this.state;

    if (isLoading) {
      return <SplashScreen />;
    }
    return (
      <View style={styles.container}>
      <Text>{sleepAttemptTime}</Text>
      <Text>{wakeUpTime}</Text>
      </View>
    );
  }
}

const today = Moment(new Date()).format("MM-DD-YYYY")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});