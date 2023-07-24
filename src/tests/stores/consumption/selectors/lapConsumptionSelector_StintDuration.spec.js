import { describe, expect, test } from "@jest/globals";

import setupStore from "../../../../stores/configureStore";
import StoreConfigurationBuilder from "../../helpers/storeConfigurationBuilder";

import { selectConsumptionForStint } from "../../../../stores/consumption/selectors/lapConsumptionSelector";

let store = undefined;

const STINT_FIFTY_PERCENT = 0.5;
const STINT_SIXTY_PERCENT = 0.6;
const STINT_SEVENTY_PERCENT = 0.7;
const STINT_EIGHTY_PERCENT = 0.8;
const STINT_NINETY_PERCENT = 0.9;
const STINT_NINETYFIVE_PERCENT = 0.95;
const STINT_HUNDRED_PERCENT = 1.0;

beforeEach(() => {
  store = setupStore();
});

describe("Stint duration", () => {
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 50% race stintDuration is 00:05:00",
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

      expect(actual.stintDuration).toBe("00:05:00");
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 60% race stintDuration is 00:06:00",
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

      expect(actual.stintDuration).toBe("00:06:00");
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 70% race stintDuration is 00:07:00",
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

      expect(actual.stintDuration).toBe("00:07:00");
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 80% race stintDuration is 00:08:00",
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

      expect(actual.stintDuration).toBe("00:08:00");
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 90% race stintDuration is 00:09:00",
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
        (element) => element.stintPercent == STINT_NINETY_PERCENT
      );

      expect(actual.stintDuration).toBe("00:09:00");
    }
  );
  test(
    "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 95% race stintDuration is 00:09:30",
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
        (element) => element.stintPercent == STINT_NINETYFIVE_PERCENT
      );

      expect(actual.stintDuration).toBe("00:09:30");
    }
  );
});
