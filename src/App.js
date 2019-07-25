import React, { Component } from "react";
import { View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { StatusBar } from "./components/common";
import { HomeScreen } from "./screens/";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <HomeScreen />
      </Provider>
    );
  }
}

export default App;
