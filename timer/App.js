import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Timer from "./component/Timer/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

let store = createStore(reducer);

console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer></Timer>
      </Provider>
    );
  }
}


