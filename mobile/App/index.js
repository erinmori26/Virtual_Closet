import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import settings from "./screen/settings";
import buildOutfit from "./screen/buildOutfit";
import addClothes from "./screen/addClothes";
import Home from "./Home";

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
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

// tab navigator needs to be wrapped inside a stack navigator
export default createAppContainer(
  createStackNavigator({ MainStack }, { headerMode: "none" })
);
