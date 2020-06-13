import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TelegramLink from "./TelegramLink";

const logo = require("../app/assets/Logo.png");

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.centralise}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.borders}>
        <TouchableOpacity onPress={() => navigation.navigate("Start")}>
          <Text style={styles.buttons}>Let's Explore!</Text>
        </TouchableOpacity>

        <View style={styles.paddings}>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Text style={styles.buttons}>User Form</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paddings}>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Text style={styles.buttons}>Group Chat</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paddings}>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Text style={styles.buttons}>Saved Pages</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paddings}>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Text style={styles.buttons}>About Us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paddings}>
          <TelegramLink url="https://google.com">Telegram Bot</TelegramLink>
        </View>

        <View style={styles.paddings}>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <Text style={styles.buttons}>Test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F2CC8F",
    justifyContent: "center",
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    width: 67,
    height: 86,
  },
  buttons: {
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
  borders: {
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 20,
  },
  paddings: {
    paddingTop: 10,
  },
  teleButton: {
    backgroundColor: "#087E8B",
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
});
