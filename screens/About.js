import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const logo = require("../app/assets/Logo.png");

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Image style={styles.logo} source={logo} />
      <Text>My Exchange Buddy</Text>
      <Text>{"\n"}</Text>
      <Text>My Exchange Buddy is an app for you and me! Yay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F2CC8F",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    width: 67,
    height: 86,
  },
});
