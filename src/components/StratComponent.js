import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Button, DataTable, IconButton, TextInput } from "react-native-paper";

class StratComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text>Strat component coming soon !</Text>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Pilot</DataTable.Title>
              <DataTable.Title>Stint Duration</DataTable.Title>
              <DataTable.Title>Pit Duration</DataTable.Title>
              <DataTable.Title>Starts</DataTable.Title>
              <DataTable.Title>Ends</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Pilot name here</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
              <DataTable.Cell>00:00:00</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>

        <View style={styles.fixedView}>
          <IconButton icon="plus-circle" />
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
