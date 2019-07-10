/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.body}>

          <View style={styles.logo_area}>
            <Text style={styles.title_font}> Logo </Text>
          </View>

          <View style={styles.get_started}>
            <Text style={styles.title_font}> Example text </Text>
            <Button
              icon={{
                name: "arrow-forward",
                size: 15,
                color: "white",
              }}
              title="Get started"
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
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

export default App;
