import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  VirtualizedList,
} from "react-native";

import { Button, DataTable, IconButton, TextInput } from "react-native-paper";

const ItemComponent = (oneItem) => {
  <View style={{ flex: 1, flexDirection: "row" }}>
    <View style={{ flexDirection: "column" }}>
      <View>
        <Text>Pilot name:</Text>
        <TextInput placeholder="Pilot name" />
      </View>
    </View>
  </View>;
};

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

class StratComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text>Strat component coming soon !</Text>

          <View style={{ flex: 1, flexDirection: "row" }}>
            {items.map((item) => (
              <ItemComponent key={item.id} oneItem={item} />
            ))}
          </View>

          {/* <DataTable>
            <DataTable.Header>
              <DataTable.Title></DataTable.Title>
              <DataTable.Title>Pilot</DataTable.Title>
              <DataTable.Title>Stint Duration</DataTable.Title>
              <DataTable.Title>Pit Duration</DataTable.Title>
              <DataTable.Title>Starts</DataTable.Title>
              <DataTable.Title>Ends</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell></DataTable.Cell>
              <DataTable.Cell>CFI</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
            </DataTable.Row>
          </DataTable> */}
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
