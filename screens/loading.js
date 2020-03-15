import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";


export default class SplashScreen extends Component {
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ textAlign: "center", fontSize: 25}}>
          Loading Sleep Well...
        </Text>
      </View>
    );
  }
}

