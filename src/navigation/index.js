import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import Details from "../screens/Details";
import Earphones from "../screens/Earphones";
import Headphones from "../screens/Headphones";
import Home from "../screens/Home";
import Speakers from "../screens/Speakers";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreens() {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphonesStack.Screen name="Headphones" component={Headphones} />
      <HomeStack.Screen name="Details" component={Details} />
    </HeadphonesStack.Navigator>
  );
}

const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreens() {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphonesStack.Screen name="Earphones" component={Earphones} />
      <EarphonesStack.Screen name="Details" component={Details} />
    </EarphonesStack.Navigator>
  );
}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreens() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();
function CartStackScreens() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <>
      <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            options={{ title: "Home" }}
            name="Main"
            component={HomeStackScreen}
          />
          <Tab.Screen
            options={{ title: "Headphones" }}
            name="HeadphonesTab"
            component={HeadphonesStackScreens}
          />
          <Tab.Screen
            options={{ title: "Earphones" }}
            name="EarphonesTab"
            component={EarphonesStackScreens}
          />
          <Tab.Screen
            options={{ title: "Speakers" }}
            name="SpeakersTab"
            component={SpeakersStackScreens}
          />
          <Tab.Screen
            options={{ title: "Cart" }}
            name="CartTab"
            component={CartStackScreens}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
