import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

export default class History extends React.Component{

  render() {
    const { navigation } = this.props;
    console.disableYellowBox = true;
    return (
        <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={styles.logo_area}>
              <Text style={styles.title_font}> History </Text>
            </View>
          </View>
        </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#dbefff',
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
    fontSize: 45,
    color: 'black',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});
