import {
  BACK_TO_TAB_AFTER_AUTH,
  BACK_TO_SCREEN_AFTER_AUTH,
  BACK_TO_PARENT_SCREEN
} from "./Types";

export const backToTabAfterAuthAction = ({ routeName }) => ({
  type: BACK_TO_TAB_AFTER_AUTH,
  payload: routeName
});

export const backToScreenAfterAuthAction = ({ routeName }) => ({
  type: BACK_TO_SCREEN_AFTER_AUTH,
  payload: routeName
});

export const backToParentScreenAction = ({ routeName }) => ({
  type: BACK_TO_PARENT_SCREEN,
  payload: routeName
});
