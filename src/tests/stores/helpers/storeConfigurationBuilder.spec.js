import { describe, expect } from "@jest/globals";

import setupStore from "../../../stores/configureStore";

import StoreConfigurationBuilder from "./storeConfigurationBuilder";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Store configuration builder", () => {
  test("Should set consumption", () => {
    let builder = new StoreConfigurationBuilder();
    builder.withStore(store);
    builder.withConsumption(6);
    builder.build();

    let actual = store.getState().consumption.consumptionLiterPerLap;

    expect(actual).toBe(6);
  });
  test("should set fuelTankLiter", () => {
    let builder = new StoreConfigurationBuilder();
    builder.withStore(store);
    builder.withFuelTankLiter(6);
    builder.build();

    let actual = store.getState().consumption.fuelTankLiter;

    expect(actual).toBe(6);
  });
  test("should set laptimeMinutes", () => {
    let builder = new StoreConfigurationBuilder();
    builder.withStore(store);
    builder.withLaptimeMinutes(6);
    builder.build();

    let actual = store.getState().consumption.laptimeMinutes;

    expect(actual).toBe(6);
  });
  test("should set laptimeSeconds", () => {
    let builder = new StoreConfigurationBuilder();
    builder.withStore(store);
    builder.withLapTimeSeconds(6);
    builder.build();

    let actual = store.getState().consumption.laptimeSeconds;

    expect(actual).toBe(6);
  });
  test("should set wouldBeStintDurationMinutes", () => {
    let builder = new StoreConfigurationBuilder();
    builder.withStore(store);
    builder.withWouldBeStintDuration(6);
    builder.build();

    let actual = store.getState().consumption.wouldBeStintDurationMinutes;

    expect(actual).toBe(6);
  });
});
