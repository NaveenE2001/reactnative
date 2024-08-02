import { View, Text, ScrollView } from "react-native";
import React from "react";
import "nativewind";
import TextFeild from "../recomponets/TextFeild";
import CustomButton from "../recomponets/CustomButton";

const AddNotes = () => {
  return (
    <ScrollView>
      <View className="flex justify-center items-center">
        <Text className="text-xl font-bold opacity-75 color-green-500 underline">
          AddNotes
        </Text>
        <TextFeild title="Title" />
        <TextFeild title="Notes" otherstyle={`h-56`} fieldheight={56} />
        <CustomButton
          name="Submit"
          style="w-36 h-10 m-1"
          textstle="text-lg text-center p-1"
        />
      </View>
    </ScrollView>
  );
};

export default AddNotes;
