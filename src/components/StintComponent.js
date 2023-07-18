import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { DataTable } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";

import { changeLaptimeMinutes } from "../stores/consumption/actions/laptimeMinute";
import { changeLaptimeSeconds } from "../stores/consumption/actions/laptimeSecond";
import { changeConsumption } from "../stores/consumption/actions/lapConsumption";
import { changeFuelTankLiter } from "../stores/consumption/actions/laptimeFuelTank";
import { changeWouldBeStintDuration } from "../stores/consumption/actions/laptimeWouldBeStintDurationMinutes";

import {
  stintServiceLaptimeMinutes,
  stintServiceLaptimeSeconds,
} from "../business/stint/stintLaptimeService";

import {
  stintSetLiterPerLap,
  stintSetFuelTankLiter,
} from "../business/stint/stintConsumptionService";

import { stintSetStintDuration } from "../business/stint/stintDurationService";

import { floatValidator } from "../business/validators";
import { floatConverter } from "../business/converter";

import { DisplayStintDataComponent } from "./SintDataComponent";

let onLaptimeSecondsChange = (text, componentProps) => {
  console.log("onLaptimeSecondsChange invoked");
  stintServiceLaptimeSeconds(
    text,
    componentProps,
    floatConverter,
    floatValidator
  );
};

let onConsumptionLiterPerLap = (text, componentProps) => {
  console.log("onConsumptionLiterPerLap invoked");
  stintSetLiterPerLap(text, componentProps, floatConverter, floatValidator);
};

let onchangefuelTankLiter = (text, componentProps) => {
  console.log("onchangefuelTankLiter invoked");
  stintSetFuelTankLiter(
    text,
    componentProps,
    floatConverter,
    floatValidator
  );
};

let onChangeWouldBeStintDuraction = (text, componentProps) => {
  console.log("onChangeWouldBeStintDuraction invoked");
  stintSetStintDuration(
    text,
    componentProps,
    floatConverter,
    floatValidator
  );
};



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

// ---------------------- REDUX ----------------------


// ---------------------- REDUX ---------------------- ___EOF___


// =============================================================

const CurrentComponent = ({ stintDetails }) => {
  const selectorStintDetails = useSelector(state => state.stintDetails)

  const dispatch = useDispatch();

  let onLapTimeMinuteChange = (text) => {
    let action = changeLaptimeMinutes(text);
    dispatch(action)
  }

  const [laptimeLiterPerLap, setlapTimeLiterPerLap] = React.useState('');

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
            onChangeText={text => onLapTimeMinuteChange(text)}
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
            value={selectorStintDetails.laptimeSeconds}
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
