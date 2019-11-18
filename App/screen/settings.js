import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#000000",
    fontSize: 20
  }
});

class menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SETTINGS</Text>
      </View>
    );
  }
}

export default menu;
