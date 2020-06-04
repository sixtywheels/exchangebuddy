import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AccountScreen({ navigation }) {
  return (
    <View>
      <Text>HELLO WEIKIAT</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.here} onPress={() => navigation.navigate("Login")}>
        Press here to go back to home page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  here: {
    textDecorationLine: "underline",
  },
});
