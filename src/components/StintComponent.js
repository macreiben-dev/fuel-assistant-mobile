import React from "react";

import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";

import { StyleSheet, Text, TextInput, View } from "react-native";
import { DataTable } from "react-native-paper";

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

class StintComponent extends React.Component {
  constructor() {
    super();
    this.onLapTimeMinuteChange = (text, componentProps) => {
      console.log("onLapTimeMinuteChange invoked");
      stintServiceLaptimeMinutes(
        text,
        componentProps,
        floatConverter,
        floatValidator
      );
    };

    this.onLaptimeSecondsChange = (text, componentProps) => {
      console.log("onLaptimeSecondsChange invoked");
      stintServiceLaptimeSeconds(
        text,
        componentProps,
        floatConverter,
        floatValidator
      );
    };

    this.onConsumptionLiterPerLap = (text, componentProps) => {
      console.log("onConsumptionLiterPerLap invoked");
      stintSetLiterPerLap(text, componentProps, floatConverter, floatValidator);
    };

    this.onchangefuelTankLiter = (text, componentProps) => {
      console.log("onchangefuelTankLiter invoked");
      stintSetFuelTankLiter(
        text,
        componentProps,
        floatConverter,
        floatValidator
      );
    };

    this.onChangeWouldBeStintDuraction = (text, componentProps) => {
      console.log("onChangeWouldBeStintDuraction invoked");
      stintSetStintDuration(
        text,
        componentProps,
        floatConverter,
        floatValidator
      );
    };
  }

  render() {
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
          <View>
            <Text style={styles.textLabel}>Laptime&nbsp;:</Text>
          </View>
          {/* ---------------------------------------------------- */}
          <View>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              defaultValue={this.props.consumption.laptimeMinutes}
              onChangeText={(text) =>
                this.onLapTimeMinuteChange(text, this.props)
              }
              style={styles.textInputLaptimesMinute}
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
              keyboardType="numeric"
              maxLength={2}
              defaultValue={this.props.consumption.laptimeSeconds}
              onChangeText={(text) =>
                this.onLaptimeSecondsChange(text, this.props)
              }
              style={styles.textInputLaptimesMinute}
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
          <View>
            <Text style={styles.textLabel}>Consumption Liter/Lap&nbsp;:</Text>
          </View>
          {/* ---------------------------------------------------- */}
          <View>
            <TextInput
              keyboardType="numeric"
              maxLength={4}
              defaultValue={this.props.consumption.consumptionLiterPerLap}
              onChangeText={(text) =>
                this.onConsumptionLiterPerLap(text, this.props)
              }
              style={styles.textInputLaptimesMinute}
              placeholder="0.00"
            ></TextInput>
          </View>
          {/* ---------------------------------------------------- */}
          {/* ==================== FUEL TANK ===================== */}
          <View>
            <Text style={styles.textLabel}>Fuel tank (Liter)&nbsp;:</Text>
          </View>
          {/* ---------------------------------------------------- */}
          <View>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              defaultValue={this.props.consumption.fuelTankLiter}
              onChangeText={(text) =>
                this.onchangefuelTankLiter(text, this.props)
              }
              style={styles.textInputLaptimesMinute}
              placeholder="0"
            ></TextInput>
          </View>
          {/* ---------------------------------------------------- */}
        </View>
        <View style={styles.rowView}>
          <View>
            <Text style={styles.textLabel}>Total time (min)&nbsp;:</Text>
          </View>
          {/* ---------------------------------------------------- */}
          <View>
            <TextInput
              keyboardType="numeric"
              maxLength={4}
              defaultValue={this.props.consumption.wouldBeStintDurationMinutes}
              onChangeText={(text) => {
                this.onChangeWouldBeStintDuraction(text, this.props);
              }}
              style={styles.textInputLaptimesMinute}
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
            {/* {displayStintData()} */}
          </DataTable>
        </View>
      </View>
    );
  }

  readLaptimeMinutes() {
    return this.selectorLaptimeMinute();
  }
}

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

const mapStateToProps = (state) => {
  return {
    consumption: state.consumption,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const boundActions = bindActionCreators(
    {
      changeLaptimeMinutes,
      changeLaptimeSeconds,
      changeConsumption,
      changeFuelTankLiter,
      changeWouldBeStintDuration,
    },
    dispatch
  );

  return {
    ...boundActions,
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StintComponent);
