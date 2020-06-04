import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";

const logo = require("../app/assets/Logo.png");

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Image style={styles.logo} source={logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.appName}>Welcome to My Exchange Buddy!</Text>
            <Text>{"\n"}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter email address"
              placeholderTextColor={"grey"}
              backgroundColor={"#ECECEC"}
            ></TextInput>
            <Text>{"\n"}</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              placeholderTextColor={"grey"}
              backgroundColor={"#ECECEC"}
            ></TextInput>
            <Text>{"\n"}</Text>
          </View>
        )}
      </Formik>
      <View>
        <TouchableOpacity>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.account}>
        <Text style={styles.pw}>Forgot password</Text>
        <Text style={styles.pw} onPress={() => navigation.navigate("Account")}>
          Sign up for an account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F2CC8F",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: 70,
    // paddingRight: 70,
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    width: 67,
    height: 86,
  },
  appName: {
    paddingTop: 20,
    fontSize: 20,
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    borderRadius: 15,
    maxHeight: 30,
    maxWidth: 300,
    fontSize: 16,
    textAlign: "center",
  },
  text1: {
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#FE8A71",
    borderWidth: 1,
    borderRadius: 15,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  account: {
    alignItems: "center",
    paddingTop: 10,
  },
  pw: {
    textDecorationLine: "underline",
    color: "#000080",
  },
});
