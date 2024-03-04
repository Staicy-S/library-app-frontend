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
});
