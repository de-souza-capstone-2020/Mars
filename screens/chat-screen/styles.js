import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  background: {
    backgroundColor: "#ededed",
    flex: 1,
  },
  chatFont: {
    fontSize: 15,
    fontFamily: "OpenSans-SemiBold"
  },
  titleFont: {
    fontSize: 50,
    color: "black",
    textAlign: "center",
    fontFamily: "Lato-ThinItalic"
  },
  talkBubble: {
    backgroundColor: 'transparent'
  },
  talkBubbleSquare: {
    width: 120,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10
  },
  talkBubbleTriangle: {
    position: 'absolute',
    left: -26,
    top: 26,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 13,
    borderRightWidth: 26,
    borderRightColor: 'white',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent'
  }
});

export default s;