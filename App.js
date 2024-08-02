import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import "nativewind"; // Ensure this is correctly imported
import { StatusBar } from "expo-status-bar";
import RootLayout from "./componets/RootLayout ";
import Dashboard from "./componets/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import StudenentReg from "./componets/StudenentReg.js";
import Notes from "./componets/Notes.js";
import AddNotes from "./componets/AddNotes.js";
import Login from "./componets/Login.js";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View className="justify-center items-center flex-1">
      <Text className="text-yellow-800 text-xl m-1">
        Welcome to the first Naveen App
      </Text>
      <View className="m-1 focus:border-secondary rounded-2xl w-48 border-2 border-rose-500">
        <TouchableOpacity onPress={() => navigation.navigate("RootLayout")}>
          <Text className="p-2 text-center">Continue With Email</Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RootLayout"
            component={RootLayout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StudenentReg"
            component={StudenentReg}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PersonalNotes"
            component={Notes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddNotes"
            component={AddNotes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {/* <StatusBar style="dark" backgroundColor="#ffffff" color='black' translucent /> */}
      </Provider>
    </NavigationContainer>
  );
};
{
  /* <ModalContextProvider>
<ModalManager /> */
}

export default App;
