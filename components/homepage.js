import React from "react";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import dataStore from "../stores/dataStore.js";
import { observer } from "mobx-react";

class HomePage extends React.Component {
  componentDidMount() {
    dataStore.getQuestion();
    console.log(dataStore.question);
  }
  render() {
    return (
      <Container>
        <Header>
          <Text style={{ marginTop: 15 }}> No-Noobs Activity Canvas</Text>
        </Header>
        <Content>
          <Card
            style={{
              flex: 0,
              backgroundColor: "#fff",
              alignItems: "center",
              marginTop: 15
            }}
          >
            <CardItem>
              <Body>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 50
                  }}
                >
                  {dataStore.getQuestion}
                </Text>
              </Body>
            </CardItem>
            <CardItem cardBody style={{ flex: 1, marginBottom: 10 }}>
              <Button
                disabled
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Text>Physical activities</Text>
              </Button>
            </CardItem>
            <CardItem cardBody style={{ flex: 1, marginBottom: 10 }}>
              <Button disabled style={{ justifyContent: "center" }}>
                <Text>Educational lectures</Text>
              </Button>
            </CardItem>
            <CardItem cardBody style={{ flex: 1, marginBottom: 10 }}>
              <Button disabled style={{ justifyContent: "center" }}>
                <Text>Mental health</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default observer(HomePage);
