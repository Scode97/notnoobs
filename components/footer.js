import React, { Component } from "react";

// NativeBase
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

import { withRouter, Link } from "react-router-native";
import { observer } from "../node_modules/mobx-react";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Link component={Button} to="/login">
            <Icon name="lock" />
          </Link>
        </FooterTab>
      </Footer>
    );
  }
}

export default withRouter(observer(MainFooter));
