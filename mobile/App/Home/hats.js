import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { VSFetch } from "../util/api";

import style from "../styles/index.style";

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 20
  }
});

class hats extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={style.safearea}>
          <View style={style.container}>
            <Text stle={styles.text}>Scrollable image list of hats</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default hats;
