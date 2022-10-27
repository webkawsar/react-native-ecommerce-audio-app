import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../theme/colors";

const Button = ({ title, type = "primary", onPress, style, fullWidth }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.wrapper,
        fullWidth && { width: "100%" },
        style,
      ]}
    >
      <Text style={textColor ? {color: textColor} : colors.white}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 48,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
  },
});

export default Button;
