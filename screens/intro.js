import React, { Fragment, Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, TextInput,} from "react-native";
import Swiper from 'react-native-swiper';

export default class Intro extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.intro_text}>We suggest you stay with us for 6-8 weeks</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>Please enter your nickname</Text>
          <TextInput
            style={styles.textBox}
            autoCapitalize='words'
          />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.input_text}>Please enter your year of birth</Text>
          <TextInput
            style={styles.textBox}
            autoCapitalize='words'
            keyboardType='numeric'
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>You're all set</Text>
          <Button 
            title="Go to chatbot"
            onPress={()=>navigation.navigate('Home')}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 50,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    padding: 50,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    padding: 50,
  },
  intro_text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
  },
  input_text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 50,
    textAlign: 'center',
  },
  textBox: {
    height: 50, 
    width: 250, 
    borderColor: 'white', 
    borderBottomWidth: 1, 
    fontSize: 30, 
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
  }
});