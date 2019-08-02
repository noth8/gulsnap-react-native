import { NavigationActions } from "react-navigation";

import { RootNavigator } from "../navigation/AppNavigator";

import {
  LOGIN_USER_SUCCESS,
  NAVIGATION_BACK,
  BACK_TO_TAB_AFTER_AUTH,
  BACK_TO_SCREEN_AFTER_AUTH,
  BACK_TO_PARENT_SCREEN
} from "../actions/Types";

const initialNavigationAction = RootNavigator.router.getActionForPathAndParams(
  "Home"
);
const initialNavState = RootNavigator.router.getStateForAction(
  initialNavigationAction
);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case NAVIGATION_BACK:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: state.parentScreen }),
        state
      );
      break;
    case BACK_TO_TAB_AFTER_AUTH:
      nextState = {
        ...RootNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: action.payload }),
          state
        ),
        screenBeforeAuth: action.payload
      };
      break;
    case BACK_TO_SCREEN_AFTER_AUTH:
      nextState = { ...state, screenBeforeAuth: action.payload };
      break;
    case BACK_TO_PARENT_SCREEN:
      nextState = { ...state, parentScreen: action.payload };
      break;
    case LOGIN_USER_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: state.screenBeforeAuth
        }),
        state
      );
      break;
    case "Logout":
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
