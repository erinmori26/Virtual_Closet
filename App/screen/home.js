import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Image
} from "react-native";

// import { AVAILABLE_PICS } from "../data/available_pics";
// import {  } from "../assets/Japan_Disney";
// const x = require("../assets/Japan_Disney/1.JPG");

const screen = Dimensions.get("window");
const PIC_WIDTH = Math.floor(screen.width * 0.25);
const PIC_HEIGHT = Math.floor(PIC_WIDTH * (323 / 222));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  safearea: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  headerText: {
    color: "#ff8d01",
    fontWeight: "bold",
    fontSize: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    lineHeight: 60
  },
  text: {
    color: "#000000",
    fontSize: 20
  },
  image: {
    height: PIC_HEIGHT,
    width: PIC_WIDTH
  }
});

const initialState = {
  data: [],
  currentImage: null
};

class home extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { ...initialState };

  getList = () => {
    // const possiblePics = [...AVAILABLE_PICS];
    // const possiblePics = [x];
    const possiblePics = [1, 2, 3];

    this.setState({ data: possiblePics });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safearea}>
          <FlatList
            data={this.state.data}
            ListHeaderComponent={(
              <View style={styles.view}>
                <Text style={styles.headerText}>Your Closet</Text>
                {/* {this.renderPickers()} */}
              </View>
            )}
            renderItem={item => (
              <Image source={item} style={styles.image} resizeMode="contain" />
            )}
            keyExtractor={item => item.id.toString()} // string used as key
          />
          <Text style={styles.text}>HOME</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default home;
