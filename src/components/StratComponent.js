import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  VirtualizedList,
} from "react-native";

import { Button, DataTable, IconButton, TextInput } from "react-native-paper";

let items = [
  {
    key: 1,
    pilot: "MacReiben",
    stintDuration: "00:50:00",
    pitDuration: "00:00:33",
    starts: "13:00:00",
    ends: "13:50:33",
  },
];

const ItemComponent = (props) => {
  return (
    <View key={props.oneItem.key} style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexDirection: "column" }}>
        <View>
          <Text>Pilot name:</Text>
          <TextInput placeholder="Pilot name" Text={props.oneItem.pilot} />
        </View>
      </View>
    </View>
  );
};

class StratComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {items.map((currentItem) => (
              <ItemComponent key={currentItem.key} oneItem={currentItem} />
            ))}
          </View>
        </ScrollView>

        <View style={styles.fixedView}>
          <IconButton
            icon="plus-circle"
            size={48}
            animated={true}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fixedView: {
    position: "absolute",
    right: 5,
    bottom: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default StratComponent;
