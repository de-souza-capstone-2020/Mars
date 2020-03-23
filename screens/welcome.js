import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  AsyncStorage
} from "react-native";
import { Button } from 'react-native-elements';
import { colors } from "./chat-screen/styles";


export default class Welcome extends React.Component {
  state = {
    onboarded: false
  };

  componentDidMount() {
    // this.isUserOnboarded(); //comment out for onboarding flow
  }
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  isUserOnboarded = async () => {
    const name = await AsyncStorage.getItem("Nickname");
    if (name != null) {
      //nickname found
      this.setState({ onboarded: true });
    }
    
  };

  render() {
    const { navigation } = this.props;
    console.disableYellowBox = true;
    const onboarded = this.state.onboarded;
    let button;
    if (!onboarded) {
      button = (
        <Button
          icon={{
            name: "arrow-forward",
            size: 15,
            color: "white"
          }}
          buttonStyle={styles.button}
          titleStyle={{
            color: 'white',
          }}
          type='solid'
          title="Get started"
          onPress={() => navigation.navigate("Intro")}
        />
      );
    } else {
      button = (
        <Button
          icon={{
            name: "arrow-forward",
            size: 15,
            color: 'white',
          }}
          buttonStyle={styles.button}
          titleStyle={{
            color: 'white',
          }}
          type='solid'
          title="Directly to chatbot"
          // type="clear"
          onPress={() => navigation.navigate("Home")}
        />
      );
    }
    return (
      <SafeAreaView style={styles.body}>
        <View style={styles.body}>
          <View style={styles.logo_area}>
            {/* <Image 
              source={require('../screens/data/logo.png')}
              style={{width: 400, height: 250}}
            /> */}
            <Text style={styles.title_font}> 
              SleepWell
            </Text>
          </View>
          <View style={styles.get_started}>
            {button}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    // backgroundColor: "#cfe2f3",
    backgroundColor: colors.background,
    flex: 1
  },
  logo_area: {
    flex: 2,
    justifyContent: "center",
    borderColor: "red",
    // borderWidth: 1,
  },
  get_started: {
    flex: 1,
    borderColor: "blue",
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingTop: 50,
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
    fontSize: 55,
    color: "black",
    textAlign: "center",
    fontFamily: "Bimbo-Regular-trial"
  },
  highlight: {
    fontWeight: "700"
  },
  button: {
    borderColor: colors.accent,
    borderWidth: 2,
    borderRadius: 15,
    width: 250,
    backgroundColor: colors.accent,
  }
});
