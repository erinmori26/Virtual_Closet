// import React from "react";
// import {
//   StyleSheet,
//   View,
//   ActivityIndicator,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   Image
// } from "react-native";
// import { VSFetch } from "../util/api";

// import { Icon } from "react-native-elements";

// import style from "../styles/index.style";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#192338",
//     paddingVertical: 50,
//     position: "relative"
//   },
//   title: {
//     fontSize: 20,
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 10
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff"
//   },
//   list: {
//     paddingVertical: 5,
//     margin: 3,
//     flexDirection: "row",
//     backgroundColor: "#192338",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     zIndex: -1
//   },
//   lightText: {
//     color: "#f7f7f7",
//     width: 200,
//     paddingLeft: 15,
//     fontSize: 12
//   },
//   line: {
//     height: 0.5,
//     width: "100%",
//     backgroundColor: "rgba(255,255,255,0.5)"
//   },
//   icon: {
//     position: "absolute",
//     bottom: 20,
//     width: "100%",
//     left: 290,
//     zIndex: 1
//   },
//   numberBox: {
//     position: "absolute",
//     bottom: 75,
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     left: 330,
//     zIndex: 3,
//     backgroundColor: "#e3e3e3",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   number: { fontSize: 14, color: "#000" },
//   selected: { backgroundColor: "#FA7B5F" }
// });

// class tops extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       dataSource: []
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
//     this.setState({ loading: true });

//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then(response => response.json())
//       .then(responseJson => {
//         responseJson = responseJson.map(item => {
//           item.isSelect = false;
//           item.selectedClass = styles.list;

//           return item;
//         });

//         this.setState({
//           loading: false,
//           dataSource: responseJson
//         });
//       })
//       .catch(error => {
//         this.setState({ loading: false });
//       });
//   };

//   FlatListItemSeparator = () => <View style={styles.line} />;

//   selectItem = data => {
//     data.item.isSelect = !data.item.isSelect;
//     data.item.selectedClass = data.item.isSelect
//       ? styles.selected
//       : styles.list;

//     const index = this.state.dataSource.findIndex(
//       item => data.item.id === item.id
//     );

//     this.state.dataSource[index] = data.item;

//     this.setState({
//       dataSource: this.state.dataSource
//     });
//   };

//   goToStore = () =>
//     this.props.navigation.navigate("Expenses", {
//       selected: this.state.selected
//     });

//   renderItem = data => (
//     <TouchableOpacity
//       style={[styles.list, data.item.selectedClass]}
//       onPress={() => this.selectItem(data)}
//     >
//       <Image
//         source={{ uri: data.item.thumbnailUrl }}
//         style={{ width: 40, height: 40, margin: 6 }}
//       />
//       <Text style={styles.lightText}>
//         {data.item.title.charAt(0).toUpperCase() + data.item.title.slice(1)}
//       </Text>
//     </TouchableOpacity>
//   );

//   render() {
//     const itemNumber = this.state.dataSource.filter(item => item.isSelect)
//       .length;
//     if (this.state.loading) {
//       return (
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="purple" />
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Products Available</Text>
//         <FlatList
//           data={this.state.dataSource}
//           ItemSeparatorComponent={this.FlatListItemSeparator}
//           renderItem={item => this.renderItem(item)}
//           keyExtractor={item => item.id.toString()}
//           extraData={this.state}
//         />

//         <View style={styles.numberBox}>
//           <Text style={styles.number}>{itemNumber}</Text>
//         </View>

//         <TouchableOpacity style={styles.icon}>
//           <View>
//             <Icon
//               raised
//               name="shopping-cart"
//               type="font-awesome"
//               color="#e3e3e3"
//               size={30}
//               onPress={() => this.goToStore()}
//               containerStyle={{ backgroundColor: "#FA7B5F" }}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default tops;

import React from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  Image,
  Linking
} from "react-native";

import { VSFetch } from "../util/api";
import style from "../styles/index.style";
import TopPic from "../components/topPic";

// const x = "../assets/Tops/1.png";

export default class tops extends React.Component {
  state = {
    tops: [],
    test: [],
    loading: false
  };

