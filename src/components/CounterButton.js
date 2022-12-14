import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";
import Text from "./Text";

const CounterButton = ({ style, setQuantity, initialVal }) => {
  const [count, setCount] = useState(initialVal || 0);
  
  const onIncrement = () => {

    setCount((prev) => prev + 1);
    setQuantity(count + 1);
  };
  const onDecrement = () => {

    if (count > 0) {
      setCount((prev) => prev - 1);
      setQuantity(count - 1);
    }
  };

  return (
    <View style={[styles.wrapper, style]}>
      <Pressable onPress={onDecrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#c4c4c4">
          -
        </Text>
      </Pressable>

      <Text>{count}</Text>

      <Pressable onPress={onIncrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#c4c4c4">
          +
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: 120,
    height: 48,
    flexDirection: "row",
    backgroundColor: colors.grey,
    borderRadius: 4,
  },
  counterBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "bold",
  },
});

export default CounterButton;
