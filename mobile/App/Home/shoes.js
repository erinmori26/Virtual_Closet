import React from "react";
import { ActivityIndicator, FlatList, View, Image } from "react-native";

import { VSFetch } from "../util/api";
import style from "../styles/index.style";
import { AVAILABLE_SHOES } from "../data/available_shoes";

const shoesList = [...AVAILABLE_SHOES];

export default class shoes extends React.Component {
  state = {
    items: shoesList,
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
        keyExtractor={item => item._id}
      />
    );
  }
}
