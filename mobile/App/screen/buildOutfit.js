import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  ActivityIndicator
} from "react-native";
import { VSFetch } from "../util/api";

import Swiper from "react-native-swiper";
import style from "../styles/index.style";
import { AVAILABLE_TOPS } from "../data/available_tops";
import { AVAILABLE_BOTTOMS } from "../data/available_bottoms";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  bigger: {
    flex: 2,
    justifyContent: "flex-end"
  },
  text: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const tops = [...AVAILABLE_TOPS];
const bottoms = [...AVAILABLE_BOTTOMS];
const TODO = ["1", "2", "3"];

// const initialState = {
//   data: possibleTops,
//   currentImage: null
// };

class buildOutfit extends Component {
  // eslint-disable-next-line react/state-in-constructor
  // state = { ...initialState };

  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={style.safearea}>
          <View>
            <Text style={style.headerText}>Build My Outfit</Text>
          </View>
          <Swiper
            style={styles.wrapper}
            showsPagination={false}
            showsButtons
            loadMinimal={true}
            loadMinimalSize={5}
            loadMinimalLoader={<ActivityIndicator />}
          >
            {TODO.map(i => {
              return (
                <View style={styles.slide}>
                  {/* <Image style={style.image} source={i} /> */}
                  <Text style={styles.text}>{i}</Text>
                </View>
              );
            })}
          </Swiper>
          <Swiper
            style={styles.wrapper}
            containerStyle={styles.bigger}
            showsPagination={false}
            showsButtons
            loadMinimal={true}
            loadMinimalSize={5}
            loadMinimalLoader={<ActivityIndicator />}
          >
            {tops.map(i => {
              return (
                <View style={styles.slide}>
                  <Image style={style.image} source={i} />
                </View>
              );
            })}
          </Swiper>
          <Swiper
            style={styles.wrapper}
            containerStyle={styles.bigger}
            showsPagination={false}
            showsButtons
            loadMinimal={true}
            loadMinimalSize={5}
            loadMinimalLoader={<ActivityIndicator />}
          >
            {bottoms.map(i => {
              return (
                <View style={styles.slide}>
                  <Image style={style.image} source={i} />
                </View>
              );
            })}
          </Swiper>
          <Swiper
            style={styles.wrapper}
            showsPagination={false}
            showsButtons
            loadMinimal={true}
            loadMinimalSize={5}
            loadMinimalLoader={<ActivityIndicator />}
          >
            {TODO.map(i => {
              return (
                <View style={styles.slide}>
                  {/* <Image style={style.image} source={i} /> */}
                  <Text style={styles.text}>{i}</Text>
                </View>
              );
            })}
          </Swiper>
        </SafeAreaView>
      </View>
    );
  }
}

export default buildOutfit;
