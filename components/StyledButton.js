import { Pressable, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../styles/constants";
import { useState } from "react";

// variant: "primary" "secondary"

export function StyledButton({
  variant = "primary",
  title,
  containerStyle,
  containerActiveStyle,
  labelStyle,
  labelActiveStyle,
  disabled,
  ...restProps
}) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      style={[
        styles.buttonBase,
        styles[`${variant}Container`],
        containerStyle,
        isPressed ? styles[`${variant}ContainerActive`] : null,
        isPressed ? containerActiveStyle : null,
        disabled && styles[`${variant}ContainerDisabled`],
      ]}
      {...restProps}
      onPressIn={() => {
        if (!disabled) {
          setIsPressed(true);
          if (restProps.onPressIn) {
            restProps.onPressIn();
          }
        }
      }}
      onPressOut={() => {
        if (!disabled) {
          setIsPressed(false);
          if (restProps.onPressOut) {
            restProps.onPressOut();
          }
        }
      }}
    >
      <Text
        style={[
          styles.textBase,
          styles[`${variant}Text`],
          labelStyle,
          isPressed ? labelActiveStyle : null,
          disabled && styles[`${variant}TextDisabled`],
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    padding: 12,
    borderRadius: 8,
    borderRadius: 10,
    justifyContent: "center",
  },
  textBase: {
    fontSize: 18,
    textAlign: "center",
  },
  primaryContainer: {
    backgroundColor: COLORS.primary,
  },
  primaryText: {
    fontFamily: FONTS.bold,
    color: COLORS.text,
    fontSize: 18,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  primaryContainerActive: {
    backgroundColor: COLORS.primaryDark,
  },
  primaryContainerDisabled: {
    backgroundColor: COLORS.greyLight,
  },
  secondaryContainer: {
    backgroundColor: COLORS.grey,
  },
  primaryTextDisabled: {
    color: COLORS.greyDark,
  },
  secondaryText: {
    color: COLORS.backgroundDark,
  },
  secondaryContainerActive: {
    backgroundColor: COLORS.greyDark,
  },
});
