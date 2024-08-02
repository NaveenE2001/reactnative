import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import "nativewind";
import TextFeild from "../recomponets/TextFeild";
import CustomButton from "../recomponets/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/Apicall/AuthApi";

const Login = ({ navigation, switchSignUp }) => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    navigation.navigate("PersonalNotes");

    console.log("Form submitted:", form);
    return;
    dispatch(loginUser(form));
  };
  // const { error, data, success, loading } = useSelector(
  //   (state) => state.auth.login
  // );
  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (success && data.message === "succesfully login") {
  //     navigation.navigate("/PersonalNotes");
  //   }
  // }, [success, data, navigation]);

  return (
    <ScrollView>
      <View className="justify-center items-center flex flex-col max-h-96 mt-40">
        <Text className="text-lg text-center text-rose-500 font-bold shadow-md blur-lg text-2xl">
          Login
        </Text>
        <TextFeild
          title="User Name"
          placeholder="Enter the User Name"
          value={form.userName}
          required={true}
          handleChangeText={(e) => setForm({ ...form, userName: e })}
        />
        <TextFeild
          title="Password"
          placeholder="Enter the Password"
          value={form.password}
          required={true}
          handleChangeText={(e) => setForm({ ...form, password: e })}
        />
        <CustomButton
          handleSubmit={handleSubmit}
          name="Login"
          style="w-36 h-10 m-1"
          textstle="text-lg text-center p-1"
        />

        <View className="flex-row items-center mt-1">
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={switchSignUp}>
            <Text className="text-blue-500">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
