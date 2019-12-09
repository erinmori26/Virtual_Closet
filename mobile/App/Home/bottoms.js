import React from "react";
import { ActivityIndicator, FlatList, View, Image } from "react-native";

import { VSFetch } from "../util/api";
import style from "../styles/index.style";
import { AVAILABLE_BOTTOMS } from "../data/available_bottoms";

const bottomsList = [...AVAILABLE_BOTTOMS];

export default class bottoms extends React.Component {
  state = {
    items: bottomsList,
    loading: false
  };

  // componentDidMount() {
  //   VSFetch("/tops")
  //     .then(res => {
  //       this.setState({
  //         tops: res.result,
  //         loading: false
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }

    return (
      <FlatList
        data={this.state.items}
        renderItem={({ item }) => (
          <View style={style.container}>
            <Image style={style.im} source={item} />
          </View>
        )}
      />
    );
  }
}
