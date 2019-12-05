// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   StatusBar,
//   SafeAreaView,
//   Dimensions,
//   Image
// } from "react-native";
// import Carousel from "react-native-snap-carousel"; // for carousel picker

// // import SliderEntry from "../components/SliderEntry";
// import { AVAILABLE_PICS } from "../data/available_pics";

// const screen = Dimensions.get("window");
// const PIC_WIDTH = Math.floor(screen.width * 0.25);
// const PIC_HEIGHT = Math.floor(PIC_WIDTH * (323 / 222));

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center"
//     // justifyContent: "center"
//   },
//   safearea: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1
//   },
//   headerText: {
//     color: "#0b00a6",
//     fontWeight: "bold",
//     fontSize: 40,
//     paddingHorizontal: 10,
//     backgroundColor: "#fff",
//     lineHeight: 60,
//     textAlignVertical: "top"
//   },
//   text: {
//     color: "#000000",
//     fontSize: 20
//   },
//   image: {
//     height: PIC_HEIGHT,
//     width: PIC_WIDTH
//   }
// });

// const possiblePics = [...AVAILABLE_PICS];

// const initialState = {
//   data: possiblePics,
//   index: null
// };

// class buildOutfit extends React.Component {
//   // eslint-disable-next-line react/state-in-constructor
//   state = { ...initialState };

//   _renderItem = (item, index) => {
//     return (
//       <View style={styles.slide}>
//         {/* <Text style={styles.title}>{item.title}</Text> */}
//         <Image source={item} style={styles.image} resizeMode="contain" />
//       </View>
//       // <SliderEntry data={item} even={(index + 1) % 2 === 0} />
//     );
//   };

//   render() {
//     const {
//       data: { item }
//     } = this.state;

//     const displayImage = (
//       <Image source={item} style={styles.image} resizeMode="contain" />
//     );

//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={styles.container}>
//             <Text style={styles.headerText}>Build My Outfit</Text>
//           </View>
//           {/* <Carousel
//             ref={c => {
//               this._carousel = c;
//             }}
//             data={this.state.data}
//             renderItem={() => {
//               // LOOK AT SLIDER ENTRY THING
//               this._renderItem();
//             }}
//             layout="default"
//             sliderWidth={screen.width}
//             sliderHeight={PIC_HEIGHT}
//             itemWidth={PIC_WIDTH}
//             itemHeight={PIC_HEIGHT}
//             enableSnap
//             onPress={() => {
//               this._carousel.snapToNext();
//             }}
//           /> */}
//           {/* <FlatList
//             data={this.state.data}
//             ListHeaderComponent={(
//               <View style={styles.view}>
//                 <Text style={styles.headerText}>list</Text>
//               </View>
//             )}
//             renderItem={i => (
//               <Image source={i} style={styles.image} resizeMode="contain" />
//             )}
//             keyExtractor={i => i.id.toString()} // string used as key
//           /> */}
//         </SafeAreaView>
//       </View>
//     );
//   }
// }

// export default buildOutfit;

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image
} from "react-native";

import Swiper from "react-native-swiper";
import style from "../styles/index.style";
import { AVAILABLE_PICS } from "../data/available_pics";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const possiblePics = [...AVAILABLE_PICS];

const initialState = {
  data: possiblePics,
  currentImage: null
};

// const initialArr = [
//   {
//     id: 1,
//     image: possiblePics[0]
//   },
//   {
//     id: 2,
//     image: possiblePics[1]
//   },
//   {
//     id: 3,
//     image: possiblePics[2]
//   }
// ];

class buildOutfit extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { ...initialState };

  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={style.safearea}>
          <View>
            <Text style={style.headerText}>Build My Outfit</Text>
          </View>
          <Swiper style={styles.wrapper} showsButtons>
            <View style={styles.slide1}>
              {/* <Text style={styles.text}>Hat 1</Text> */}
              {/* <Image style={style.image} src={require("")} */}
              <Image style={style.image} source={possiblePics[0]} />
              {/* {initialArr.map((key, prop) => {
                return <Image style={style.image} key={key} source={prop[1]} />;
              })} */}
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Hat 2</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Hat 3</Text>
            </View>
          </Swiper>
          <Swiper style={styles.wrapper} showsButtons>
            <View style={styles.slide1}>
              {/* <Text style={styles.text}>Top 1</Text> */}
              <Image style={style.image} source={possiblePics[1]} />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Top 2</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Top 3</Text>
            </View>
          </Swiper>
          <Swiper style={styles.wrapper} showsButtons>
            <View style={styles.slide1}>
              {/* <Text style={styles.text}>Bottom 1</Text> */}
              <Image style={style.image} source={possiblePics[2]} />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Bottom 2</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Bottom 3</Text>
            </View>
          </Swiper>
          <Swiper style={styles.wrapper} showsButtons>
            <View style={styles.slide1}>
              {/* <Text style={styles.text}>Shoes 1</Text> */}
              <Image style={style.image} source={possiblePics[3]} />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Shoes 2</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Shoes 3</Text>
            </View>
          </Swiper>
        </SafeAreaView>
      </View>
    );
  }
}

export default buildOutfit;
