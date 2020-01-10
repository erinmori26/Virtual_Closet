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
import { VSFetch } from "../util/api";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 20,
    marginTop: 5,
    justifyContent: "flex-end"
  },
  button: {
    borderWidth: 10,
    borderColor: "#977fc9",
    width: (screen.width * 3) / 8,
    height: (screen.width * 3) / 8,
    borderRadius: (screen.width * 3) / 8,
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 15,
    // marginLeft: 15,
    // marginTop: 30,
    // marginBottom: 30,
    margin: 15
    // flex: 1
  },
  buttonText: {
    fontSize: 23,
    color: "#0b00a6",
    fontWeight: "bold",
    textAlign: "center"
  }
});

class home extends React.Component {
  state = { count: null, loading: false };

  // getUpdate() {
  //   this.setState({ loading: true }, () => {
  //     VSFetch(`/getLog`, { method: "GET" })
  //       .then(res => {
  //         // get response
  //         // console.log(res.result);
  //         this.setState({ count: res.result.count }); // increment log after button press
  //       })
  //       .catch(error => {
  //         console.log("log get error", error);
  //       })
  //       .finally(() => {
  //         // can press button again
  //         this.setState({ loading: false });
  //       });
  //   });
  // }

  handleLogPress() {
    this.setState({ loading: true }, () => {
      VSFetch(`/addLog`, { method: "PUT" })
        .then(res => {
          // get response
          // console.log(res.result);
          this.setState({ count: res.result.count }); // increment log after button press
        })
        .catch(error => {
          console.log("log press error", error);
        })
        .finally(() => {
          // can press button again
          this.setState({ loading: false });
        });
    });
  }

  handleClearPress() {
    this.setState({ loading: true }, () => {
      VSFetch(`/clearLog`, { method: "PUT" })
        .then(res => {
          // get response
          // console.log(res.result);
          this.setState({ count: res.result.count }); // increment log after button press
        })
        .catch(error => {
          console.log("log clear error", error);
        })
        .finally(() => {
          // can press button again
          this.setState({ loading: false });
        });
    });
  }

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
            <View style={style.row}>
              <TouchableOpacity
                style={style.button1}
                onPress={() => this.handleLogPress()}
              >
                <Text style={[style.buttonText1, { marginLeft: 5 }]}>
                  Log Today
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.button1}
                onPress={() => this.handleClearPress()}
              >
                <Text style={[style.buttonText1, { marginRight: 15 }]}>
                  Clear Log
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.buttonText, { margin: 15 }]}>
              {`Logged outfits ${this.state.count || 0} times.`}
            </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default home;
