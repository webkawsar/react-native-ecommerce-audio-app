import React from "react";
import { Image, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import Text from "../components/Text";
import { selectProductById } from "../store/features/products/productSlice";
import { spacing } from "../theme/spacing";

const Details = ({ route }) => {
  const productId = route.params.id;
  const product = useSelector((state) => selectProductById(state, productId));

  const {
    attributes: { images },
  } = product;

  return (
    <View>
      <ScrollView>
        <Text>Details</Text>
        <View style={{ marginVertical: spacing[8] }}>
          {images.data.map((image, index) => {
            return (
              <View
                key={index.toString()}
                style={{ marginVertical: spacing[3], overflow: "hidden" }}
              >
                <Image
                  source={{ uri: image?.attributes?.formats?.thumbnail?.url }}
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: '100%',
                    borderRadius: 12,
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
