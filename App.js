/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import Welcome from "./screens/welcome";
import Home from "./screens/chat-screen/home";
import Setting from "./screens/setting";
import Test from "./screens/chat-screen/tmp-inputoutput";

const WelcomeStack = createStackNavigator({
  Welcome: Welcome,
  },
  {
    headerMode: "none"
  });

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home"
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarLabel: "Settings"
    }
  },
  Test: {
    screen: Test,
    navigationOptions: {
      tabBarLabel: "Test"
    }
  },
});

const App = createSwitchNavigator({
  WelcomeStack: WelcomeStack,
  App: MainTabs
  });

export default createAppContainer(App);
