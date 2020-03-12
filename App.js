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
import { colors } from './screens/chat-screen/styles';
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