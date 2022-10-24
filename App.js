import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Text from "./src/components/Text";
import { store } from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_Medium: require("./assets/fonts/Manrope-Medium.ttf"),
    Manrope_Bold: require("./assets/fonts/Manrope-Bold.ttf"),
    Manrope_Regular: require("./assets/fonts/Manrope-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Font is loading...</Text>;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text preset='h1' style={{ color: "tomato" }}>Hello World</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
