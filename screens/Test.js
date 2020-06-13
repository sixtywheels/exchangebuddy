/*
import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Component } from "react";

export default class TestScreen extends Component {
  render() {
    let data = [
      { value: "Demographics" },
      { value: "Population" },
      { value: "History" },
    ];
    return (
      <View style={styles.herehere}>
        <Dropdown label="Under here" baseColor="black" data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  here: {
    width: "80%",
  },
  herehere: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F2CC8F",
    // alignItems: "center",
  },
});


export default class TestScreen extends Component {
  render() {
    let data = [
      {
        value: "Banana",
      },
      {
        value: "Mango",
      },
      {
        value: "Pear",
      },
    ];

    return <Dropdown label="Favorite Fruit" data={data} />;
  }
}


import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import DropDownItem from "react-native-drop-down-item";

const IC_ARR_DOWN = require("../app/assets/ic_arr_down.png");
const IC_ARR_UP = require("../app/assets/ic_arr_up.png");

type Props = {};
export default class App extends Component<Props> {
  state = {
    contents: [
      {
        title: "Title 1",
        body: "Hi. I love this component. What do you think?",
      },
      {
        title: "See this one too",
        body: "Yes. You can have more items.",
      },
      {
        title: "Thrid thing",
        body:
          "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: "stretch" }}>
          {this.state.contents
            ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "blue",
                          }}
                        >
                          {param.title}
                        </Text>
                      </View>
                    }
                  >
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        },
                      ]}
                    >
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
            : null}
          <View style={{ height: 96 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 60,
  },
  header: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTxt: {
    fontSize: 12,
    color: "rgb(74,74,74)",
    marginRight: 60,
    flexWrap: "wrap",
  },
  txt: {
    fontSize: 14,
  },
});

*/

import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: "Go app main page",
        },
        {
          value: "Go culture page",
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
      <View>
        <Text>Select value from here</Text>
        <Dropdown
          value={this.state.label}
          data={this.state.data}
          pickerStyle={{ borderBottomColor: "transparent", borderWidth: 0 }}
          dropdownOffset={{ top: 0 }}
          onChangeText={(value) => {
            this.setState({
              value,
            });
            if (this.state.value === "Go app main page") {
              this.props.navigation.navigate("Main");
            } else if (this.state.value === "Go culture page") {
              this.props.navigation.navigate("MainCulture");
            }
          }}
        />
      </View>
    );
  }
}

export default Test;
