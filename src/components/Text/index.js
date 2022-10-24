import React from "react";
import { Text as ReactNativeText } from "react-native";
import { presets } from "./text.presets";

const Text = (props) => {
  const {
    preset = "default",
    children,
    style: styleOverride,
    textColor,
    centered,
    white,
    uppercase,
    ...rest
  } = props;

  const style = presets[preset] || presets.base;
  const styles = [style, styleOverride];

  return (
    <ReactNativeText
      {...rest}
      style={[
        styles,
        centered && { textAlign: "center" },
        white && { color: "#fff" },
        uppercase && { textTransform: "uppercase" },
        textColor && { color: textColor },
      ]}
    >
      {children}
    </ReactNativeText>
  );
};

export default Text;
