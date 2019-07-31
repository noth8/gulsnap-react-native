import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  StyleSheet
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { emailChangedAction, resetUserPasswordAction } from "../../actions";
import { Spinner, Button, InputField } from "../../components/common";
import {
  widthPercentageToDP,
  heightPercentageToDP,
  sizePercentageToDP
} from "../../utils";
import * as lang from "../../config/languages";

const appLogo = require("../../assets/logo.png");

class ResetPasswordScreen extends Component {
  changeInputFocus = inputFieldName => () => {
    if (inputFieldName === "Email") this.props.resetPassword(this.props.email);
  };

  renderSectionHeader() {
    return (
      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionHeaderText}>
          {lang.RESET_PASSWORD_TITLE}
        </Text>
      </View>
    );
  }

  renderSuccessMessage() {
    return (
      <Text style={styles.successMessageText}>
        {lang.RESET_PASSWORD_SUCCESS}
      </Text>
    );
  }

  renderBackToLoginButton() {
    return (
      <View style={styles.buttonView}>
        <Button onPress={() => this.props.loginScreen({ routeName: "Login" })}>
          {lang.RESET_PASSWORD_RETURN_BACK}
        </Button>
      </View>
    );
  }

  renderEmailField() {
    return (
      <View style={styles.sectionBodyView}>
        <InputField
          icon="envelope"
          placeholder={lang.EMAIL_HINT}
          value={this.props.email}
          onChangeText={text => this.props.emailChanged(text)}
          keyboardType="email-address"
          returnKeyType="done"
          ref={ref => (this.email = ref)}
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
      return (
        <View style={styles.buttonView}>
          <Spinner size={40} color="#2d87f5" />
        </View>
      );
    }
    return (
      <View style={styles.buttonView}>
        <Button onPress={() => this.props.resetPassword(this.props.email)}>
          {lang.RESET_SUBMIT_BUTTON}
        </Button>
      </View>
    );
  }

  render() {
    if (this.props.passwordSended)
      return (
        <View style={styles.rootView}>
          <Image style={styles.logo} source={appLogo} />
          {this.renderSectionHeader()}
          {this.renderSuccessMessage()}
          {this.renderBackToLoginButton()}
        </View>
      );
    if (!this.props.passwordSended)
      return (
        <KeyboardAvoidingView behavior="position" style={styles.rootView}>
          <Image style={styles.logo} source={appLogo} />
          {this.renderSectionHeader()}
          {this.renderEmailField()}
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
    justifyContent: "center",
    height: heightPercentageToDP("8%"),
    marginBottom: heightPercentageToDP("1%"),
    backgroundColor: "#021f2f"
  },
  sectionHeaderText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: sizePercentageToDP("4.6%")
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
  buttonView: {
    marginTop: heightPercentageToDP("4%")
  },
  successMessageText: {
    marginTop: heightPercentageToDP("2%"),
    fontSize: sizePercentageToDP("4.2%"),
    alignSelf: "center",
    color: "white"
  }
});

const mapStateToProps = state => ({
  loading: state.auth.loading,
  passwordSended: state.auth.sended,
  email: state.auth.email,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  emailChanged: text => dispatch(emailChangedAction(text)),
  resetPassword: email => dispatch(resetUserPasswordAction(email)),
  loginScreen: routeName => {
    dispatch(NavigationActions.navigate(routeName));
  }
});

const ResetPasswordScreenConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordScreen);

export { ResetPasswordScreenConnected as ResetPasswordScreen };
