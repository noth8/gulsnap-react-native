import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { sizePercentageToDP, widthPercentageToDP } from "../../utils";

const Button = ({ onPress, children, style, containerStyle }) => (
  <View style={[styles.container, containerStyle]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: widthPercentageToDP("80%"),
    backgroundColor: "#0043a9"
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: sizePercentageToDP("4.6%"),
    padding: sizePercentageToDP("3.6%")
  }
});

export { Button };
