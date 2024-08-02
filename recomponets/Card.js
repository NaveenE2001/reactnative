import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import img from "../assets/icon.png";

const Card = (props) => {
  const { prod } = props;
  console.log(prod);
  return (
    <View className="w-1/2 p-2">
      <TouchableOpacity className="bg-white shadow-lg rounded-lg overflow-none items-center justify-center">
        <Image
            source={img}
          alt="image"
          className="w-full h-32 m-1"
          resizeMode="contain"
        />
        <Text className="text-center  p-1">{prod.name}</Text>
        <Text className="text-center  p-1">{prod.designation}</Text>
        <Text className="text-center p-1">{prod.mobileNo}</Text>
        <Text className="text-center ">{prod.userName}</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default Card;
