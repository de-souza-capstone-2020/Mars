// This file is to demonstrate saving and loading data from localstorage

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  AsyncStorage,
  Picker
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-date-picker";
import Moment from "moment";

// https://github.com/henninghall/react-native-date-picker
// Sleep diary questions: https://i.gyazo.com/94ecf49c2e6bc6e7fe8e2074dd2a3e8b.png
// Date picker: https://github.com/henninghall/react-native-date-picker/blob/master/README.md

const valueTemplate = {
  currDate: "",
  sleepTime: 0,
  attemptToSleepTime: 0,
  durationTillSleep: 0,
  numTimesWakeUp: 0,
  durationTotalWakeUp: 0,
  wakeUpTime: 0,
  leaveBedTime: 0,
  didNap: false,
  napping: [
    {
      napTime: 0,
      napDuration: 0
    }
  ],
  sleepQuality: 0,
  others: ""
};

/* =================== DO NOT DELETE =======================
*
*

  const valueTemplate = {
    currDate: The Current Date
    sleepTime: What time did you get into bed
    attemptToSleepTime: What time did you try to go to sleep?
    durationTillSleep: How long did it take you to fall asleep?
    numTimesWakeUp: How many times did you wake up, not counting the final awakening
    durationTotalWakeUp: In total, how long did these awakenings last?
    wakeUpTime: What time was your final awakening?
    leaveBedTime: What time did you get out of bed that day?
    didNap: Did you nap?
    napping: [{
      napTime: When did you nap?
      napDuration: How long did you nap for?
    }],
    sleepQuality: How would you rate the quality of your sleep?
    others: Comments
  }
*
*
*
*
*
* =================== DO NOT DELETE =======================
*/

export default class Test extends Component {
  state = {
    date: new Date(),
    storedDateTime: "",
    currentPickerValue: "one",
    pickerValueFromStorage: "",
    showPicker: false
  };

  _storeData = async () => {
    const { date, currentPickerValue } = this.state;
    const time = date.getTime();
    const newValue = {
      pickerValueFromStorage: currentPickerValue,
      time
    };

    try {
      await AsyncStorage.setItem(
        Moment(date).format("MM-DD-YYYY"),
        JSON.stringify(newValue)
      );
    } catch (error) {
      console.error(error);
    }

    console.log("saved");
  };

  _retrieveData = async () => {
    const { date } = this.state;
    try {
      const value = await AsyncStorage.getItem(
        Moment(date).format("MM-DD-YYYY")
      );
      const JSONValue = JSON.parse(value);
      console.log(JSONValue);
      if (value !== null) {
        this.setState({
          storedDateTime: JSONValue.time,
          pickerValueFromStorage: JSONValue.pickerValueFromStorage
        });
      }
    } catch (error) {
      console.error(error);
      console.log("There are errors");
    }
  };

  viewStoredAllData = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({ [store[i][0]]: store[i][1] });
          // console.log(result); 
          return true;
        });
      });
    });
  };

  render() {
    const {
      date,
      storedDateTime,
      currentPickerValue,
      pickerValueFromStorage,
      showPicker
    } = this.state;


    // console.log(this.viewStoredAllData());
    // console.log(date);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Button
            title={showPicker ? "Close Date Picker" : "Open Date Picker"}
            onPress={ () =>{
              this.setState({
                showPicker: !showPicker
              })}
            }
          />
          <Text>
            {" "}

          </Text>

          {showPicker && (<DatePicker
            date={date}
            onDateChange={date => this.setState({ date })}
            showIcon={true}
            placeholder="Test Datepicker"
          />)}

          <Button title="Save" onPress={() => this._storeData()} />
          <Text>
            Date:
            {Moment(storedDateTime).format("MM-DD-YYYY")}
            {"  "}
            Time:
            {Moment(storedDateTime).format("HH-MM-SS")}
          </Text>
          <Picker
            selectedValue={currentPickerValue}
            style={{ height: 50, width: 50 }}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ currentPickerValue: itemValue });
              this._storeData();
            }}
          >
            <Picker.Item label="This is one" value="one"></Picker.Item>
            <Picker.Item label="This is two" value="two"></Picker.Item>
            <Picker.Item label="This is three" value="three"></Picker.Item>
          </Picker>

          <Text>
            The currentPickerValue is: {currentPickerValue}
            {"\n"}
            The Picker Value from storage is (press Load Data):{" "}
            {pickerValueFromStorage}
          </Text>
          <Button title="Load Data" onPress={() => this._retrieveData()} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    marginHorizontal: 20
  }
});
