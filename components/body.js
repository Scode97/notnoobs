import React, { Component } from "react";

import { Content } from "native-base";
import HomePage from "./homepage.js";
import Login from "./Login.js";
import Loading from "./Loading.js";

import Detail from "./detailEvent.js";

import { Route, Switch, Redirect } from "react-router-native";
import reg from "./reg.js";

class Body extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route path="/homepage" component={HomePage} />
          {/* <Route path="/detail" component={Detail} /> */}
          <Route path="/reg" component={reg} />
          <Route path="/login" component={Login} />
        </Switch>
      </Content>
    );
  }
}

export default Body;
