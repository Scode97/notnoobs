import React, { Component } from "react";
import Body from "./components/body.js";
import { Root, Container } from "native-base";
import { NativeRouter } from "react-router-native";
import MainHeader from "./components/header.js";
import MainFooter from "./components/footer.js";

import authStore from "./stores/authStore";

import Expo, { AppLoading } from "expo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsReady: false
    };
  }

  componentDidMount() {
    this.loadFonts();
    authStore.checkForToken();
  }

  loadFonts() {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    })
      .then(() => this.setState({ fontsReady: true }))
      .catch(err => console.error(err));
  }
  render() {
    if (!this.state.fontsReady) {
      return <AppLoading />;
    }
    return (
      <Root>
        <NativeRouter>
          <Container>
            <MainHeader />
            <Body />
            <MainFooter />
          </Container>
        </NativeRouter>
      </Root>
    );
  }
}
export default App;
