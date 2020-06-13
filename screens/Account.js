import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";

const logo = require("../app/assets/Logo.png");

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.centralise}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.header}>Sign up for an account!</Text>
      </View>

      <View style={styles.centralise2}>
        <Formik
          initialValues={{ email: "", password: "", password2: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <View>
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

              <TextInput
                style={styles.textInput}
                placeholder="Re-enter Password"
                placeholderTextColor={"grey"}
                backgroundColor={"#ECECEC"}
              ></TextInput>
            </View>
          )}
        </Formik>
      </View>

      <View style={styles.centralise3}>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.backToLogin}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text1}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  here: {
    textDecorationLine: "underline",
  },
  page: {
    flex: 1,
    backgroundColor: "#F2CC8F",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    width: 67,
    height: 86,
  },
  header: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
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
  signUpButton: {
    backgroundColor: "#EB6123",
    borderWidth: 1,
    borderRadius: 15,
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  backToLogin: {
    alignItems: "center",
    paddingTop: 10,
  },
  text1: {
    textDecorationLine: "underline",
    color: "#000080",
  },
  centralise: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 130,
  },
  centralise2: {
    paddingLeft: 52,
    paddingRight: 52,
    justifyContent: "center",
  },
  centralise3: {
    alignItems: "center",
  },
});
