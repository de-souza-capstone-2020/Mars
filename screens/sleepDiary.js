import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  Picker,
  Image,
} from "react-native";
import DatePicker from "react-native-date-picker";
import Modal from "react-native-modal";
import { storeSleepDiaryData } from './utils/save-utils';
import Moment from "moment";
import { AsyncStorage } from "react-native";

export default class SleepDiary extends Component {
  state = {
    sleepQuality: "",
    sleepTime: new Date(),
    attemptToSleepTime: new Date(),
    durationTillSleep: "",
    numTimesWakeUp: "",
    durationTotalWakeUp: "",
    wakeUpTime: new Date(),
    leaveBedTime: new Date(),
    didNap: "",
    napTime: new Date(),
    napDuration: "",
    others: ""
  /*   isLoading: true,
    sleepAttemptTime: null,
    wakeUpTime: null */
    
  };

  getSleepData = () => {
    //const appState = this.state.appState;
    const today = Moment(new Date()).format("MM-DD-YYYY")
    try {        
          AsyncStorage.getItem(today).then(key => {
            if( key != null){
            console.log("Sleep entry for today",JSON.parse(key));
            const sleepAttempt = JSON.parse(key).attemptToSleepTime;
            const wakeUp = JSON.parse(key).wakeUpTime;
            const sleepAttemptTime = sleepAttempt.split("T")[1].split(".")[0]; //Get time
            sleepAttemptTime = moment(sleepAttemptTime).format('h:mm:ss')
            const wakeUpTime = wakeUp.split("T")[1].split(".")[0]; //Get time
            wakeUpTime = moment(wakeUpTime).format('h:mm:ss')
            this.setState({sleepAttemptTime: sleepAttemptTime });
            this.setState({wakeUpTime: wakeUpTime});  
            }
            else{
              console.log("Oooops no key")
            }
            
          });
        } catch (error) {
      console.error(error);
    }
    const sleepHygiene = this.state.wakeUpTime - this.state.sleepAttemptTime
    if (this.state.sleepAttemptTime != null){
      console.log("Attempt to sleep time: ", this.state.sleepAttemptTime);
      console.log("Tell me my sleep hygiene", sleepHygiene);
     }
     else{
      console.log("Tell me my sleep hygiene", sleepHygiene);
      console.log("Damn no sleep diary input, weird");
      const sleep_tip = sleep_diary_tip();
      return sleep_tip;
     } 
  };
  
