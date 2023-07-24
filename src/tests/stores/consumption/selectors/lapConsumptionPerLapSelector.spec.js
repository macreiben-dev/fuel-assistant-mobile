import { describe, expect, test } from "@jest/globals";

import setupStore from "../../../../stores/configureStore";
import StoreConfigurationBuilder from "../../helpers/storeConfigurationBuilder";

import { computeConsumptionPerLapSelector } from "../../../../stores/consumption/selectors/lapConsumptionPerLapSelector";

let store = undefined;

const initializeStore = () => {
  let storeConfigBuilder = new StoreConfigurationBuilder();

  storeConfigBuilder
    .withLaptimeMinutes(1)
    .withConsumption(1)
    .withFuelTankLiter(10)
    .withWouldBeStintDuration(10)
    .withStore(store)
    .build();
};

beforeEach(() => {
  store = setupStore();
});

describe("Consumption computing", () => {
  describe(
    "GIVEN consumption is [1] " +
      "AND laptime is [1] minutes " +
      "AND fuelTankContent is [10] " +
      "AND stint is [10] minutes ",
    () => {
      it.each([
        [[1.0], 1.0],
        [[2.0], 2.0],
        [[3.0], 3.0],
        [[4.0], 4.0],
        [[5.0], 5.0],
        [[6.0], 6.0],
        [[7.0], 7.0],
        [[8.0], 8.0],
        [[9.0], 9.0],
        [[10.0], 10.0],
      ])(
        "AND [currentLap] is [%p] THEN expected consumption is %p",
        (args, result) => {
          initializeStore();

          let state = store.getState();

          let intermediary = computeConsumptionPerLapSelector(state);

          let actual = intermediary.find(
            (element) => element.executedLapCount == args[0]
          );

          expect(actual.consumption).toBe(result);
        }
      );
    }
  );
});
describe("Stint percent computing", () => {
  describe(
    "GIVEN consumption is [1] " +
      "AND laptime is [1] minutes " +
      "AND fuelTankContent is [10] " +
      "AND stint is [10] minutes ",
    () => {
      it.each([
        [[1.0], 0.1],
        [[2.0], 0.2],
        [[3.0], 0.3],
        [[4.0], 0.4],
        [[5.0], 0.5],
        [[6.0], 0.6],
        [[7.0], 0.7],
        [[8.0], 0.8],
        [[9.0], 0.9],
        [[10.0], 1],
      ])(
        "AND [currentLap] is [%p] THEN expected stintPercent is %p",
        (args, result) => {
          initializeStore();

          let state = store.getState();

          let intermediary = computeConsumptionPerLapSelector(state);

          let actual = intermediary.find(
            (element) => element.executedLapCount == args[0]
          );

          expect(actual.stintPercent).toBe(result);
        }
      );
    }
  );
});
