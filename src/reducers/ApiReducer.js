import {
  IMAGES_FETCH_PROCESS,
  IMAGES_FETCH_SUCCESS,
  IMAGES_FETCH_FAIL
} from "../actions/Types";

const INITIAL_STATE = {
  error: "",
  loading: false,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGES_FETCH_PROCESS:
      return { ...state, loading: true, error: "" };
    case IMAGES_FETCH_SUCCESS:
      return {
        loading: false,
        data: [...state.data, ...action.payload],
        error: ""
      };
    case IMAGES_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
