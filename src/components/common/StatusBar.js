import React from "react";
import {
  View,
  StatusBar as StatusBarDefault,
  StyleSheet,
  Platform
} from "react-native";
import Constants from "expo-constants";

export const StatusBar = () => {
  return <View style={styles.statusBar} />;
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Platform.OS === "ios" ? "white" : "black",
    height: Constants.statusBarHeight,
    padding: 0,
    margin: 0
  }
});
