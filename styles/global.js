import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: COLORS.light,
  },
  heading: {
    fontSize: 32,
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "700",
  },
  spacing: {
    gap: 10,
  },
  textInput: {
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
