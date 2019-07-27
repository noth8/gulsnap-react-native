import { NavigationActions } from "react-navigation";

import { RootNavigator } from "../navigation/AppNavigator";

const initialNavigationAction = RootNavigator.router.getActionForPathAndParams(
  "Home"
);
const initialNavState = RootNavigator.router.getStateForAction(
  initialNavigationAction
);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
