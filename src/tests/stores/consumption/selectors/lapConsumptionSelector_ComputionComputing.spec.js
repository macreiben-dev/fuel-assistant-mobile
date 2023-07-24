import { describe, expect, test } from "@jest/globals";

import setupStore from "../../../../stores/configureStore";
import StoreConfigurationBuilder from "../../helpers/storeConfigurationBuilder";

import { selectConsumptionForStint } from "../../../../stores/consumption/selectors/lapConsumptionSelector";

const STINT_FIFTY_PERCENT = 0.5;
const STINT_SIXTY_PERCENT = 0.6;
const STINT_SEVENTY_PERCENT = 0.7;
const STINT_EIGHTY_PERCENT = 0.8;
const STINT_NINETY_PERCENT = 0.9;
const STINT_NINETYFIVE_PERCENT = 0.95;
const STINT_HUNDRED_PERCENT = 1.0;

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Consumption computing", () => {
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then halfway consumption is 5.0",
    () => {
      let storeConfigBuilder = new StoreConfigurationBuilder();

      storeConfigBuilder
        .withLaptimeMinutes(1)
        .withConsumption(1)
        .withFuelTankLiter(10)
        .withWouldBeStintDuration(10)
        .withStore(store)
        .build();

      let state = store.getState();

      let intermediary = selectConsumptionForStint(state);

      let actual = intermediary.find(
        (element) => element.stintPercent == STINT_FIFTY_PERCENT
      );

      expect(actual.consumption).toBe(5.0);
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and stint is [10] minutes " +
      "Then 60% race consumption is 6.0",
    () => {
      let storeConfigBuilder = new StoreConfigurationBuilder();

      storeConfigBuilder
        .withLaptimeMinutes(1)
        .withConsumption(1)
        .withFuelTankLiter(10)
        .withWouldBeStintDuration(10)
        .withStore(store)
        .build();

      let state = store.getState();

      let intermediary = selectConsumptionForStint(state);

      let actual = intermediary.find(
        (element) => element.stintPercent == STINT_SIXTY_PERCENT
      );

      expect(actual.consumption).toBe(6.0);
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and stint is [10] minutes " +
      "Then 70% race consumption is 7.0",
    () => {
      let storeConfigBuilder = new StoreConfigurationBuilder();

      storeConfigBuilder
        .withLaptimeMinutes(1)
        .withConsumption(1)
        .withFuelTankLiter(10)
        .withWouldBeStintDuration(10)
        .withStore(store)
        .build();

      let state = store.getState();

      let intermediary = selectConsumptionForStint(state);

      let actual = intermediary.find(
        (element) => element.stintPercent == STINT_SEVENTY_PERCENT
      );

      expect(actual.consumption).toBe(7.0);
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and stint is [10] minutes " +
      "Then 80% race consumption is 8.0",
    () => {
      let storeConfigBuilder = new StoreConfigurationBuilder();

      storeConfigBuilder
        .withLaptimeMinutes(1)
        .withConsumption(1)
        .withFuelTankLiter(10)
        .withWouldBeStintDuration(10)
        .withStore(store)
        .build();

      let state = store.getState();

      let intermediary = selectConsumptionForStint(state);

      let actual = intermediary.find(
        (element) => element.stintPercent == STINT_EIGHTY_PERCENT
      );

      expect(actual.consumption).toBe(8.0);
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and stint is [10] minutes " +
      "Then 90% race consumption is 9.0",
    () => {
      let storeConfigBuilder = new StoreConfigurationBuilder();

      storeConfigBuilder
        .withLaptimeMinutes(1)
        .withConsumption(1)
        .withFuelTankLiter(10)
        .withStore(store)
        .build();

      let state = store.getState();

      let intermediary = selectConsumptionForStint(state);

      let actual = intermediary.find(
        (element) => element.stintPercent == STINT_NINETY_PERCENT
      );

      expect(actual.consumption).toBe(9.0);
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] liter " +
      "and stint is [10] minutes " +
      "Then 100% race consumption is 1.0",
    () => {
      let storeConfigBuilder = new StoreConfigurationBuilder();

      storeConfigBuilder
        .withLaptimeMinutes(1)
        .withConsumption(1)
        .withFuelTankLiter(10)
        .withWouldBeStintDuration(10)
        .withStore(store)
        .build();

      let state = store.getState();

      let intermediary = selectConsumptionForStint(state);

      let actual = intermediary.find(
        (element) => element.stintPercent == STINT_HUNDRED_PERCENT
      );

      expect(actual.consumption).toBe(10.0);
    }
  );
  test(
    "Given consumption is [0] " +
      "and laptime is [0] minutes " +
      "and laptime is [0] minutes " +
      "and fuelTankContent is [10] liter " +
      "and stint is [10] minutes " +
      "Then no data",
    () => {
      let storeConfigBuilder = new StoreConfigurationBuilder();

      storeConfigBuilder
        .withLaptimeMinutes(0)
        .withLapTimeSeconds(0)
        .withConsumption(1)
        .withFuelTankLiter(10)
        .withWouldBeStintDuration(10)
        .withStore(store)
        .build();

      let state = store.getState();

      let actual = selectConsumptionForStint(state);

      expect(actual.length).toBe(0);
    }
  );
});
