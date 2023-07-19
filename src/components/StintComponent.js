import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { DataTable } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";

import { changeLaptimeMinutes } from "../stores/consumption/actions/laptimeMinute";
import { changeLaptimeSeconds } from "../stores/consumption/actions/laptimeSecond";

import { floatConverter } from "../business/converter";

import { DisplayStintDataComponent } from "./SintDataComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: "row",
    rowGap: 5,
    columnGap: 5,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textLabel: {
    fontWeight: "bold",
  },
  textInputLaptimesMinute: {
    width: 40,
    borderWidth: 1,
    padding: 5,
  },
});

const onDataChange = (text, setStateValue, setError, converter, setStoreValue, dispatch) => {
  setStateValue(text);
  let floatValue = converter(text);
  if (floatValue == undefined) {
    console.warn("laptime minute invalid", text)
    setError(true);
    return;
  }
  setError(false);
  let action = setStoreValue(floatValue);
  dispatch(action)
}

// =============================================================

const CurrentComponent = () => {
  const [laptimeMinutes, setlaptimeMinutes] = React.useState('');
  const [isErrorLaptimeMinutes, setIsErrorLapTimeMinute] = React.useState(false);

  const [laptimeSeconds, setLaptimeSeconds] = React.useState('');
  const [isErrorLaptimeSeconds, setIsErrorLaptimeSeconds] = React.useState(false);

  // ---- STORE INTERACTIONS ----

  const selectorStintDetails = useSelector(state => state.stintDetails)

  const dispatch = useDispatch();

  let onLaptimeMinutesChange = (text) => {

    onDataChange(text,
      setlaptimeMinutes,
      setIsErrorLapTimeMinute,
      floatConverter,
      changeLaptimeMinutes,
      dispatch);
  }

  let onLaptimeSecondsChange = (text) => {
    onDataChange(text,
      setLaptimeSeconds,
      setIsErrorLaptimeSeconds,
      floatConverter,
      changeLaptimeSeconds,
      dispatch);
  }

  return (
    <View
      style={[
        {
          flexDirection: "column",
          rowGap: 5,
          columnGap: 5,
        },
      ]}
    >
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      <View style={styles.rowView}>
        {/* ================== LAPTIMES TYPING ================= */}
        {/* ---------------------------------------------------- */}
        <View>
          <TextInput
            label="Minutes"
            keyboardType="numeric"
            maxLength={2}
            defaultValue=""
            error={isErrorLaptimeMinutes}
            value={laptimeMinutes}
            onChangeText={text => onLaptimeMinutesChange(text)}
            placeholder="mm"
          ></TextInput>
        </View>
        {/* ---------------------------------------------------- */}
        <View>
          <Text>:</Text>
        </View>
        {/* ---------------------------------------------------- */}
        <View>
          <TextInput
            label="Seconds"
            keyboardType="numeric"
            maxLength={2}
            defaultValue=""
            error={isErrorLaptimeSeconds}
            value={laptimeSeconds}
            onChangeText={text => onLaptimeSecondsChange(text)}
            placeholder="ss"
          ></TextInput>
        </View>
        {/* ---------------------------------------------------- */}
      </View>
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      <View style={styles.rowView}>
        {/* ==================== CONSUMPTION =================== */}
        {/* ---------------------------------------------------- */}
        <View>
          <TextInput
            label="Consumption Liter/Lap"
            keyboardType="numeric"
            maxLength={4}
            defaultValue=""
            value={selectorStintDetails.consumptionLiterPerLap}
            placeholder="0.00"
          ></TextInput>
        </View>
        {/* ---------------------------------------------------- */}
        {/* ==================== FUEL TANK ===================== */}
        {/* ---------------------------------------------------- */}
        <View>
          <TextInput
            label="Fuel tank (Liter)"
            keyboardType="numeric"
            maxLength={3}
            defaultValue=""
            value={selectorStintDetails.fuelTankLiter}
            placeholder="0"
          ></TextInput>
        </View>
        {/* ---------------------------------------------------- */}
      </View>
      <View style={styles.rowView}>
        {/* ---------------------------------------------------- */}
        <View>
          <TextInput
            label="Total time (min)"
            keyboardType="numeric"
            maxLength={4}
            defaultValue=""
            value={selectorStintDetails.wouldBeStintDurationMinutes}
            placeholder="0"
          ></TextInput>
        </View>
        {/* ---------------------------------------------------- */}
      </View>
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      <View style={styles.rowView}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>&nbsp;</DataTable.Title>
            <DataTable.Title numeric>Stint (min)</DataTable.Title>
            <DataTable.Title numeric>Lap Prev</DataTable.Title>
            <DataTable.Title numeric>Consumption</DataTable.Title>
          </DataTable.Header>
          <DisplayStintDataComponent />
        </DataTable>
      </View>
    </View >);
}

export default (CurrentComponent)
