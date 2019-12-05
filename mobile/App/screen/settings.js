import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import style from "../styles/index.style";

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 20
  }
});

class settings extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={style.safearea}>
          <View style={style.container}>
            <Text style={style.headerText}>Settings</Text>
            <Text style={styles.text}>Function to clear closet</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default settings;
