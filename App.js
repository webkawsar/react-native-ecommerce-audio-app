import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/text/text";




export default function App() {
  const [fontsLoaded] = useFonts({
    "Antonio_Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan_Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan_Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Font is loading...</Text>;
  }


  
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
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
