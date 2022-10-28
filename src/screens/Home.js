import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BannerTitle from "../components/BannerTitle";
import Button from "../components/Button";
import Text from "../components/Text";
import { fetchProducts } from "../store/features/products/productSlice";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const CategoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginVertical: spacing[8],
        marginHorizontal: spacing[5],
        borderRadius: spacing[4],
        backgroundColor: colors.grey,
        alignItems: "center",
        padding: spacing[5],
      }}
    >
      <Image source={image} style={{ top: -60 }} />
      <View
        style={{ alignItems: "center", justifyContent: "center", top: -30 }}
      >
        <Text preset="h6">{title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          preset="subtitle"
          centered
          textColor="#7c7c7c"
          style={{ marginRight: spacing[4] }}
        >
          SHOP
        </Text>
        <AntDesign name="right" color={colors.primary} size={14} />
      </View>
    </Pressable>
  );
};

const FeaturedProduct = ({ product }) => {
  // console.log(product?.attributes?.images?.data[0]?.attributes?.formats?.thumbnail?.url, 'url')

  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        marginVertical: spacing[5],
        backgroundColor: colors.primary,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#d8d8d8",
          borderRadius: 400,
          height: 320,
          width: width - 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#d8d8d8",
            borderRadius: 400,
            height: 280,
            width: width - 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 172, width: 180 }}
            resizeMode="cover"
            source={{
              uri: product.attributes.images.data[0].attributes.formats
                .thumbnail.url,
            }}
          />
        </View>
      </View>

      <View style={{ paddingBottom: spacing[8], marginTop: -spacing[7] }}>
        <Text preset="h3" centered uppercase white>
          {product?.attributes?.name}
        </Text>
        <Text preset="h3" centered uppercase white>
          {product?.attributes?.ecommerce_category?.data?.attributes?.name}
        </Text>
        <Text centered style={{ width: 250, marginTop: spacing[4] }} white>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Button
          title="SEE PRODUCT"
          style={{
            backgroundColor: colors.black,
            alignSelf: "center",
            marginTop: spacing[5],
          }}
        />
      </View>
    </View>
  );
};

const Home = () => {
  const state = useSelector((state) => state.products);
  const featuredProducts = useSelector((state) => {
    const featuredProducts = state?.products?.products.filter(
      (product) => product?.attributes?.isFeatured
    );
    return featuredProducts;
  });
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // console.log(state, 'state');

  return (
    <View>
      <ScrollView>
        <BannerTitle />
        <View style={{ backgroundColor: colors.black }}>
          <Image
            style={{ alignSelf: "center", width: "100%" }}
            resizeMode="cover"
            source={require("../../assets/images/home-banner.png")}
          />
          <View style={{ position: "absolute", width: "100%", top: 200 }}>
            <Text preset="h2" centered white>
              WELCOME
            </Text>
            <Text
              textColor={colors.grey}
              centered
              style={{
                width: width - 20,
                alignSelf: "center",
                marginTop: spacing[5],
              }}
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>
          </View>
        </View>
        <View style={{ paddingVertical: spacing[8] }}>
          <CategoryBox
            title="HEADPHONES"
            image={require("../../assets/images/home-headphone.png")}
          />
          <CategoryBox
            title="SPEAKERS"
            image={require("../../assets/images/home-speaker.png")}
          />
          <CategoryBox
            title="EARPHONES"
            image={require("../../assets/images/home-earphone.png")}
          />
        </View>
        <View
          style={{ paddingVertical: spacing[8], paddingHorizontal: spacing[5] }}
        >
          {featuredProducts.map((product) => (
            <FeaturedProduct key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
