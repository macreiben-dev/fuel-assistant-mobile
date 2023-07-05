import { describe, test, expect, beforeEach } from "@jest/globals";

import setupStore from "../../../stores/configureStore";

import { changeConsumption } from "../../../stores/consumption/actions/lapConsumption";
import { changeFuelTankLiter } from "../../../stores/consumption/actions/laptimeFuelTank";
import { changeLaptimeMinutes } from "../../../stores/consumption/actions/laptimeMinute";
import { changeLaptimeSeconds } from "../../../stores/consumption/actions/laptimeSecond";
import { changeWouldBeStintDuration } from "../../../stores/consumption/actions/laptimeWouldBeStintDurationMinutes";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Store - stint details", () => {
  test("Given action changeConsumption is used Then set store consumptionLiterPerLap", () => {
    let action = changeConsumption(6);

    store.dispatch(action);

    let actual = store.getState().consumption.consumptionLiterPerLap;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changefuelTankLiter is used Then set fuelTankLiter", () => {
    let action = changeFuelTankLiter(6);

    store.dispatch(action);

    let actual = store.getState().consumption.fuelTankLiter;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changeLaptimeMinutes is used Then set fuelTankLiter", () => {
    let action = changeLaptimeMinutes(6);

    store.dispatch(action);

    let actual = store.getState().consumption.laptimeMinutes;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changeLaptimeMinutes is used Then set fuelTankLiter", () => {
    let action = changeLaptimeSeconds(6);

    store.dispatch(action);

    let actual = store.getState().consumption.laptimeSeconds;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changeWouldBeStintDuration is used Then set fuelTankLiter", () => {
    let action = changeWouldBeStintDuration(6);

    store.dispatch(action);

    let actual = store.getState().consumption.wouldBeStintDurationMinutes;

    console.log(store.getState());

    expect(actual).toBe(6);
  });
});
