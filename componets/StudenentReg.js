import { View, Text, ScrollView } from "react-native";
import React from "react";
import TextFeild from "../recomponets/TextFeild";
import RadioButton from "../recomponets/RadioButton";
import CusCheckBox from "../recomponets/CusCheckBox";
import FilePicker from "../recomponets/FilePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../recomponets/CustomButton";

const StudenentReg = () => {
  const handleSubmit=()=>{
    console.log("Hello");
  }
  return (
    < >
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <View className="flex">
          <Text className="underline text-xl mb-4 text-center">
            Student Registration
          </Text>
          <TextFeild
            title="Name"
            required={true}
            type="twitter"
            otherstyle={{ borderColor: "blue-900" }}
          />
          <TextFeild
            title="User Name"
            required={true}
            type="email-address"
            otherstyle={{ borderColor: "blue-900" }}
          />
          <TextFeild
            title="Mobile Number"
            required={true}
            type="number-pad"
            otherstyle={{ borderColor: "blue-900" }}
          />
          <TextFeild
            title="Designation"
            required={true}
            type="twitter"
            otherstyle={{ borderColor: "blue-900" }}
          />
          <RadioButton
            title="Gender"
            style={{ marginLeft: 2 }}
            required={true}
            subtitle={["Male", "Female", "Others"]}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          />
          <CusCheckBox
            title="Course"
            required={true}
            subtitle={["BCA", "MCA", "Engg", "12th", "10th"]}
            size={18}
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          />
          <FilePicker required={true} title="Upload Supporting Document" />
          <CustomButton
            handleSubmit={handleSubmit}
            name="Login"
            style="w-36 h-10 m-1 flex justify-center items-center"
            textstle="text-lg text-center p-1"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default StudenentReg;
