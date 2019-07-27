import { combineReducers } from "redux";
import ApiReducer from "./ApiReducer";
import NavigationReducer from "./NavigationReducer";

export default combineReducers({
  api: ApiReducer,
  nav: NavigationReducer
});
