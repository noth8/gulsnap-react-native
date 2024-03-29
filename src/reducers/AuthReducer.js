import * as types from "../actions/Types";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  user: "",
  error: "",
  loading: false,
  sended: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NAME_CHANGED:
      return { ...state, name: action.payload, error: "" };
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
    case types.RESET_USER_PASSORD_PROCESS:
      return { ...state, loading: true, error: "" };
    case types.RESET_USER_PASSORD_SUCCESS:
      return {
        sended: true,
        email: "",
        loading: false,
        error: ""
      };
    case types.RESET_USER_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.REGISTER_USER_PROCESS:
      return { ...state, loading: true, error: "" };
    case types.REGISTER_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: ""
      };
    case types.REGISTER_USER_FAIL:
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
