import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
    padding: 12,
    paddingVertical: 20,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.text,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: 32,
    color: COLORS.text,
    textAlign: "center",
    fontWeight: "700",
  },
  spacing: {
    gap: 10,
  },
  textInput: {
    fontFamily: FONTS.regular,
    marginTop: 10,
    backgroundColor: "white",
    height: 50,
    fontSize: 28,
    paddingLeft: 10,
    borderRadius: 10,
  },
  submitPressable: {
    height: 50,
    fontSize: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
  },
  submitPressableText: {
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 1.1,
    fontWeight: 500,
  },
});
