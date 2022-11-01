import React from "react";
import { Image, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import BannerTitle from "../components/BannerTitle";
import Button from "../components/Button";
import CategoryTitle from "../components/CategoryTitle";
import Footer from "../components/Footer";
import Text from "../components/Text";
import { selectedSpeakers } from "../store/features/products/productSlice";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Speakers = ({ navigation }) => {
  const speakers = useSelector(selectedSpeakers);
  const onPressProduct = (id) => {
    
    navigation.navigate("Details", { id });
  };
  return (
    <View>
      <ScrollView>
        <BannerTitle />
        <CategoryTitle title="Speakers" />
        <View style={{ margin: spacing[5] }}>
          {speakers.map((speaker) => {
            return (
              <View
                key={speaker?.attributes?.name}
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
                    style={{ minHeight: 172, minWidth: 200 }}
                    source={{
                      uri: speaker?.attributes?.images?.data[0]?.attributes
                        ?.formats?.thumbnail?.url,
                    }}
                  />
                </View>

                <View style={{ marginTop: spacing[5] }}>
                  <Text preset="h4" centered>
                    {speaker?.attributes?.name}
                  </Text>
                  <Text preset="h4" centered uppercase>
                    speakers
                  </Text>
                  <Text
                    textColor="#919191"
                    centered
                    style={{
                      marginTop: spacing[5],
                      marginHorizontal: spacing[7],
                    }}
                  >
                    {speaker?.attributes?.description}
                  </Text>
                </View>

                <Button
                  style={{ alignSelf: "center", marginTop: spacing[5] }}
                  title="SEE PRODUCT"
                  onPress={() => onPressProduct(speaker.id)}
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

export default Speakers;
