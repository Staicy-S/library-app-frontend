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
    fontSize: 28,
    color: COLORS.text,
    textAlign: "center",
    fontWeight: "700",
  },
  spacing: {
    gap: 10,
  },
  textInput: {
    color: COLORS.backgroundDark,
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.text,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    textAlign: "center",
  },
  submitPressable: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
  },
  submitPressableText: {
    textAlign: "center",
    fontFamily: FONTS.bold,
    padding: 8,
    fontSize: 18,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
});
