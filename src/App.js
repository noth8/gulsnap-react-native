import React, { Component } from "react";
import firebase from "@firebase/app";
import "@firebase/auth";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import config from "./config/firebase";
import { StatusBar } from "./components/common";
import { AppNavigator, ReactNavigationRedux } from "./navigation/AppNavigator";

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, ReactNavigationRedux)
);

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
