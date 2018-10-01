import React, { Component } from "react";

// NativeBase
import { Header, Text, Body, Right, Left, Button, Icon } from "native-base";

// Routing
import { withRouter, Link } from "react-router-native";
import { observer } from "mobx-react";

class MainHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text style={{ marginTop: 15, fontWeight: "bold" }}>KnowNew</Text>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default withRouter(observer(MainHeader));
