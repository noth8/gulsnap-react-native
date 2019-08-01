import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import {
  nameChangedAction,
  emailChangedAction,
  passwordChangedAction,
  registerUserAction
} from "../../actions";
import { InputField, Button, Spinner } from "../../components/common";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  sizePercentageToDP
} from "../../utils";
import * as lang from "../../config/languages";

const appLogo = require("../../assets/logo.png");

class RegisterScreen extends Component {
  changeInputFocus = inputFieldName => () => {
    switch (inputFieldName) {
      case "Name":
        this.email.inputFieldRef.focus();
        break;
      case "Email":
        this.password.inputFieldRef.focus();
        break;
      case "Password":
        this.props.registerUser({
          name: this.props.name,
          email: this.props.email,
          password: this.props.password
        });
    }
  };

  renderSectionHeader() {
    return (
      <View style={styles.sectionHeaderView}>
        <TouchableOpacity
          style={styles.sectionButtonView}
          onPress={() => this.props.loginScreen({ routeName: "Login" })}
        >
          <Text style={styles.sectionButtonText}>{lang.LOGIN_BUTTON_TEXT}</Text>
        </TouchableOpacity>
        <View style={styles.sectionButtonPressedView}>
          <Text style={styles.sectionButtonPressedText}>
            {lang.REGISTER_BUTTON_TEXT}
          </Text>
        </View>
      </View>
    );
  }

  renderSectionBody() {
    return (
      <View style={styles.sectionBodyView}>
        <InputField
          icon="user"
          placeholder={lang.NAME_HINT}
          value={this.props.name}
          onChangeText={text => this.props.nameChanged(text)}
          autoCapitalize="words"
          ref={ref => (this.name = ref)}
          focus={this.changeInputFocus}
        />
        <InputField
          icon="envelope"
          placeholder={lang.EMAIL_HINT}
          value={this.props.email}
          onChangeText={text => this.props.emailChanged(text)}
          keyboardType="email-address"
          ref={ref => (this.email = ref)}
          focus={this.changeInputFocus}
        />
        <InputField
          icon="lock"
          placeholder={lang.PASSWORD_HINT}
          value={this.props.password}
          onChangeText={text => this.props.passwordChanged(text)}
          returnKeyType="done"
          secureTextEntry
          blurOnSubmit
          ref={ref => (this.password = ref)}
          focus={this.changeInputFocus}
        />
      </View>
    );
  }

  renderSubmitError() {
    if (this.props.error) {
      return <Text style={styles.errorText}>{this.props.error}</Text>;
    }
  }

  renderSubmitButton() {
    if (this.props.loading) {
      return <Spinner size={40} color="#2d87f5" />;
    }
    return (
      <View style={styles.submitButtonView}>
        <Button
          onPress={() =>
            this.props.registerUser({
              name: this.props.name,
              email: this.props.email,
              password: this.props.password
            })
          }
        >
          {lang.REGISTER_SUBMIT_BUTTON}
        </Button>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.rootView}>
        <Image style={styles.logo} source={appLogo} />
        {this.renderSectionHeader()}
        {this.renderSectionBody()}
        {this.renderSubmitError()}
        {this.renderSubmitButton()}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#032337"
  },
  logo: {
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("30%")
  },
  sectionHeaderView: {
    flexDirection: "row",
    height: heightPercentageToDP("8%"),
    marginBottom: heightPercentageToDP("1%")
  },
  sectionButtonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#042d4e"
  },
  sectionButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: sizePercentageToDP("4.6%"),
    fontWeight: "bold"
  },
  sectionButtonPressedView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionButtonPressedText: {
    color: "#fff",
    fontSize: sizePercentageToDP("4.6%"),
    fontWeight: "bold"
  },
  sectionBodyView: {
    alignItems: "center",
    marginBottom: heightPercentageToDP("4%")
  },
  errorText: {
    fontSize: sizePercentageToDP("4.7%"),
    alignSelf: "center",
    color: "red"
  },
  submitButtonView: {
    marginTop: heightPercentageToDP("0.5%")
  }
});

const mapStateToProps = state => {
  const { name, email, password, error, loading } = state.auth;
  return { name, email, password, error, loading };
};

const mapDispatchToProps = dispatch => ({
  loginScreen: routeName => dispatch(NavigationActions.navigate(routeName)),
  nameChanged: text => dispatch(nameChangedAction(text)),
  emailChanged: text => dispatch(emailChangedAction(text)),
  passwordChanged: text => dispatch(passwordChangedAction(text)),
  registerUser: data => dispatch(registerUserAction(data))
});

const RegisterScreenConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);

export { RegisterScreenConnected as RegisterScreen };
