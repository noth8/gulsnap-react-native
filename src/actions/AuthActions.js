import firebase from "@firebase/app";
import "@firebase/auth";
import * as types from "./Types";
import * as lang from "../config/languages";

export const emailChangedAction = text => ({
  type: types.EMAIL_CHANGED,
  payload: text
});

export const passwordChangedAction = text => ({
  type: types.PASSWORD_CHANGED,
  payload: text
});

export const loginUserAction = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOGIN_USER_PROCESS });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
      });
    })
    .catch(error => {
      let errorDescription;
      switch (error.code) {
        case types.FIREBASE_INVALID_EMAIL_FORMAT:
          errorDescription = lang.FIREBASE_INVALID_EMAIL_FORMAT;
          break;
        case types.FIREBASE_EMAIL_NOT_FOUND:
          errorDescription = lang.FIREBASE_EMAIL_NOT_FOUND;
          break;
        case types.FIREBASE_WRONG_PASSWORD:
          errorDescription = lang.FIREBASE_WRONG_PASSWORD;
          break;
        default:
          errorDescription = lang.FIREBASE_NO_INTERNET;
      }
      dispatch({ type: types.LOGIN_USER_FAIL, payload: errorDescription });
    });
};

export const logoutUserAction = () => dispatch => {
  dispatch({ type: types.LOGOUT_USER_PROCESS });

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: types.LOGOUT_USER_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: types.LOGOUT_USER_FAIL, payload: error.code });
    });
};

export const resetUserPasswordAction = email => dispatch => {
  dispatch({ type: types.RESET_USER_PASSORD_PROCESS });

  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      dispatch({ type: types.RESET_USER_PASSORD_SUCCESS });
    })
    .catch(error => {
      let errorDescription;
      switch (error.code) {
        case types.FIREBASE_INVALID_EMAIL_FORMAT:
          errorDescription = lang.FIREBASE_INVALID_EMAIL_FORMAT;
          break;
        case types.FIREBASE_EMAIL_NOT_FOUND:
          errorDescription = lang.FIREBASE_EMAIL_NOT_FOUND;
          break;
        default:
          errorDescription = lang.FIREBASE_NO_INTERNET;
      }
      dispatch({
        type: types.RESET_USER_PASSWORD_FAIL,
        payload: errorDescription
      });
    });
};
