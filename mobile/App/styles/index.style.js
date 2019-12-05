import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const PIC_WIDTH = Math.floor(screen.width * 0.25);
const PIC_HEIGHT = Math.floor(PIC_WIDTH * (323 / 222));

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
    height: PIC_HEIGHT,
    width: PIC_WIDTH
  }
});
