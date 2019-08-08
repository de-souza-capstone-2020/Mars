/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from "./screens/welcome";
import Home from "./screens/home";

export default class App extends React.Component{
  render() {
    return(
      <AppStackNavigator />
    );
  }
};



const AppStackNavigator = createStackNavigator({
  Welcome: Welcome,
  Home: Home
})
