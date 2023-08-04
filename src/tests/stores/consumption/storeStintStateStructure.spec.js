import { describe, expect } from "@jest/globals";

import setupStore from "../../../stores/configureStore";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Initial state structure", () => {
  test("Then store should contain laptimeMinutes", () => {
    let actualState = store.getState();

    expect(actualState.consumption.laptimeMinutes).toBe(0);
  });
  test("Then store should contain laptimeSeconds", () => {
    let actualState = store.getState();

    expect(actualState.consumption.laptimeSeconds).toBe(0);
  });
  test("Then store should contain consumptionLiterPerLap", () => {
    let actualState = store.getState();

    expect(actualState.consumption.consumptionLiterPerLap).toBe(0.0);
  });
  test("Then store should contain fuelTankLiter", () => {
    let actualState = store.getState();

    expect(actualState.consumption.fuelTankLiter).toBe(0);
  });
  test("Then store should contain wouldBeStintDurationMinutes", () => {
    let actualState = store.getState();

    expect(actualState.consumption.wouldBeStintDurationMinutes).toBe(0);
  });
});
