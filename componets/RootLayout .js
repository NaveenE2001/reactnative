import React, { useState } from "react";
import { View } from "react-native";
import Login from "./Login";
import Signin from "./Signin";

const RootLayout = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState("Login");

  const switchSignIn = () => setCurrentScreen("Login");
  const switchSignUp = () => setCurrentScreen("Signin");

  return (
    <View>
      {currentScreen === "Login" ? (
        <Login navigation={navigation} switchSignUp={switchSignUp} />
      ) : (
        <Signin switchSignIn={switchSignIn} navigation={navigation} />
      )}
    </View>
  );
};

export default RootLayout;
