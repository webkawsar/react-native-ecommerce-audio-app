import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";
import Text from "./Text";



const CounterButton = ({ style, amount, setAmount, initialVal }) => {
  
  const onIncrement = () => {
    setAmount(amount + 1);
  };

  const onDecrement = () => {

    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <View style={[styles.wrapper, style]}>
      <Pressable onPress={onDecrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#c4c4c4">
          -
        </Text>
      </Pressable>
      
      <Text>{amount}</Text>

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
