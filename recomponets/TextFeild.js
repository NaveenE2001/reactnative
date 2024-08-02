// components/TextFeild.js
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import "nativewind";
import imgg from "../assets/adaptive-icon.png";
import imgg2 from "../assets/favicon.png";

const TextFeild = ({
  title,
  placeholder,
  value,
  handleChangeText,
  required,
  fieldheight,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className="m-1 justify-center align-center">
      <Text className="m-2 color-black-900 font-bold ">
        {title}
        {required && <Text className="text-red-900"> *</Text>}
      </Text>
      <View
        className={`w-full h-${
          fieldheight ? fieldheight : 16
        } border-red-200 border-2 rounded-2xl foucuse:border-secondary items-center flex-row`}
      >
        <TextInput
          className={`flex-1 text-base p-2 ${props.otherstyle}`}
          value={value}
          keyboardType={props.type}
          maxLength={
            title === "Mobile Number" ? 10 : title === "Notes" ? 2050 : 50
          }
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title ==='Password' && !showPassword}
          textAlignVertical={title === "Notes" ? "top" : "center"}
          multiline={title !== "Mobile Number"}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              alt={showPassword ? "eye" : "close eye"}
              source={showPassword ? imgg2 : imgg}
              className="w-8 h-8 color-black-800 bg-red-500 rounded-2xl  mr-2 opacity-50 blur-lg"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextFeild;
