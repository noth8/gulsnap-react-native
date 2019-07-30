import { combineReducers } from "redux";
import ApiReducer from "./ApiReducer";
import AuthReducer from "./AuthReducer";
import NavigationReducer from "./NavigationReducer";
import ImageReducer from "./ImageReducer";

export default combineReducers({
  api: ApiReducer,
  auth: AuthReducer,
  nav: NavigationReducer,
  img: ImageReducer
});
