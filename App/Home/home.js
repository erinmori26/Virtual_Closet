import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import style from "../styles/index.style";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 20
  },
  button: {
    borderWidth: 10,
    borderColor: "#977fc9",
    width: screen.width / 3,
    height: screen.width / 3,
    borderRadius: screen.width / 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginLeft: 15,
    marginTop: 50
  },
  buttonText: {
    fontSize: 20,
    color: "#0b00a6",
    fontWeight: "bold",
    textAlign: "center"
  }
});

class home extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={style.safearea}>
          <View style={style.container}>
            <Text style={style.headerText}>My Closet</Text>
            <View style={style.row}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("tops")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Tops</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("bottoms")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Bottoms</Text>
              </TouchableOpacity>
            </View>
            <View style={style.row}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("hats")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Hats</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("shoes")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Shoes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default home;
