import { describe, expect } from "@jest/globals";

import setupStore from "../../../stores/configureStore";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Consumption - Initial state structure - ", () => {
  test("Then store should contain laptimeMinutes", () => {
    let actualState = store.getState();

    expect(actualState.stintDetails.laptimeMinutes).toBe(0);
  });
  test("Then store should contain laptimeSeconds", () => {
    let actualState = store.getState();

    expect(actualState.stintDetails.laptimeSeconds).toBe(0);
  });
  test("Then store should contain consumptionLiterPerLap", () => {
    let actualState = store.getState();

    expect(actualState.stintDetails.consumptionLiterPerLap).toBe(0.0);
  });
  test("Then store should contain fuelTankLiter", () => {
    let actualState = store.getState();

    expect(actualState.stintDetails.fuelTankLiter).toBe(0);
  });
  test("Then store should contain wouldBeStintDurationMinutes", () => {
    let actualState = store.getState();

    expect(actualState.stintDetails.wouldBeStintDurationMinutes).toBe(0);
  });
});
