import * as types from "../actions/Types";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: "",
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload, error: "" };
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: "" };
    case types.LOGIN_USER_PROCESS:
      return { ...state, loading: true, error: "" };
    case types.LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: ""
      };
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        password: "",
        loading: false,
        error: action.payload
      };
    case types.LOGOUT_USER_PROCESS:
      return { ...state, loading: true, error: "" };
    case types.LOGOUT_USER_SUCCESS:
      return {
        user: "",
        loading: false,
        error: ""
      };
    case types.LOGOUT_USER_FAIL:
      return {
        ...state,
        password: "",
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
