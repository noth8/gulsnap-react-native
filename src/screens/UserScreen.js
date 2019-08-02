import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { backToScreenAfterAuthAction, logoutUserAction } from "../actions";
import { Button } from "../components/common";
import { heightPercentageToDP, sizePercentageToDP } from "../utils";
import * as lang from "../config/languages";

class UserScreen extends Component {
  firstLetterToUpperCase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  renderLoginButton() {
    return (
      <View style={styles.buttonView}>
        <Button
          onPress={() =>
            this.props.loginScreen(
              { routeName: "Login" },
              { routeName: "Account" }
            )
          }
        >
          {lang.LOGIN_BUTTON_TEXT}
        </Button>
      </View>
    );
  }

  renderRegisterButton() {
    return (
      <View style={styles.buttonView}>
        <Button
          onPress={() =>
            this.props.registerScreen(
              { routeName: "Register" },
              { routeName: "Account" }
            )
          }
        >
          {lang.REGISTER_BUTTON_TEXT}
        </Button>
      </View>
    );
  }

  renderResetButton() {
    return (
      <View style={styles.ressetButtonView}>
        <TouchableOpacity
          onPress={() =>
            this.props.resetPasswordScreen(
              { routeName: "Reset" },
              { routeName: "Account" }
            )
          }
        >
          <Text style={styles.ressetButtonText}>
            {lang.USER_SCREEN_FORGOT_PASSWORD}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderLogoutButton() {
    return (
      <View style={styles.buttonView}>
        <Button onPress={() => this.props.logoutUser()}>
          {lang.USER_SCREEN_LOGOUT}
        </Button>
      </View>
    );
  }

  renderWelcomeMessage() {
    const userName =
      this.props.user.user.displayName || lang.USER_SCREEN_GUEST_NAME;
    const userNameCapital = this.firstLetterToUpperCase(userName);
    return <Text style={styles.welcomeText}>Hello, {userNameCapital}</Text>;
  }

  render() {
    if (!this.props.isLogged) {
      return (
        <View style={styles.rootView}>
          {this.renderLoginButton()}
          {this.renderRegisterButton()}
          {this.renderResetButton()}
        </View>
      );
    }

    if (this.props.isLogged) {
      return (
        <View style={styles.rootView}>
          {this.renderWelcomeMessage()}
          {this.renderLogoutButton()}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#032337",
    paddingTop: heightPercentageToDP("30%")
  },
  buttonView: {
    marginTop: heightPercentageToDP("4%")
  },
  ressetButtonView: {
    alignItems: "center",
    marginTop: heightPercentageToDP("2%")
  },
  ressetButtonText: {
    color: "white",
    fontSize: sizePercentageToDP("4%")
  },
  welcomeText: {
    color: "white",
    fontSize: sizePercentageToDP("4%")
  }
});

const mapStateToProps = state => ({
  isLogged: state.auth.user,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  loginScreen: (nextRouteName, returnToRouteName) => {
    dispatch(NavigationActions.navigate(nextRouteName));
    dispatch(backToScreenAfterAuthAction(returnToRouteName));
  },
  logoutUser: () => {
    dispatch(logoutUserAction());
  },
  registerScreen: (nextRouteName, returnToRouteName) => {
    dispatch(NavigationActions.navigate(nextRouteName));
    dispatch(backToScreenAfterAuthAction(returnToRouteName));
  },
  resetPasswordScreen: (nextRouteName, returnToRouteName) => {
    dispatch(NavigationActions.navigate(nextRouteName));
    dispatch(backToScreenAfterAuthAction(returnToRouteName));
  }
});

const UserScreenConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen);

export { UserScreenConnected as UserScreen };
