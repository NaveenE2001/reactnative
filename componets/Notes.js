import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import NoteCard from "../recomponets/NoteCard.js";
import "nativewind";
import { useSelector, useDispatch } from "react-redux";
import { NoteFetch } from "../redux/Apicall/NoteApi.js";

const Notes = ({ navigation }) => {
  const handlepress = () => {
    navigation.navigate("AddNotes");
  };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(NoteFetch());
  // }, [dispatch, handlepress]);

  // const data = useSelector((state) => state.note);
  // console.log(data);

  return (
    <View className="flex h-full">
      <View className="border-2 mx-2 pl-1 rounded-lg flex-row items-center justify-between mt-0.5">
        <TextInput placeholder="Search your precise notes" className="flex-1" />
        <View className="w-8 h-8 flex items-center justify-center pr-2 border-l-2">
          <TouchableOpacity>
            <Text>5</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="flex-1">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        {/* Add more NoteCard components as needed */}
      </ScrollView>
      <View
        className="absolute right-2 bottom-2 border-2 rounded-full bg-blue-200"
        resizeMode="contain"
      >
        <TouchableOpacity onPress={handlepress}>
          <Text className="p-3 font-bold text-2xl">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notes;
