import { combineReducers } from "redux";
import ApiReducer from "./ApiReducer";
import NavigationReducer from "./NavigationReducer";
import ImageReducer from "./ImageReducer";

export default combineReducers({
  api: ApiReducer,
  nav: NavigationReducer,
  img: ImageReducer
});
