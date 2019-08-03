import React from "react";
import { createStackNavigator, NavigationActions } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { fromRight, fadeIn } from "react-navigation-transitions";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { backToTabAfterAuthAction } from "../actions";
import {
  HomeScreen,
  FullImageScreen,
  UserScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen
} from "../screens";

const AuthNavigator = createStackNavigator(
  {
    Account: {
      screen: UserScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    },
    Reset: {
      screen: ResetPasswordScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Account",
    transitionConfig: () => fadeIn(0)
  }
);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color={tintColor} />
        )
      }
    },
    User: {
      screen: AuthNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={20} color={tintColor} />
        ),
        tabBarOnPress: () => {
          navigation.dispatch(
            NavigationActions.navigate({ routeName: "Account" })
          );
        }
      })
    }
  },
  {
    initialRouteName: "Home",
    shifting: false,
    activeColor: "white",
    inactiveColor: "#2d87f5",
    barStyle: { backgroundColor: "#083973" }
  }
);

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    FullImage: {
      screen: FullImageScreen
    }
  },
  { initialRouteName: "Home", transitionConfig: () => fromRight() }
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
