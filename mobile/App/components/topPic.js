import React from "react";
import { ActivityIndicator, FlatList, View, Text, Image } from "react-native";

import { VSFetch } from "../util/api";
import style from "../styles/index.style";

// const x = "../assets/Tops/1.png";

export const TopPic = ({ img }) => (
  //   <View style={style.container}>
  //   <Text style={style.headerText}>{img}</Text>
  <Image style={{ height: 400, width: 400, flex: 1 }} source={{ uri: img }} />
  //   </View>
);
