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

describe("Consumption - Lap Consumption Selectors - ", () => {
  describe("Stint duration - ", () => {
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

  describe("Previsional Lap - ", () => {
    test(
      "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 50% race previsionalLapCount is 5.0",
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

        expect(actual.previsionalLapCount).toBe(5.0);
      }
    );
    test(
      "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 60% race previsionalLapCount is 6.0",
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

        expect(actual.previsionalLapCount).toBe(6.0);
      }
    );
    test(
      "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 70% race previsionalLapCount is 7.0",
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

        expect(actual.previsionalLapCount).toBe(7.0);
      }
    );
    test(
      "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 80% race previsionalLapCount is 8.0",
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

        expect(actual.previsionalLapCount).toBe(8.0);
      }
    );
    test(
      "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 90% race previsionalLapCount is 9.0",
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

        expect(actual.previsionalLapCount).toBe(9.0);
      }
    );
    test(
      "Given consumption is [1] " +
      "and laptime is [1] minutes " +
      "and fuelTankContent is [10] " +
      "and stint is [10] minutes " +
      "Then 95% race previsionalLapCount is 9.5",
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

        expect(actual.previsionalLapCount).toBe(9.5);
      }
    );
  });

  describe("Consumption computing - ", () => {
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
  describe("F488 usecase", () => {
    test(
      "Given consumption is [2.77] " +
      "and laptime is [2:49] " +
      "and totalStintTime is [55] minutes " +
      "and fuelContent is [78] liter " +
      "Then 50% race consumption is [27.04]",
      () => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(2)
          .withLapTimeSeconds(49)
          .withConsumption(2.77)
          .withFuelTankLiter(78.0)
          .withWouldBeStintDuration(55)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          (element) => element.stintPercent == STINT_FIFTY_PERCENT
        );

        expect(actual.consumption).toBe(27.04);
      }
    );
    test(
      "Given consumption is [2.77] " +
      "and laptime is [2:49] " +
      "and totalStintTime is [55] minutes " +
      "and fuelContent is [78] liter " +
      "Then 60% race consumption is [32.45]",
      () => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(2)
          .withLapTimeSeconds(49)
          .withConsumption(2.77)
          .withFuelTankLiter(78.0)
          .withWouldBeStintDuration(55)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          (element) => element.stintPercent == STINT_SIXTY_PERCENT
        );

        expect(actual.consumption).toBe(32.45);
      }
    );
    test(
      "Given consumption is [2.77] " +
      "and laptime is [2:49] " +
      "and totalStintTime is [55] minutes " +
      "and fuelContent is [78] liter " +
      "Then 70% race consumption is [37.86]",
      () => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(2)
          .withLapTimeSeconds(49)
          .withConsumption(2.77)
          .withFuelTankLiter(78.0)
          .withWouldBeStintDuration(55)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          (element) => element.stintPercent == STINT_SEVENTY_PERCENT
        );

        expect(actual.consumption).toBe(37.86);
      }
    );
    test(
      "Given consumption is [2.77] " +
      "and laptime is [2:49] " +
      "and totalStintTime is [55] minutes " +
      "and fuelContent is [78] liter " +
      "Then 80% race consumption is [43.27]",
      () => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(2)
          .withLapTimeSeconds(49)
          .withConsumption(2.77)
          .withFuelTankLiter(78.0)
          .withWouldBeStintDuration(55)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          (element) => element.stintPercent == STINT_EIGHTY_PERCENT
        );

        expect(actual.consumption).toBe(43.27);
      }
    );
    test(
      "Given consumption is [2.77] " +
      "and laptime is [2:49] " +
      "and totalStintTime is [55] minutes " +
      "and fuelContent is [78] liter " +
      "Then 90% race consumption is [48.68]",
      () => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(2)
          .withLapTimeSeconds(49)
          .withConsumption(2.77)
          .withFuelTankLiter(78.0)
          .withWouldBeStintDuration(55)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          (element) => element.stintPercent == STINT_NINETY_PERCENT
        );

        expect(actual.consumption).toBe(48.67);
      }
    );
    test(
      "Given consumption is [2.77] " +
      "and laptime is [2:49] " +
      "and totalStintTime is [55] minutes " +
      "and fuelContent is [78] liter " +
      "Then 95% race consumption is [48.68]",
      () => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(2)
          .withLapTimeSeconds(49)
          .withConsumption(2.77)
          .withFuelTankLiter(78.0)
          .withWouldBeStintDuration(55)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          (element) => element.stintPercent == STINT_NINETYFIVE_PERCENT
        );

        expect(actual.consumption).toBe(51.38);
      }
    );
    test(
      "Given consumption is [2.77] " +
      "and laptime is [2:49] " +
      "and totalStintTime is [55] minutes " +
      "and fuelContent is [78] liter " +
      "Then 100% race consumption is [48.68]",
      () => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(2)
          .withLapTimeSeconds(49)
          .withConsumption(2.77)
          .withFuelTankLiter(78.0)
          .withWouldBeStintDuration(55)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          (element) => element.stintPercent == STINT_HUNDRED_PERCENT
        );

        expect(actual.consumption).toBe(54.08);
      }
    );
  });
});
