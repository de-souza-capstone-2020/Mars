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
import { Icon } from 'react-native-elements'
import Welcome from "./screens/welcome";
import Home from "./screens/chat-screen/home";
import Intro from "./screens/intro";
import Setting from "./screens/chat-screen/setting";
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
      tabBarLabel: "Home",
      tabBarIcon: 
        <Icon 
          name = 'comments'
          type = 'font-awesome'
        />
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: "History",
      tabBarIcon: 
        <Icon 
          name = 'history'
          type = 'font-awesome'
        />
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarLabel: "Settings",
      tabBarIcon: <Icon
        name='cog'
        type='font-awesome'
        // color='#f99' 
        />
    }
  },
});

const App = createSwitchNavigator({
  WelcomeStack: WelcomeStack,
  Intro: Intro,
  App: MainTabs
  });

export default createAppContainer(App);
