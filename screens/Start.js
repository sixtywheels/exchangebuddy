import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>
        Kick start your journey in Singapore/NUS!
      </Text>

      <View style={styles.paddings}>
        <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
          <Text style={styles.buttons}>I am preparing to go to Singapore</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Start")}>
        <Text style={styles.buttons}>I am curently Singapore</Text>
      </TouchableOpacity>
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
  paddings: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
