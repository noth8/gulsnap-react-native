import React, { Component } from "react";
import { View } from "react-native";
import { StatusBar } from "./components/common";
import { HomeScreen } from "./screens/";

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar />
        <HomeScreen />
      </View>
    );
  }
}

export default App;
