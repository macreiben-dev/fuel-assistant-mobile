import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  VirtualizedList,
} from "react-native";

import { Button, Checkbox, DataTable, IconButton, TextInput } from "react-native-paper";

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
  const [isTyre, setIsTyreChecked] = React.useState(false);
  const [isFuel, setIsFuelChecked] = React.useState(false);
  const [isPilot, setIsPilotChecked] = React.useState(false);

  return (
    <View key={props.oneItem.key} style={styles.inputContainer}>
      <View>
        <TextInput placeholder="Pilot Name" Text={props.oneItem.pilot} />
      </View>
      <View>
        <TextInput placeholder="Spotter" Text="SpotterName01" />
      </View>
      <View>
        <TextInput placeholder="Stint Duration" Text="0:00:33" />
      </View>
      <View>
        <Checkbox
          status={isTyre ? 'checked' : 'unchecked'}
          onPress={() => {
            setIsTyreChecked(!isTyre);
          }}></Checkbox>
      </View>
      <View>
        <Checkbox
          status={isFuel ? 'checked' : 'unchecked'}
          onPress={() => {
            setIsFuelChecked(!isFuel);
          }}></Checkbox>
      </View>
      <View>
        <Checkbox
          status={isPilot ? 'checked' : 'unchecked'}
          onPress={() => {
            setIsPilotChecked(!isPilot);
          }}></Checkbox>
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
  inputContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default StratComponent;
