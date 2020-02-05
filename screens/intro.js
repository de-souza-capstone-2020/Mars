import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";
import Swiper from "react-native-swiper";
import { storeNickNameYearBirth } from "./utils/save-utils";
import RadioForm from "react-native-simple-radio-button";

export default class Intro extends React.Component {
  state = {
    nickName: "",
    yearOfBirth: "",
    snoring: 0,
    tired: 0,
    observed: 0,
    pressure: 0,
    bodyMass: 0,
    ageOlder50: 0,
    largeNeckSize: 0,
    gender: null,
    hasSleepApnea: false
  };

  onNavigate = () => {
    const { navigation } = this.props;
    const { nickName, yearOfBirth } = this.state;
    navigation.navigate("Home");
    storeNickNameYearBirth({ nickName, yearOfBirth });
  };
  onSubmitForSleepApnea = () => {
    const {
      snoring,
      tired,
      observed,
      pressure,
      bodyMass,
      ageOlder50,
      largeNeckSize,
      gender
    } = this.state;
    const stopCount = snoring + tired + observed + pressure;
    if (
      (stopCount >= 2 && gender === "male") ||
      (stopCount >= 2 && largeNeckSize === 1 && gender === "female") ||
      (stopCount >= 2 && largeNeckSize === 1 && gender === "male") ||
      (stopCount >= 2 && bodyMass === 1)
    ) {
      this.setState({ hasSleepApnea: true });
    }
  };
  render() {
    const { navigation } = this.props;
    const {
      hasSleepApnea
    } = this.state;
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.intro_text}>
            We suggest you stay with us for 6-8 weeks
          </Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>Please enter your nickname</Text>
          <TextInput
            style={styles.textBox}
            autoCapitalize="words"
            onChangeText={text => this.setState({ nickName: text })}
          />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.input_text}>Please enter your year of birth</Text>
          <TextInput
            style={styles.textBox}
            autoCapitalize="words"
            keyboardType="numeric"
            onChangeText={text => this.setState({ yearOfBirth: text })}
          />
        </View>

        {/* ============================================== */}
        <View style={styles.slide2}>
          <Text style={styles.input_text}>
            Do you snore loudly? (loud enough to be heard through closed doors
            or your bed-partner elbows you for snoring at night)?
          </Text>
          <RadioForm
            radio_props={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 }
            ]}
            formHorizontal={true}
            labelHorizontal={false}
            initial={-1}
            onPress={value => {
              this.setState({ snoring: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>
            Do you often feel Tired, Fatigued, or Sleepy during the daytime
            (such as falling asleep during driving or talking to someone)?
          </Text>
          <RadioForm
            radio_props={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 }
            ]}
            formHorizontal={true}
            labelHorizontal={false}
            initial={-1}
            onPress={value => {
              this.setState({ tired: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>
            Has anyone Observed you Stop Breathing or Choking/Gasping during
            your sleep ?
          </Text>
          <RadioForm
            radio_props={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 }
            ]}
            initial={-1}
            formHorizontal={true}
            labelHorizontal={false}
            onPress={value => {
              this.setState({ observed: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>
            Do you have or are being treated for High Blood Pressure ?
          </Text>
          <RadioForm
            radio_props={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 }
            ]}
            formHorizontal={true}
            labelHorizontal={false}
            initial={-1}
            onPress={value => {
              this.setState({ pressure: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>Is your BMI > 35kg/m^2 </Text>
          <RadioForm
            radio_props={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 }
            ]}
            formHorizontal={true}
            labelHorizontal={false}
            initial={-1}
            onPress={value => {
              this.setState({ bodyMass: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>Are you > 50 years old</Text>
          <RadioForm
            radio_props={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 }
            ]}
            formHorizontal={true}
            labelHorizontal={false}
            initial={-1}
            onPress={value => {
              this.setState({ ageOlder50: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>
            For male, is your shirt collar 17 inches / 43cm or larger? For
            female, is your shirt collar 16 inches / 41cm or larger?
          </Text>
          <RadioForm
            radio_props={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 }
            ]}
            formHorizontal={true}
            labelHorizontal={false}
            initial={-1}
            onPress={value => {
              this.setState({ largeNeckSize: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>Are you a male or a female?</Text>
          <RadioForm
            radio_props={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" }
            ]}
            formHorizontal={true}
            labelHorizontal={false}
            initial={-1}
            onPress={value => {
              this.setState({ gender: value });
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.input_text}>Confirm</Text>
          <Button title="Submit" onPress={this.onSubmitForSleepApnea} />
        </View>
        {hasSleepApnea && (
          <View style={styles.slide2}>
            <Text style={styles.input_text}>
              You have sleep apnea. This application will not help you. Please seek professional help.
            </Text>
          </View>
        )}
        {!hasSleepApnea && (
          <View style={styles.slide2}>
            <Text style={styles.input_text}>You're all set</Text>
            <Button title="Go to chatbot" onPress={this.onNavigate} />
          </View>
        )}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    padding: 50
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
    padding: 50
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
    padding: 50
  },
  intro_text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  input_text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 50,
    textAlign: "center"
  },
  textBox: {
    height: 50,
    width: 250,
    borderColor: "white",
    borderBottomWidth: 1,
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
