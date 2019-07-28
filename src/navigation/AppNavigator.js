import React from "react";
import { createStackNavigator, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { backToTabAfterAuthAction } from "../actions";
import { HomeScreen, FullImageScreen } from "../screens";

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    FullImage: {
      screen: FullImageScreen
    }
  },
  { initialRouteName: "Home" }
);

const ReactNavigationRedux = createReactNavigationReduxMiddleware(
  state => state.nav,
  "root"
);

const AppWithNavigationState = createReduxContainer(RootNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, ReactNavigationRedux };
