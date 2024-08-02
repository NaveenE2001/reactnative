import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

const NoteCard = () => {
  return (
    <SafeAreaView>
      <View className="border-2  mx-2 rounded-2xl foucuse:border-secodary">
        <View className="flex border-2 border-red w-full flex-row justify-center items-center border-t-0 border-l-0 border-r-0">
          <Text className="font-bold flex-center pl-1"> Seleta</Text>
          <View className="flex grow h-8 flex-row-reverse">
            <TouchableOpacity>
              <Text className="text-center border-l-2 p-2">X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-center border-l-2 p-2">#</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-1">
          <Text>
            (By default, Tailwind provides three font family utilities: a
            cross-browser sans-serif stack, a cross-browser serif stack, and a
            cross-browser monospaced stack. You can change, add, or remove these
            by editing the theme.fontFamily section of your Tailwind config.)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteCard;
