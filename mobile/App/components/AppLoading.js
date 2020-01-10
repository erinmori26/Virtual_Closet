import React from "react";
import { Asset } from "expo-asset";
import { AVAILABLE_TOPS } from "../data/available_tops";

const topsList = [...AVAILABLE_TOPS];
class AppLoading extends React.Component {
  async componentWillMount() {
    await Asset.loadAsync([topsList]);
  }

  //   this.props.navigation.navigate("tops");
}

export default AppLoading;
