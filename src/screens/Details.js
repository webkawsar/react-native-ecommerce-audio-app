import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import BannerTitle from "../components/BannerTitle";
import Button from "../components/Button";
import CounterButton from "../components/CounterButton";
import Text from "../components/Text";
import { selectProductById } from "../store/features/products/productSlice";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";



const Details = ({ route, navigation }) => {
  const productId = route.params.id;
  const product = useSelector((state) => selectProductById(state, productId));

  const {
    attributes: {
      images,
      name,
      price,
      description,
      ecommerce_category: {
        data: {
          attributes: { name: category },
        },
      },
      features,
      included,
      featuredImage,
    },
  } = product;

  const [qunatity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const add = () => {
    
    if(!qunatity) {
        return showMessage({
            message: 'Product quantity must be greater than 0',
            type: 'danger',
        })
    }

    // // now we can add products to cart
    // // we create a cart product
    // const cartProduct = {
    //     id,
    //     name,
    //     featuredImage,
    //     price,
    //     quantityPrice: price * amount,
    //     amount: amount
    // }
    // dispatch(addToCart({cartProduct}));
    // showMessage({
    //     message: 'Product added to cart',
    //     type: 'success',
    // })
  };

  return (
    <View>
      <ScrollView>
        <BannerTitle />
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="black"
            style={{ margin: spacing[5] }}
          />
        </Pressable>

        <View style={{ margin: spacing[5] }}>
          <View
            style={{
              backgroundColor: colors.grey,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: spacing[5],
              paddingHorizontal: spacing[5],
            }}
          >
            <Image
              resizeMode="cover"
              style={{ height: 200, width: "100%", borderRadius: 12 }}
              source={{ uri: images[0]?.attributes?.formats?.thumbnail?.url }}
            />
          </View>

          <View style={{ marginVertical: spacing[5] }}>
            <Text preset="h4">{name}</Text>
            <Text uppercase preset="h4">
              {category}
            </Text>
            <Text textColor="#7d7d7d" style={{ marginTop: spacing[5] }}>
              {description}
            </Text>
            <Text preset="h6" style={{ marginTop: spacing[4] }}>
              {`$ ${price}`}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: spacing[6],
            }}
          >
            <CounterButton qunatity={qunatity} setQuantity={setQuantity} />
            <Button
              title="Add to cart"
              style={{ marginLeft: spacing[4] }}
              onPress={add}
            />
          </View>

          <View style={{ marginVertical: spacing[5] }}>
            <Text preset="h4">FEATURES</Text>
            <Text
              textColor="#7d7d7d"
              style={{ paddingTop: spacing[3], lineHeight: 25 }}
            >
              {features}
            </Text>
          </View>

          {included && (
            <View style={{ marginVertical: spacing[5] }}>
              <Text preset="h4">IN THE BOX</Text>
              {included.map((item) => (
                <View
                  key={item.name}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: spacing[3],
                  }}
                >
                  <Text preset="h6" textColor={colors.primary}>
                    {item.amount}x
                  </Text>
                  <Text textColor="#7d7d7d" style={{ marginLeft: spacing[3] }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          )}

          <View style={{ marginVertical: spacing[8] }}>
            {images.data.map((image) => {
              return (
                <View
                  key={image.id}
                  style={{ marginVertical: spacing[3], overflow: "hidden" }}
                >
                  <Image
                    source={{ uri: image?.attributes?.formats?.thumbnail?.url }}
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: 200,
                      borderRadius: 12,
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
