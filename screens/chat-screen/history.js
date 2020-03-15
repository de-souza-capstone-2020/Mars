import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import SplashScreen from "../loading";
import { retrieveSleepDiaryData } from "../utils/save-utils";
import SleepDiaryEdit from "../SleepDiaryEdit";
import { s } from "./styles";

export default class History extends React.Component {
  state = {
    diaryHistory: [],
    isLoading: true,
    isModalVisible: false,
    sleepDiaryInfo: null
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  async componentDidMount() {
    await this.getDiaryList();
    // if (this.state.diaryHistory) {

    // }
    this.setState({ isLoading: false });
  }

  getDiaryList = async () => {
    try {
      AsyncStorage.getAllKeys().then(keys => {
        keys.map(key => {
          if (key.search("[0-9]") != -1) {
            this.setState({
              diaryHistory: [...this.state.diaryHistory, { title: key }]
            });
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
    console.log(this.state.diaryHistory);

    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 1000)
    );
  };

  getDiaryData = itemTitle => {
    try {
      AsyncStorage.getItem(itemTitle).then(value => {
        if (value != null) {
          const JSONValue = JSON.parse(value);
          JSONValue.dateTime = itemTitle;

          this.setState({ sleepDiaryInfo: JSONValue });
        }
        this.toggleModal();
      });
    } catch (error) {
      console.error(error);
      console.log("There are errors");
    }
  };

  render() {
    const {
      isLoading,
      diaryHistory,
      isModalVisible,
      sleepDiaryInfo
    } = this.state;
    if (isLoading) {
      return <SplashScreen />;
    }
    return (
      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.body}>
          <Text style={styles.title_font}> Sleep Diary History </Text>
          {diaryHistory.reverse().map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={
                <Icon
                  name="calendar"
                  type="font-awesome"
                  color={s.lightGrey}
                  iconStyle={{ paddingLeft: 10 }}
                />
              }
              titleStyle={{ fontSize: 18, color: s.lightGrey }}
              style={{
                backgroundColor: s.backgroundColor,
                paddingLeft: 20,
                paddingRight: 20
              }}
              bottomDivider
              chevron
              onPress={() => this.getDiaryData(item.title)} //replace with actual function
            />
          ))}
        </ScrollView>
        {/* {console.log(sleepDiaryInfo, "=========")} */}
        {isModalVisible && sleepDiaryInfo !== null && (
          <SleepDiaryEdit
            toggleModal={this.toggleModal}
            isVisible={isModalVisible}
            diaryInfo={sleepDiaryInfo}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: s.backgroundColor,
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
    padding: 20,
    fontSize: 25,
    color: "black",
    textAlign: "left",
    fontWeight: "bold"
  },
  highlight: {
    fontWeight: "700"
  }
});
