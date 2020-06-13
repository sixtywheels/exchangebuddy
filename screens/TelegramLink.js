import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Linking,
  Alert,
} from "react-native";

const TelegramLink = (props) => {
  const { url, children, style = {} } = props;
  const onPress = () =>
    Alert.alert(
      "Confirmation",
      "You will exit this application and be directed to your browser. Proceed?",
      [
        {
          text: "Yes",
          onPress: () =>
            Linking.canOpenURL(url).then(() => {
              Linking.openURL(url);
            }),
        },
        { text: "No" },
      ]
    );

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
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
export default TelegramLink;
