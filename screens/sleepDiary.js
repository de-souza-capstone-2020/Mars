import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView} from "react-native";
import DatePicker from 'react-native-date-picker'

export default class SleepDiary extends Component {
  state = { date: new Date() }
  render() {
    return (
      <ScrollView style={styles.body}>
        <Text style={styles.text}>Today's Date</Text>
        <Text style={styles.text}>What time did you get into bed?</Text>
        <DatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          mode={'time'}
          fadeToColor={'none'}
          textColor={'#ffffff'}
        />
        <Text style={styles.text}>What time did you try to go to sleep?</Text>
        <DatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          mode={'time'}
          fadeToColor={'none'}
          textColor={'#ffffff'}
        />
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>How long did it take you to fall asleep?</Text>
          </View>
          <View style={styles.answer}>
            <TextInput
              style={styles.textBox}
              keyboardType='numeric'
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>How many times did you wake up, not counting your final awakening?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>In total, how long did these awakenings last?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>What time was your final awakening?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>What time did you get out of bed that day?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>Did you nap today? If so, when and for how long?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>How would you rate the quality of your sleep?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>Comments (if applicable)</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40
  },
  row: {
    flexDirection: 'row',
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
    alignItems: 'center'
    // borderWidth: 1
  },
  text: {
    color: 'white',
    fontSize: 15
  },
  textBox: {
    height: 50,
    width: 40,
    borderColor: 'white', 
    borderBottomWidth: 1, 
    fontSize: 15, 
    color: 'white', 
    textAlign: 'center',
  }

});