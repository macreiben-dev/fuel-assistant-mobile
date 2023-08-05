import { describe, test, expect, beforeEach } from "@jest/globals";

import {
  laptimeMinuteUpdate,
  laptimeSecondsUpdate,
  fuelTankLiterUpdate,
  wouldBeStintDurationMinutesUpdate,
} from "../../../stores/consumption/reducers/laptimeSlice";
import setupStore from "../../../stores/configureStore2";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

const readFromConsumptionState = () => {
  return store.getState().consumption;
};

describe("Store - laptimeSlice", () => {
  test("GIVEN laptimeMinuteUpdate with 2 THEN consumption.laptimeMinutes IS 2", () => {
    store.dispatch(laptimeMinuteUpdate(2));

    expect(readFromConsumptionState().laptimeMinutes).toBe(2);
  });
  test("GIVEN laptimeSecondsUpdate with 2 THEN consumption.laptimeSeconds IS 2", () => {
    store.dispatch(laptimeSecondsUpdate(2));

    expect(readFromConsumptionState().laptimeSeconds).toBe(2);
  });
  test("GIVEN fuelTankLiterUpdate with 2 THEN consumption.fuelTankLiterUpdate IS 2", () => {
    store.dispatch(fuelTankLiterUpdate(2));

    expect(readFromConsumptionState().fuelTankLiter).toBe(2);
  });
  test("GIVEN wouldBeStintDurationMinutesUpdate with 2 THEN wouldBeStintDurationMinutes IS 2", () => {
    store.dispatch(wouldBeStintDurationMinutesUpdate(2));

    expect(readFromConsumptionState().wouldBeStintDurationMinutes).toBe(2);
  });
});
