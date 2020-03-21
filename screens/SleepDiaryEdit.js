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
import { storeSleepDiaryDataFromEdit } from './utils/save-utils';

export default class SleepDiaryEdit extends Component {

  constructor(props){
    super(props);
    const {diaryInfo } = props;
    this.state = {
      sleepQuality: diaryInfo.sleepQuality || "",
      sleepTime: diaryInfo.sleepTime || yesterday,
      attemptToSleepTime: diaryInfo.attemptToSleepTime || yesterday,
      getInBedTime: diaryInfo.getInBedTime || yesterday,
      numTimesWakeUp: diaryInfo.numTimesWakeUp || 0,
      durationTotalWakeUp: diaryInfo.durationTillSleep || 0,
      wakeUpTime: diaryInfo.wakeUpTime || new Date(),
      leaveBedTime: diaryInfo.leaveBedTime || new Date(),
      didNap: diaryInfo.didNap || "",
      napTime: diaryInfo.napTime || new Date(),
      napDuration: diaryInfo.napDuration || 0,
      others: diaryInfo.others || "",
      dateTime: diaryInfo.dateTime || "Time Invalid"
    };
  }
  
  onSubmitData = () => {
    const {toggleModal } = this.props;
    const {
        sleepQuality,
        sleepTime,
        attemptToSleepTime,
        getInBedTime,
        numTimesWakeUp,
        durationTotalWakeUp,
        wakeUpTime,
        leaveBedTime,
        didNap,
        napTime,
        napDuration,
        others,
        dateTime
      } = this.state;
    toggleModal();
    const values = {
        sleepQuality,
        sleepTime,
        attemptToSleepTime,
        getInBedTime,
        numTimesWakeUp,
        durationTotalWakeUp,
        wakeUpTime,
        leaveBedTime,
        didNap,
        napTime,
        napDuration,
        others
    }
    storeSleepDiaryDataFromEdit(values,dateTime);
    
}



  render() {
    const today = new Date();
    const {
      sleepQuality,
      sleepTime,
      attemptToSleepTime,
      getInBedTime,
      numTimesWakeUp,
      durationTotalWakeUp,
      wakeUpTime,
      leaveBedTime,
      didNap,
      napTime,
      napDuration,
      others,
      dateTime
    } = this.state;
    const { toggleModal, isVisible, diaryInfo } = this.props;

    return (
      <Modal isVisible={isVisible}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.sleepDiary}>
          {/* <SleepDiaryEdit /> */}

          <ScrollView style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.date}>Sleep Diary: {dateTime}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.question}>
                <Text style={styles.text}>What time did you get into bed?</Text>
              </View>
              <View style={styles.answer}>
                <DatePicker
                  date={getInBedTime}
                  onDateChange={getInBedTime => this.setState({ getInBedTime})}
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
                What time did you fall asleep?
                </Text>
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
              <Button title="Save" onPress={this.onSubmitData} />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}></View>
      </Modal>
    );
  }
}

const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);

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
