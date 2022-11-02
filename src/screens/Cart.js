import React from "react";
import { Alert, Image, Pressable, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import CounterButton from "../components/CounterButton";
import Text from "../components/Text";
import {
  addToCart,
  removeFromCart,
  reset,
  selectTotalAmount
} from "../store/features/cart/cartSlice";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <View style={{ flex: 1, margin: spacing[5] }}>
        {/* <LottieView
          autoPlay
          style={{ alignSelf: "center" }}
          loop={false}
          source={require("../../assets/images/empty-cart.json")}
        /> */}
      </View>
    );
  }

  const onChange = (value, cartItem) => {
    // checking item remove or not
    if (value === 0) {
      return Alert.alert(
        "Remove item?",
        "Do you want to remove the item from your cart?",
        [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: () => {
              dispatch(removeFromCart({ id: cartItem.id }));
            },
          },
        ]
      );
    }

    const cartProduct = {
      ...cartItem,
      quantityPrice: value * cartItem.price,
      qunatity: value,
    };

    dispatch(addToCart(cartProduct));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, margin: spacing[5] }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text preset="h6">{`Cart (${cart.length})`}</Text>
            <Pressable onPress={() => dispatch(reset())}>
              <Text
                textColor="#757575"
                centered
                style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              >
                Remove all
              </Text>
            </Pressable>
          </View>

          <View style={{ marginVertical: spacing[5] }}>
            {cart.map((item) => {
              const {
                id,
                name,
                featuredImage,
                price,
                qunatity,
                quantityPrice,
              } = item;
              
              return (
                <View
                  key={item.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: spacing[2],
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.grey,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: spacing[5],
                    }}
                  >
                    <Image
                      source={{uri: 'https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80'}}
                      style={{ height: 36, width: 36 }}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={{ flex: 1, marginLeft: spacing[5] }}>
                    <Text preset="h6">{name}</Text>
                    <Text>{`$${price}`}</Text>
                  </View>

                  <CounterButton
                    initialVal={qunatity}
                    setQuantity={(value) => {
                      onChange(value, item);
                    }}
                  />
                </View>
              );
            })}
            
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: spacing[5],
              }}
            >
              <Text preset="h6">Total</Text>

              <Text preset="h5">{`$${totalAmount}`}</Text>
            </View>
          </View>
        </View>

        <View
          style={{ flex: 1, justifyContent: "flex-end", margin: spacing[5] }}
        >
          <Button
            title="CHECKOUT"
            style={{ width: "100%" }}
            onPress={() => {
              navigation.navigate("Checkout");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;
