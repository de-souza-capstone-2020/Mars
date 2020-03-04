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
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import Welcome from "./screens/welcome";
import Home from "./screens/chat-screen/home";
import Intro from "./screens/intro";
import Setting from "./screens/setting";
import History from './screens/chat-screen/history';

const WelcomeStack = createStackNavigator({
  Welcome: Welcome
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
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: "History"
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarLabel: "Settings"
    }
  },
});

const App = createSwitchNavigator({
  WelcomeStack: WelcomeStack,
  Intro: Intro,
  App: MainTabs
  });

export default createAppContainer(App);
