import { StyleSheet } from "react-native";

const colors = {
  accent: "#3DDC9F",
  accentDark: "#3eab81",
  lightGrey: "#b5b5b5",
  background: "#EFF0F9",
};

const s = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  chatFont: {
    fontSize: 15,
    fontFamily: "OpenSans",
  },
  titleFont: {
    fontSize: 50,
    color: "black",
    textAlign: "center",
    fontFamily: "Lato-ThinItalic",
  },
});

export { s, colors };
