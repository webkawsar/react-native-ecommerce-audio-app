import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Text from "../components/Text";
import { fetchProducts } from "../store/features/products/productSlice";

const Home = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();




  useEffect(() => {

    dispatch(fetchProducts());
    
  }, []);

  // console.log(state, 'state');

  
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