  componentDidMount() {
    VSFetch("/tops")
      .then(res => {
        this.setState({
          test: res.result.img,
          tops: res.result,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  loopRender() {
    a = this.state.tops;

    let s = [];
    let t = [];
    for (let i = 0; i < a.length; i++) {
      s.push(a[i].img);
      t.push(a[i].type);
      console.log(t[i]);
    }

    return s;

    // let l = [];
    // for (let b = 0; b < s.length; b++) {
    //   if (t[b] == "local") {
    //     x = "require(" + s[b] + ")";
    //     l.push(
    //       <View style={style.container}>
    //         {/* <Image style={style.image} source={x} /> */}
    //         <Text style={style.headerText}>{x}</Text>
    //       </View>
    //     );
    //   } else {
    //     l.push(
    //       <View style={style.container}>
    //         <Image style={style.image} source={s[b]} />
    //       </View>
    //     );
    //   }
    // }

    // return l;
  }

  newArr() {
    let ar = [];
    for (let u of this.state.tops) {
      // console.log(u.img);
      x = 'require("' + u.img + '")';
      ar.push(x);
    }

    return ar;
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }

    y = this.newArr();
    // console.log(y);
    // for (let u of this.state.tops) {
    //   console.log(u.img);
    // }

    // this.state.tops.map(us => {
    //   console.log(us);
    // });

    return (
      // <View style={style.container}>
      //   {/* <Image style={style.image} source={this.state.tops[0].img} /> */}
      //   <Image style={style.image} source={{uri: this.state.tops[0].img}} />
      //   {/* <Text style={style.headerText}>{this.state.tops[0]}</Text> */}
      // </View>
      <View style={style.container}>
        {/* {this.state.tops.map(mm => {
          // <Image
          //   style={{ height: 500, width: 500, flex: 1 }}
          //   source={{
          //     uri: mm
          //   }}
          // />;
          <Text style={style.headerText}>{mm.type}</Text>;
          // {/* <Text
          //   style={style.headerText}
          //   onPress={() => Linking.openURL(this.state.tops[0].img)}
          // >
          //   {this.state.tops[0].img}
          // </Text> */}
        {/* })} */}
        {/* <Image style={style.image} source={y[0]} />
        <Text style={style.headerText}>{y[0]}</Text> */}
        {/* <TopPic {...this.state.tops[0]} /> */}
        <FlatList
          data={this.state.tops}
          renderItem={item => (
            // <View style={style.container}>
            // <Image style={style.image} source={{ uri: item.img }} />
            <Text style={style.headerText}>YES {item.img}</Text>
            // </View>
            // <TopPic {...item} />
          )}
          // renderItem={(n) => this.loopRender()}

          // renderItem={({ item }) =>
          //   item.type == "local" ? (
          //     <View style={style.container}>
          //       <Image style={style.image} source={require(item.img)} />
          //     </View>
          //   ) : (
          //     <View style={style.container}>
          //       <Image style={style.image} source={item.img} />
          //     </View>
          //   )
          // }
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

// REGULAR ////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import { ActivityIndicator, FlatList, View, Image } from "react-native";

// import { VSFetch } from "../util/api";
// import style from "../styles/index.style";
// import { AVAILABLE_TOPS } from "../data/available_tops";

// const topsList = [...AVAILABLE_TOPS];

// export default class tops extends React.Component {
//   state = {
//     items: topsList,
//     loading: false
//   };

//   render() {
//     if (this.state.loading) {
//       return <ActivityIndicator />;
//     }

//     return (
//       <FlatList
//         data={this.state.items}
//         renderItem={({ item }) => (
//           <View style={style.container}>
//             <Image style={style.im} source={item} />
//           </View>
//         )}
//         keyExtractor={item => item._id}
//       />
//     );
//   }
// }

// TEST LINK  ////////////////////////////////////////////////////////////////////////
// import React from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   View,
//   Text,
//   Image,
//   Linking,
//   ScrollView
// } from "react-native";

// import { VSFetch } from "../util/api";
// import style from "../styles/index.style";
// import TopPic from "../components/topPic";
// import { AVAILABLE_TOPS } from "../data/available_tops";

// const topsList = [...AVAILABLE_TOPS];

// const x = require("../assets/Tops/1.png");

// export default class tops extends React.Component {
//   render() {
//     return (
//       <View style={style.container}>
//         <ScrollView>
//           {topsList.map(t => (
//             <Image style={style.im} source={t} />
//           ))}
//           <Image
//             style={{ height: 500, width: 500, flex: 1 }}
//             source={{
//               uri:
//                 "https://i.dlpng.com/static/png/4704265-voltron-png-96-images-in-collection-page-3-voltron-png-600_500_preview.png"
//             }}
//           />
//           <Image style={{ height: 500, width: 500, flex: 1 }} source={x} />
//         </ScrollView>
//       </View>
//     );
//   }
// }
