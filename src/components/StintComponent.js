import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { DataTable } from "react-native-paper";

import { useDispatch } from "react-redux";

import { changeLaptimeMinutes } from "../stores/consumption/actions/laptimeMinute";
import { changeLaptimeSeconds } from "../stores/consumption/actions/laptimeSecond";
import { changeConsumption } from "../stores/consumption/actions/lapConsumption";
import { changeFuelTankLiter } from "../stores/consumption/actions/laptimeFuelTank";
import { changeWouldBeStintDuration } from "../stores/consumption/actions/laptimeWouldBeStintDurationMinutes"

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

  const [consumptionLiterPerLap, setConsumptionLiterPerLap] = React.useState('');
  const [isErrorConsumptionLiterPerLap, setIsErrorConsumptionLiterPerLap] = React.useState(false);

  const [fuelTankLiter, setFuelTankLiter] = React.useState('');
  const [isErrorFuelTankLiter, setIsErrorFuelTankLiter] = React.useState(false);

  const [wouldBeStintDurationMinutes, setWouldBeStintDurationMinutes] = React.useState('');
  const [isErrorWouldBeStintDurationMinutes, setIsErrorWouldBeStintDurationMinutes] = React.useState(false);
  // ---- STORE INTERACTIONS ----

  const dispatch = useDispatch();

  const onLaptimeMinutesChange = (text) => {
    onDataChange(text,
      setlaptimeMinutes,
      setIsErrorLapTimeMinute,
      floatConverter,
      changeLaptimeMinutes,
      dispatch);
  }

  const onLaptimeSecondsChange = (text) => {
    onDataChange(text,
      setLaptimeSeconds,
      setIsErrorLaptimeSeconds,
      floatConverter,
      changeLaptimeSeconds,
      dispatch);
  }

  const onConsumptionLiterPerLapChange = (text) => {
    onDataChange(text,
      setConsumptionLiterPerLap,
      setIsErrorConsumptionLiterPerLap,
      floatConverter,
      changeConsumption,
      dispatch);
  }

  const onFuelTankLiterChange = (text) => {
    onDataChange(text,
      setFuelTankLiter,
      setIsErrorFuelTankLiter,
      floatConverter,
      changeFuelTankLiter,
      dispatch);
  }

  const onWouldBeStintDurationMinutesChange = (text) => {
    onDataChange(text,
      setWouldBeStintDurationMinutes,
      setIsErrorWouldBeStintDurationMinutes,
      floatConverter,
      changeWouldBeStintDuration,
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
            placeholder="0.00"
            error={isErrorConsumptionLiterPerLap}
            value={consumptionLiterPerLap}
            onChangeText={text => onConsumptionLiterPerLapChange(text)}
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
            placeholder="0"
            error={isErrorFuelTankLiter}
            value={fuelTankLiter}
            onChangeText={text => onFuelTankLiterChange(text)}
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
            placeholder="0"
            error={isErrorWouldBeStintDurationMinutes}
            value={wouldBeStintDurationMinutes}
            onChangeText={text => onWouldBeStintDurationMinutesChange(text)}
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
