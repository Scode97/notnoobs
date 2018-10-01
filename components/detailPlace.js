import dataStore from "../stores/dataStore.js";

import React, { Component } from "react";
import { Text, ListItem, Right } from "native-base";

import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";

import { Link } from "react-router-native";

class DetailPlace extends Component {
  render() {
    let p = dataStore.places.map(p => (
      <ListItem>
        <ScrollView key={p.name}>
          <View>
            <Link component={TouchableOpacity} to="/detailEvent">
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
    console.log("DetailPlace");
    return <View>{p}</View>;
  }
}
export default DetailPlace;
