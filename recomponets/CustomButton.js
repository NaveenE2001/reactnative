import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import "nativewind";

const CustomButton = ({ handleSubmit, name, style, textStyle, ...props }) => {
  return (
    <View className="flex items-center justify-center">
      <TouchableOpacity
        onPress={handleSubmit}
        className={`border-2 border-red-250 rounded-2xl ${style}`}
        {...props}
      >
        <Text className={`text-lg text-center p-1 ${textStyle}`} resizeMode="contain">
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
