import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage
} from 'react-native';
import { ListItem } from 'react-native-elements'
import SplashScreen from "../loading";
import { retrieveSleepDiaryData } from "../utils/save-utils";

export default class History extends React.Component{

  state = {
    diaryHistory: [],
    isLoading: true,
  }

  async componentDidMount() {
    await this.getDiaryList();
    // if (this.state.diaryHistory) {
      
    // }
    this.setState({isLoading: false});
  }

  getDiaryList = async () => {
    try {
      AsyncStorage.getAllKeys().then(keys => {
        keys.map((key) =>{
          if (key.search("[0-9]") != -1){
            this.setState({ diaryHistory: [...this.state.diaryHistory, {title: key}] });
          }
        })
      });
    } catch (e) {
      console.log(e);
    }
    console.log(this.state.diaryHistory);

    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  }

  render() {
    const {isLoading, diaryHistory} = this.state;
    if (isLoading) {
      return <SplashScreen />;
    }
    return (
        <SafeAreaView style={styles.body}>
          <ScrollView style={styles.body}>
            <Text style={styles.title_font}> Sleep Diary History </Text>
            {
              diaryHistory.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  titleProps={{fontSize: 15, color: 'black'}}
                  bottomDivider
                  chevron
                  onPress={()=>retrieveSleepDiaryData(item.title)} //replace with actual function
                />
              ))
            }
          </ScrollView>
        </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#dbefff',
    flex: 1,
  },
  logo_area: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'red',
    // borderWidth: 1,
  },
  get_started:{
    flex: 2,
    borderColor: 'blue',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  title_font: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});
