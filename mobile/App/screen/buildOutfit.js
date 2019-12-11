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
import { AVAILABLE_HATS } from "../data/available_hats";
import { AVAILABLE_TOPS } from "../data/available_tops";
import { AVAILABLE_BOTTOMS } from "../data/available_bottoms";
import { AVAILABLE_SHOES } from "../data/available_shoes";

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

const hats = [...AVAILABLE_HATS];
const tops = [...AVAILABLE_TOPS];
const bottoms = [...AVAILABLE_BOTTOMS];
const shoes = [...AVAILABLE_SHOES];

// const initialState = {
//   data: possibleTops,
//   currentImage: null
// };

class buildOutfit extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { count: 0, loading: false };

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
            {hats.map(i => {
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
            {tops.map(j => {
              return (
                <View style={styles.slide}>
                  <Image style={style.image} source={j} />
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
            {bottoms.map(k => {
              return (
                <View style={styles.slide}>
                  <Image style={style.image} source={k} />
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
            {shoes.map(m => {
              return (
                <View style={styles.slide}>
                  <Image style={style.image} source={m} />
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
