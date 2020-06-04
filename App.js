import * as React from "react";
// import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/Login";
import AccountScreen from "./screens/Account";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "Login",
          headerStyle: { backgroundColor: "#087E8B" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
