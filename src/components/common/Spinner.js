import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size, backgroundColor, color }) => (
  <View style={[styles.spinnerStyle, { backgroundColor }]}>
    <ActivityIndicator size={size || 80} color={color} />
  </View>
);

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Spinner };
