import React from "react";

import { observer } from "mobx-react";

import { withRouter, Link } from "react-router-native";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../stores/authStore";

// Routing

class reg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>

        <Link
          to="/profile"
          component={Button}
          full
          onPress={() =>
            authStore.registerUser(this.state.username, this.state.password)
          }
        >
          <Text>Register</Text>
        </Link>
      </Form>
    );
  }
}

export default observer(reg);
