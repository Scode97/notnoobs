import dataStore from "../stores/dataStore.js";

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

import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";

import { Link } from "react-router-native";

export default class DetailEvent extends React.Component {
  render() {
    let e = dataStore.events.map(p => (
      <ListItem>
        <ScrollView key={p.name}>
          <View>
            <Link component={TouchableOpacity} to="/detail">
              <Image
                source={{ uri: p.image }}
                style={{ height: 50, width: 50, flex: 1 }}
              />
              <Right>
                <Text>{p.name}</Text>
              </Right>
            </Link>
          </View>
        </ScrollView>
      </ListItem>
    ));
    console.log("DetailEvent");
    return <View>{e}</View>;
  }
}
