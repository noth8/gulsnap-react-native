import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import {
  widthPercentageToDP,
  heightPercentageToDP,
  sizePercentageToDP
} from "../../utils";

class InputField extends Component {
  render() {
    const {
      style,
      icon,
      value,
      onChangeText,
      autoCapitalize,
      secureTextEntry,
      blurOnSubmit,
      keyboardType,
      returnKeyType,
      placeholder,
      focus
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Icon style={styles.icon} name={icon} size={20} color="#FFF" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.inputText}
          selectionColor="#2d87f5"
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          blurOnSubmit={blurOnSubmit}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          placeholder={placeholder}
          placeholderTextColor="#ffffffDE"
          ref={ref => (this.inputFieldRef = ref)}
          onSubmitEditing={focus(placeholder)}
        />
      </View>
    );
  }
}

InputField.defaultProps = {
  style: {},
  icon: null,
  placeholder: "",
  blurOnSubmit: false,
  returnKeyType: "next",
  keyboardType: null,
  secureTextEntry: false,
  autoCapitalize: "none",
  focus: () => {}
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#2d87f5",
    borderBottomWidth: 1,
    width: widthPercentageToDP("80%"),
    marginTop: heightPercentageToDP("3%")
  },
  inputText: {
    color: "white",
    flex: 1,
    fontSize: sizePercentageToDP("4.1%"),
    marginLeft: widthPercentageToDP("3%")
  },
  icon: {
    marginLeft: widthPercentageToDP("4%"),
    width: widthPercentageToDP("7%"),
    height: widthPercentageToDP("7%"),
    alignSelf: "center"
  }
});

export { InputField };
