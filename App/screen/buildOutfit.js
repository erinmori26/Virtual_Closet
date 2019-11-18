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

class buildOutfit extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>OUTFIT</Text>
      </View>
    );
  }
}

export default buildOutfit;
