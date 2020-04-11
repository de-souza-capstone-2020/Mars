/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Icon } from 'react-native-elements';
import { colors } from './src/styles';
import Welcome from "./src/welcome";
import Home from "./src/chatbot";
import Intro from "./src/intro";
import Setting from "./src/setting";
import History from './src/history';

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
      tabBarLabel: <View/>,
      tabBarIcon: ({tintColor}) => 
        <Icon 
          name = 'comments'
          type = 'font-awesome'
          color={tintColor}
        />,
        
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: <View/>,
      tabBarIcon: ({tintColor}) => 
        <Icon 
          name = 'history'
          type = 'font-awesome'
          color={tintColor}
        />,
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarLabel: <View/>,
      tabBarIcon: ({tintColor}) => 
      <Icon
        name='cog'
        type='font-awesome'
        color={tintColor}
        />,
    }
  },
},{
  tabBarOptions: {
    activeTintColor: colors.accent,
    inactiveTintColor: 'gray',
    tabStyle:{
      backgroundColor:colors.background,
    },
  }
}
);

const App = createSwitchNavigator({
  WelcomeStack: WelcomeStack,
  Intro: Intro,
  App: MainTabs
  });

export default createAppContainer(App);