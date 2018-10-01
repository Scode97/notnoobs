import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Body,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right
} from "native-base";

import { Link } from "react-router-native";

import ScrollableTabView from "react-native-scrollable-tab-view";

import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import dataStore from "../stores/dataStore.js";
import { observer } from "mobx-react";

import DetailEvent from "./detailEvent.js";
import DetailPlace from "./detailPlace.js";
import DetailArticle from "./detailArticle.js";

import { Col, Row, Grid } from "react-native-easy-grid";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.answers = [];
  }
  componentDidMount() {
    dataStore.getQuestion(1);
    dataStore.getPlace(1);
    dataStore.getEvent(2);
  }

  render() {
    answers = [];
    let Ans = dataStore.answer.map(a => {
      console.log("now");
      console.log(a.answer);
      answers.push(a.answer);
      console.log(a.quest);
      return (
        <CardItem cardBody style={{ flex: 1, marginBottom: 10 }} key={a.id}>
          {/* <Button
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => dataStore.getQuestion(a.quest)}
          >
            <Text>{a.answer}</Text>
          </Button> */}

          <Grid style={{ alignItems: "center" }}>
            <Row
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "center",
                backgroundColor: "#635DB7",
                height: 30,
                width: 200
              }}
              onPress={() => dataStore.getQuestion(a.quest)}
            >
              {" "}
              <Col>
                <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {" "}
                  {a.answer}
                </Text>
              </Col>
            </Row>
          </Grid>
        </CardItem>
      );
    });

    return (
      <Container>
        <Content>
          <Card
            style={{
              flex: 0,
              backgroundColor: "#fff",
              alignItems: "center",
              marginTop: 0
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
                    marginLeft: 50,
                    fontWeight: "bold"
                  }}
                >
                  {dataStore.question.question}
                </Text>
              </Body>
            </CardItem>

            {Ans}
          </Card>
          {/* _____________ScrollableTabView________________ */}
          <Container>
            <ScrollableTabView>
              <DetailEvent tabLabel="Events" />
              <DetailPlace tabLabel="Places" />
              <DetailArticle tabLabel="Articles" />
            </ScrollableTabView>
          </Container>
          {/* _____________END of ScrollableTabView________________ */}
        </Content>
      </Container>
    );
  }
}
export default observer(HomePage);
