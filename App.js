import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./components/homepage.js";
import dataStore from "./stores/dataStore.js";

class App extends React.Component {
  // componentDidMount() {
  //   console.log(dataStore.getQuestion());
  // }
  render() {
    return <HomePage />;
  }
}
export default App;
