import { useFonts } from "expo-font";
import { StatusBar, StyleSheet } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Text from "./src/components/Text";
import Navigation from "./src/navigation";
import { store } from "./src/store";

let persistor = persistStore(store);

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
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <StatusBar style="light" />
        <FlashMessage position="top" />
      </PersistGate>
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
