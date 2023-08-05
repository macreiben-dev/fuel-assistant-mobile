import { describe, test, expect, beforeEach } from "@jest/globals";

import {
  laptimeMinuteUpdate,
  laptimeSecondsUpdate,
  fuelTankLiterUpdate,
} from "../../../stores/consumption/reducers/laptimeSlice";
import setupStore from "../../../stores/configureStore2";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Store - laptimeSlice", () => {
  test("GIVEN laptimeMinuteUpdate with 2 THEN consumption.laptimeMinutes IS 2", () => {
    store.dispatch(laptimeMinuteUpdate(2));

    expect(store.getState().consumption.laptimeMinutes).toBe(2);
  });
  test("GIVEN laptimeSecondsUpdate with 2 THEN consumption.laptimeSeconds IS 2", () => {
    store.dispatch(laptimeSecondsUpdate(2));

    expect(store.getState().consumption.laptimeSeconds).toBe(2);
  });
  test("GIVEN fuelTankLiterUpdate with 2 THEN consumption.laptimeSeconds IS 2", () => {
    store.dispatch(fuelTankLiterUpdate(2));

    expect(store.getState().consumption.fuelTankLiter).toBe(2);
  });
});
