import React, { Fragment, Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import Swiper from 'react-native-swiper';

export default class Intro extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>We suggest you stay with us for 6-8 weeks</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Please enter your nickname</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Please enter your year of birth</Text>
        </View>
        <View style={styles.slide2}>
          <Button 
            title="Go to chatbot"
            onPress={()=>this.props.navigation.navigate('Home')}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#dbefff",
    flex: 1
  },
  logo_area: {
    flex: 1,
    justifyContent: "center",
    borderColor: "red"
    // borderWidth: 1,
  },
  get_started: {
    flex: 2,
    borderColor: "blue",
    justifyContent: "center"
    // borderWidth: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "black"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: "black"
  },
  title_font: {
    fontSize: 45,
    color: "black",
    textAlign: "center"
  },
  highlight: {
    fontWeight: "700"
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});