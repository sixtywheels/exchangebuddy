import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PreparingScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>We are thrilled to have you here!</Text>

      <View style={styles.paddings}>
        <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
          <Text style={styles.buttons}>Checklist of procedures</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("MainCulture")}>
        <Text style={styles.buttons}>Introduction of local culture</Text>
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
