import React from "react";
import { Image, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import BannerTitle from "../components/BannerTitle";
import Button from "../components/Button";
import CategoryTitle from "../components/CategoryTitle";
import Footer from "../components/Footer";
import Text from "../components/Text";
import { selectedEarphones } from "../store/features/products/productSlice";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Earphones = ({ navigation }) => {
  const earphones = useSelector(selectedEarphones);
  const onPressProduct = (id) => {
    
    navigation.navigate("Details", { id });
  };
  return (
    <View>
      <ScrollView>
        <BannerTitle />
        <CategoryTitle title="Earphones" />
        <View style={{ margin: spacing[5] }}>
          {earphones.map((earphone) => {
            return (
              <View
                key={earphone?.attributes?.name}
                style={{ marginBottom: 60 }}
              >
                <View
                  style={{
                    backgroundColor: colors.grey,
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: spacing[5],
                  }}
                >
                  <Image
                    resizeMode="cover"
                    style={{ minHeight: 172, width: 288 }}
                    source={{
                      uri: earphone?.attributes?.images?.data[0]?.attributes
                        ?.formats?.thumbnail?.url,
                    }}
                  />
                </View>

                <View style={{ marginTop: spacing[5] }}>
                  <Text preset="h4" centered>
                    {earphone?.attributes?.name}
                  </Text>
                  <Text preset="h4" centered uppercase>
                    earphones
                  </Text>
                  <Text
                    textColor="#919191"
                    centered
                    style={{
                      marginTop: spacing[5],
                      marginHorizontal: spacing[7],
                    }}
                  >
                    {earphone?.attributes?.description}
                  </Text>
                </View>

                <Button
                  style={{ alignSelf: "center", marginTop: spacing[5] }}
                  title="SEE PRODUCT"
                  onPress={() => onPressProduct(earphone.id)}
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

export default Earphones;
