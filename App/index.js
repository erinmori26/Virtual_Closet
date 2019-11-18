import React from "react";
// import { StatusBar, TouchableOpacity, Text } from "react-native";
// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import settings from "./screen/settings";
import home from "./screen/home";
import buildOutfit from "./screen/buildOutfit";
import addClothes from "./screen/addClothes";

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Add: {
      screen: addClothes,
      navigationOptions: {
        tabBarLabel: "Add",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-add" color={tintColor} size={24} />
        )
      }
    },
    Outfit: {
      screen: buildOutfit,
      navigationOptions: {
        tabBarLabel: "Build",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-body" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    // router config
    initialRouteName: "Home",
    order: ["Home", "Add", "Outfit", "Settings"],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "gray",
      activeBackgroundColor: "lavender"
    }
  }
);

export default createAppContainer(MainStack);
