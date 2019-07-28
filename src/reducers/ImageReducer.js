import { SELECTED_IMAGE_CHANGED } from "../actions/Types";

const INITIAL_STATE = {
  url: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_IMAGE_CHANGED:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};
