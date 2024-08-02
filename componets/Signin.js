import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import TextFeild from "../recomponets/TextFeild";
import CustomButton from "../recomponets/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../redux/Apicall/AuthApi";

const Signin = ({ navigation, switchSignIn }) => {
  const [form, setForm] = useState({
    name: "",
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(form);
    return;
    dispatch(signinUser(form));
  };
  // const { loading, success, error, data } = useSelector(
  //   (state) => state.auth.signin
  // );
  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (
  //     success &&
  //     data.message === "The data was saved to the database successfully"
  //   ) {
  //     navigation.navigate("/PersonalNotes"); // Use string for route name
  //   }
  // }, [success, data, navigation]);
  return (
    <ScrollView>
      <View className="flex justify-center items-center mt-20">
        <Text className="font-bold text-xl color-rose-500">Sign in</Text>
        <TextFeild
          title="Name"
          value={form.name}
          placeholder={"Name"}
          handleChangeText={(e) => {
            setForm({ ...form, name: e });
          }}
        />
        <TextFeild
          title="User Name"
          value={form.userName}
          placeholder={"Enter the User Name"}
          handleChangeText={(e) => setForm({ ...form, userName: e })}
        />
        <TextFeild
          title={"Password"}
          value={form.password}
          placeholder={"Enter the Password"}
          handleChangeText={(e) => setForm({ ...form, password: e })}
        />
        <CustomButton
          name={"Sign Up"}
          style="w-36 h-10 m-1"
          textstle="text-center pt-1 text-lg"
          handleSubmit={handleSubmit}
        />
        <View className="flex-row mt-1">
          <Text> Already have a Account? </Text>
          <TouchableOpacity onPress={switchSignIn}>
            <Text className="color-blue-800">Sing in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
