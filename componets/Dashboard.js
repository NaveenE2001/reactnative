import { View, ScrollView, BackHandler, Alert } from "react-native";
import React, { useEffect } from "react";
import Card from "../recomponets/Card";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../redux/Apicall/ProductApi";

const Dashboard = ({ navigation }) => {
  const selecter = useSelector((state) => state.auth.login.data.token);
  console.log("selecter", selecter);
  const product = useSelector((state) => state.product.produt.data);
  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selecter) {
      dispatch(ProductList(selecter));
    }
  }, [selecter]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to log out?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => navigation.navigate("Home") }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <View className="bg-blue-500 w-full h-full auto-rows-auto p-2">
        <View className="flex-row flex-wrap justify-center">
          {product &&
            product.map((prd, index) => <Card key={index} prod={prd} />)}
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
