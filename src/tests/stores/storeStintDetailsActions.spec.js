import { describe, test, expect, beforeEach } from "@jest/globals";

import setupStore from "../../stores/stintdetails/configureStore";

import { changeConsumption } from "../../stores/stintdetails/actions/lapConsumption";
import { changeFuelTankLiter } from "../../stores/stintdetails/actions/laptimeFuelTank";
import { changeLaptimeMinutes } from "../../stores/stintdetails/actions/laptimeMinute";
import { changeLaptimeSeconds } from "../../stores/stintdetails/actions/laptimeSecond";
import { changeWouldBeStintDuration } from "../../stores/stintdetails/actions/laptimeWouldBeStintDurationMinutes";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Store - stint details", () => {
  test("Given action changeConsumption is used Then set store consumptionLiterPerLap", () => {
    let action = changeConsumption(6);

    store.dispatch(action);

    let actual = store.getState().stintDetails.consumptionLiterPerLap;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changefuelTankLiter is used Then set fuelTankLiter", () => {
    let action = changeFuelTankLiter(6);

    store.dispatch(action);

    let actual = store.getState().stintDetails.fuelTankLiter;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changeLaptimeMinutes is used Then set fuelTankLiter", () => {
    let action = changeLaptimeMinutes(6);

    store.dispatch(action);

    let actual = store.getState().stintDetails.laptimeMinutes;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changeLaptimeMinutes is used Then set fuelTankLiter", () => {
    let action = changeLaptimeSeconds(6);

    store.dispatch(action);

    let actual = store.getState().stintDetails.laptimeSeconds;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action changeWouldBeStintDuration is used Then set fuelTankLiter", () => {
    let action = changeWouldBeStintDuration(6);

    store.dispatch(action);

    let actual = store.getState().stintDetails.wouldBeStintDurationMinutes;

    console.log(store.getState());

    expect(actual).toBe(6);
  });
});
