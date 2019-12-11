import React from "react";
import { ActivityIndicator, FlatList, View, Image } from "react-native";

import { VSFetch } from "../util/api";
import style from "../styles/index.style";
import { AVAILABLE_HATS } from "../data/available_hats";

const hatsList = [...AVAILABLE_HATS];

export default class hats extends React.Component {
  state = {
    items: hatsList,
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
