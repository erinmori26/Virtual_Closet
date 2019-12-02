import { createStackNavigator } from "react-navigation-stack";

import home from "./home";
import tops from "./tops";
import bottoms from "./bottoms";
import hats from "./hats";
import shoes from "./shoes";

export default createStackNavigator({
  home,
  tops: {
    screen: tops,
    navigationOptions: {
      headerTitle: "Tops"
    }
  },
  bottoms: {
    screen: bottoms,
    navigationOptions: {
      headerTitle: "Bottoms"
    }
  },
  hats: {
    screen: hats,
    navigationOptions: {
      headerTitle: "Hats"
    }
  },
  shoes: {
    screen: shoes,
    navigationOptions: {
      headerTitle: "Shoes"
    }
  }
});