  onSubmitData = () => {
    const {toggleModal } = this.props;
    const {
        sleepQuality,
        sleepTime,
        attemptToSleepTime,
        durationTillSleep,
        numTimesWakeUp,
        durationTotalWakeUp,
        wakeUpTime,
        leaveBedTime,
        didNap,
        napTime,
        napDuration,
        others
      } = this.state;
    toggleModal();
    const values = {
        sleepQuality,
        sleepTime,
        attemptToSleepTime,
        durationTillSleep,
        numTimesWakeUp,
        durationTotalWakeUp,
        wakeUpTime,
        leaveBedTime,
        didNap,
        napTime,
        napDuration,
        others
    }
    storeSleepDiaryData(values);
    return this.getSleepData();
    
}
  render() {
    const today = new Date();
    const todayFormatted = `${parseInt(today.getMonth() + 1)}, ${today.getDate()}, ${today.getFullYear()}`;
    const {
      sleepQuality,
      sleepTime,
      attemptToSleepTime,
      durationTillSleep,
      numTimesWakeUp,
      durationTotalWakeUp,
      wakeUpTime,
      leaveBedTime,
      didNap,
      napTime,
      napDuration,
      others
    } = this.state;
    const { toggleModal, isVisible } = this.props;

    return (
      <Modal isVisible={isVisible}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.sleepDiary}>
          <SleepDiary />

          <ScrollView style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.date}>{todayFormatted}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>What time did you get into bed?</Text>
              </View>
              <View style={styles.answer}>
                <DatePicker
                  date={sleepTime}
                  onDateChange={sleepTime => this.setState({ sleepTime })}
                  mode={"time"}
                  fadeToColor={"none"}
                  textColor={"#000000"}
                  style={{ height: 50, width: 120 }}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  What time did you try to go to sleep?
                </Text>
              </View>
              <View style={styles.answer}>
                <DatePicker
                  date={attemptToSleepTime}
                  onDateChange={attemptToSleepTime =>
                    this.setState({ attemptToSleepTime })
                  }
                  mode={"time"}
                  fadeToColor={"none"}
                  textColor={"#000000"}
                  style={{ height: 50, width: 120 }}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  How long did it take you to fall asleep (min)?
                </Text>
              </View>
              <View style={styles.answer}>
                <TextInput
                  placeholder={"0.5"}
                  style={styles.textBox}
                  keyboardType="numeric"
                  value={durationTillSleep}
                  onChangeText={durationTillSleep =>
                    this.setState({ durationTillSleep })
                  }
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  How many times did you wake up, not counting your final
                  awakening?
                </Text>
              </View>
              <View style={styles.answer}>
                <TextInput
                  placeholder={"0"}
                  style={styles.textBox}
                  keyboardType="numeric"
                  value={numTimesWakeUp}
                  onChangeText={numTimesWakeUp =>
                    this.setState({ numTimesWakeUp })
                  }
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  In total, how long did these awakenings last?
                </Text>
              </View>
              <View style={styles.answer}>
                <TextInput
                  placeholder={"0"}
                  style={styles.textBox}
                  keyboardType="numeric"
                  value={durationTotalWakeUp}
                  onChangeText={durationTotalWakeUp =>
                    this.setState({ durationTotalWakeUp })
                  }
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  What time was your final awakening?
                </Text>
              </View>
              <View style={styles.answer}>
                <DatePicker
                  date={wakeUpTime}
                  onDateChange={wakeUpTime => this.setState({ wakeUpTime })}
                  mode={"time"}
                  fadeToColor={"none"}
                  textColor={"#000000"}
                  style={{ height: 50, width: 120 }}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  What time did you get out of bed that day?
                </Text>
              </View>
              <View style={styles.answer}>
                <DatePicker
                  date={leaveBedTime}
                  onDateChange={leaveBedTime => this.setState({ leaveBedTime })}
                  mode={"time"}
                  fadeToColor={"none"}
                  textColor={"#000000"}
                  style={{ height: 50, width: 120 }}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  Did you nap today? If so, when and for how long?
                </Text>
              </View>
              <View style={styles.answer}>
                <Picker
                  selectedValue={didNap}
                  style={{ height: 50, width: 120 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ didNap: itemValue })
                  }
                >
                  <Picker.Item label="No" value="no" />
                  <Picker.Item label="Yes" value="yes" />
                </Picker>
              </View>
            </View>

            {(didNap==="yes") && (
              <View style={styles.row}>
                <View style={styles.question}>
                  <Text style={styles.text}>When did you nap?</Text>
                </View>
                <View style={styles.answer}>
                  <DatePicker
                    date={napTime}
                    onDateChange={napTime => this.setState({ napTime })}
                    mode={"time"}
                    fadeToColor={"none"}
                    textColor={"#000000"}
                    style={{ height: 50, width: 120 }}
                  />
                </View>
              </View>
            )}
            {(didNap==="yes") && (
              <View style={styles.row}>

                <View style={styles.question}>
                  <Text style={styles.text}>How long did you nap (min)? </Text>
                </View>
                <View style={styles.answer}>
                  <TextInput
                    placeholder={"0"}
                    style={styles.textBox}
                    keyboardType="numeric"
                    value={napDuration}
                    onChangeText={napDuration => this.setState({ napDuration })}
                  />
                </View>
              </View>
            )}

            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>
                  How would you rate the quality of your sleep?
                </Text>
              </View>
              <View style={styles.answer}>
                <Picker
                  selectedValue={sleepQuality}
                  style={{ height: 50, width: 120 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ sleepQuality: itemValue })
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Poor" value="poor" />
                  <Picker.Item label="Average" value="average" />
                  <Picker.Item label="Good" value="good" />
                  <Picker.Item label="Great" value="great" />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>Comments (if applicable)</Text>
              </View>
              <View style={styles.answer}>
                <TextInput
                  placeholder={"it was noisy outside"}
                  style={styles.textBox}
                  value={others}
                  onChangeText={others => this.setState({ others })}
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.confirmation}>
            <View style={styles.diaryButtons}>
              <Button title="Cancel" onPress={toggleModal} />
            </View>
            <View style={styles.diaryButtons}>
              <Button title="Submit" onPress={this.onSubmitData} />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}></View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10
    // paddingTop: 40,
    // paddingBottom: 40
  },
  row: {
    flexDirection: "row",
    flex: 1,
    padding: 8
  },
  question: {
    flex: 4,
    paddingRight: 5
    // borderWidth: 1
  },
  answer: {
    flex: 3,
    alignItems: "center"
    // borderWidth: 1
  },
  text: {
    color: "black",
    fontSize: 17
  },
  textBox: {
    height: 50,
    width: 120,
    borderColor: "black",
    borderBottomWidth: 1,
    fontSize: 18,
    color: "black",
    textAlign: "center"
  },
  date: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  confirmation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  sleepDiary: {
    flex: 5,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: "white",
    borderRadius: 14,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  diaryButtons: {
    flex: 1,
    padding: 10
  }
});
