import React, { Component } from "react";

import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

import { Link } from "react-router-native";

// Store
import authStore from "../stores/authStore";

// Routing
// import { Redirect } from "react-router-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    // if (authStore.isAuthenticated) return <Redirect to="/profile" />;
    // console.log(this.state.username);
    // console.log(this.state.password);
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          onPress={() =>
            authStore.loginUser(this.state.username, this.state.password)
          }
        >
          <Text>Login</Text>
        </Button>

        <Link component={Button} full to="/reg">
          <Text>Register</Text>
        </Link>
      </Form>
    );
  }
}
export default observer(Login);
