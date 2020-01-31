import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView, Picker} from "react-native";
import DatePicker from 'react-native-date-picker'

export default class SleepDiary extends Component {
  state = { 
    bedTime: new Date(),
    sleepTime: new Date(),
    sleepQuality: ''
  }
  render() {
    const today = new Date();
    const todayFormatted = today.getDate() + "th of "+ parseInt(today.getMonth()+1) +", "+today.getFullYear();
    return (
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
              date={this.state.bedTime}
              onDateChange={date => this.setState({ date })}
              mode={'time'}
              fadeToColor={'none'}
              textColor={'#000000'}
              style={{height:50, width: 120}}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>What time did you try to go to sleep?</Text>
          </View>
          <View style={styles.answer}>
            <DatePicker
              date={this.state.sleepTime}
              onDateChange={date => this.setState({ date })}
              mode={'time'}
              fadeToColor={'none'}
              textColor={'#000000'}
              style={{height:50, width: 120}}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>How long did it take you to fall asleep?</Text>
          </View>
          <View style={styles.answer}>
            <TextInput
              placeholder={'0.5'}
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
            <TextInput
              placeholder={'0'}
              style={styles.textBox}
              keyboardType='numeric'
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>In total, how long did these awakenings last?</Text>
          </View>
          <View style={styles.answer}>
            <TextInput
              placeholder={'0'}
              style={styles.textBox}
              keyboardType='numeric'
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>What time was your final awakening?</Text>
          </View>
          <View style={styles.answer}>
            <DatePicker
              date={this.state.sleepTime}
              onDateChange={date => this.setState({ date })}
              mode={'time'}
              fadeToColor={'none'}
              textColor={'#000000'}
              style={{height:50, width: 120}}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>What time did you get out of bed that day?</Text>
          </View>
          <View style={styles.answer}>
            <DatePicker
              date={this.state.sleepTime}
              onDateChange={date => this.setState({ date })}
              mode={'time'}
              fadeToColor={'none'}
              textColor={'#000000'}
              style={{height:50, width: 120}}
            />
          </View>
        </View>
        {/* <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>Did you nap today? If so, when and for how long?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.text}>Im good!</Text>
          </View>
        </View> */}
        <View style={styles.row}>
          <View style={styles.question}>
            <Text style={styles.text}>How would you rate the quality of your sleep?</Text>
          </View>
          <View style={styles.answer}>
            <Picker
              selectedValue={this.state.sleepQuality}
              style={{height: 50, width: 120}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({sleepQuality: itemValue})
              }>
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
              placeholder={'it was noisy outside'}
              style={styles.textBox}
            />
          </View>
        </View>
      </ScrollView>
    )
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
    color: 'black',
    fontSize: 17
  },
  textBox: {
    height: 50,
    width: 120,
    borderColor: 'black', 
    borderBottomWidth: 1, 
    fontSize: 18, 
    color: 'black', 
    textAlign: 'center',
  },
  date: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }

});