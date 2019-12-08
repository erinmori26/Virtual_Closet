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

class addClothes extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={style.safearea}>
          <View style={style.container}>
            <Text style={style.headerText}>Add Clothes</Text>
            <Text style={styles.text}>
              Select a category, then select images in that category to add
            </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default addClothes;
