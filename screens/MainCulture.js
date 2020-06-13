import * as React from "react";
import { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";

/* 
export default function MainCultureScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Main culture screen</Text>
    </View>
  );
}
*/

class MainCultureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: "Colonial history",
        },
        {
          value: "Demographics",
        },
        {
          value: "Contemporary",
        },
      ],
      value: "",
    };
  }

  UNSAFE_componentWillMount() {
    const value = this.state.data[0].value;
    this.setState({
      value,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.header}>Learn more about Singapore's culture!</Text>
        <Dropdown
          value={this.state.label}
          data={this.state.data}
          pickerStyle={{ borderBottomColor: "transparent", borderWidth: 0 }}
          dropdownOffset={{ top: 0 }}
          onChangeText={(value) => {
            this.setState({ value });
            if (this.state.value === "Colonial history") {
              this.props.navigation.navigate("Main");
            } else if (this.state.value === "Demographics") {
              this.props.navigation.navigate("Main");
            } else if (this.state.value === "Contemporary") {
              this.props.navigation.navigate("Main");
            }
          }}
        />
      </View>
    );
  }
}

export default MainCultureScreen;

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
