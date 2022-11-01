import React from "react";
import { Image, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import BannerTitle from "../components/BannerTitle";
import Button from "../components/Button";
import CategoryTitle from "../components/CategoryTitle";
import Footer from "../components/Footer";
import Text from "../components/Text";
import { selectedHeadphones } from "../store/features/products/productSlice";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Headphones = ({ navigation }) => {
  const headphones = useSelector(selectedHeadphones);
  const onPressProduct = (id) => {
    navigation.navigate("Details", { id });
  };
  return (
    <View>
      <ScrollView>
        <BannerTitle />
        <CategoryTitle title="Headphones" />
        <View style={{ margin: spacing[5] }}>
          {headphones.map((headphone) => {
            return (
              <View
                key={headphone?.attributes?.name}
                style={{ marginBottom: 60 }}
              >
                <View
                  style={{
                    backgroundColor: colors.grey,
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: spacing[5],
                    paddingHorizontal: spacing[5]
                  }}
                >
                  <Image
                    resizeMode="cover"
                    style={{ height: 200, width: '100%', borderRadius: 12 }}
                    source={{
                      uri: headphone?.attributes?.images?.data[0]?.attributes
                        ?.formats?.thumbnail?.url,
                    }}
                  />
                </View>

                <View style={{ marginTop: spacing[5] }}>
                  <Text preset="h4" centered>
                    {headphone?.attributes?.name}
                  </Text>
                  <Text preset="h4" centered uppercase>
                    headphones
                  </Text>
                  <Text
                    textColor="#919191"
                    centered
                    style={{
                      marginTop: spacing[5],
                      marginHorizontal: spacing[7],
                    }}
                  >
                    {headphone?.attributes?.description}
                  </Text>
                </View>

                <Button
                  style={{ alignSelf: "center", marginTop: spacing[5] }}
                  title="SEE PRODUCT"
                  onPress={() => onPressProduct(headphone.id)}
                />
              </View>
            );
          })}

          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};

export default Headphones;
