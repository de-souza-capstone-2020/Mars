import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { welcome_page } from "../welcome/welcome_page";
import { intro1 } from "../welcome/intro1";

const AppNavigator = createStackNavigator({
    welcome_page: {screen: welcome_page},
    intro1: {screen: intro1}
  },
  {
   initialRouteName: 'welcome_page'
});

export default createAppContainer(AppNavigator);
