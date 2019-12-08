import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");

export const colors = {
  white: "#fff",
  indigo: "#0b00a6",
  background1: "#B721FF",
  background2: "#21D4FD"
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  safearea: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  headerText: {
    color: colors.indigo,
    fontWeight: "bold",
    fontSize: 40,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    lineHeight: 60,
    textAlignVertical: "top"
  },
  row: {
    flexDirection: "row"
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center"
  },
  loadingContainer: {
    // position: "absolute",
    // top: 10,
    // bottom: 0,
    // left: 0,
    // right: 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000"
  }
});
