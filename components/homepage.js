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
  constructor(props) {
    super(props);
    this.answers = [];
  }
  componentDidMount() {
    dataStore.getQuestion(1);
    dataStore.getPlace(1);
  }

  render() {
    answers = [];
    let n = dataStore.answer.map(a => {
      answers.push(a.answer);
      console.log(a.quest);
      return (
        <CardItem cardBody style={{ flex: 1, marginBottom: 10 }} key={a.id}>
          <Button
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => dataStore.getQuestion(a.quest)}
          >
            <Text>{a.answer}</Text>
          </Button>
        </CardItem>
      );
    });
    console.log("hey");
    console.log(dataStore.places);
    console.log("hey");

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
                  {dataStore.question.question}
                </Text>
              </Body>
            </CardItem>

            {n}
          </Card>
          <Text>{dataStore.places.name}</Text>
        </Content>
      </Container>
    );
  }
}
export default observer(HomePage);
