import * as React from "react";
// import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/Login";
import AccountScreen from "./screens/Account";
import MainScreen from "./screens/Main";
import AboutScreen from "./screens/About";
import StartScreen from "./screens/Start";
import PreparingScreen from "./screens/Preparing";
import MainCultureScreen from "./screens/MainCulture";
import TestScreen from "./screens/Test";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "My Exchange Buddy",
          headerStyle: { backgroundColor: "#087E8B" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Preparing" component={PreparingScreen} />
        <Stack.Screen name="MainCulture" component={MainCultureScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
