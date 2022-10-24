import { useFonts } from "expo-font";
import { StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Text from "./src/components/Text";
import Navigation from "./src/navigation";
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
      <Navigation />
      <StatusBar style="light" />
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
