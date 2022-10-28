import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import Text from "./Text";

const Button = ({
  title,
  type = "primary",
  onPress,
  style,
  fullWidth,
  textColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.wrapper,
        fullWidth && { width: "100%" },
        type === "primary" && styles.primary,
        type === "secondary" && styles.secondary,
        style,
      ]}
    >
      <Text textColor={type === "primary" ? colors.white : colors.black}>
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
