import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Platform, StyleSheet, View, Text, Button, Alert } from 'react-native';
import { retrieveSleepDiaryData } from "../utils/save-utils";
import Moment from "moment";

export default class Setting extends Component {
diary = () => retrieveSleepDiaryData("02-28-2020")
  consoleMessage=()=>{
    alert("clicked");
    AsyncStorage.getAllKeys()
    console.log('data is', retrieveSleepDiaryData("02-28-2020")[1]); 
    //console.log('data is', retrieveSleepDiaryData("02-28-2020")); 

    //test.map((item,i) => console.log(item))
    console.log("console message button clicked"); 

  }

  splitDiary = (val) => val.split("T")

  getData = async () => {
    alert("clicked");
    console.log('todays date',today)
    try {        
          await AsyncStorage.getItem(today).then(key => {
            console.log(JSON.parse(key))
            //console.log(JSON.parse(key).attemptToSleepTime.toString())
            sleepAttempt = () => JSON.parse(key).attemptToSleepTime
            //leaveBed = () => JSON.parse(key).attemptToSleepTime.split("T")[1]
            //diff = leaveBed - sleepattempt
            sleepAttemptTime =sleepAttempt().split("T")[1].split(".")[0] //Get time
            //sleepAttemptTime = out.slice(0, -1) //remove Z, last character

            console.log("Attempt to sleep time: ", out)


          });
      
    } catch (error) {
      Alert.alert("Couldn't load data", error);
    }
    console.log("Done writing to console");
  };

  render() {

    return (
      <View style={styles.container}>
       <Button
            title=" Console Message Example "
            onPress={this.getData}
            color="#E91E63"
          />
      </View>
    );
  }
}
const test = () => retrieveSleepDiaryData("02-28-2020")
const today = Moment(new Date()).format("MM-DD-YYYY")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});