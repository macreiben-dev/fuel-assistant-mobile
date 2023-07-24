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

describe("Lap Consumption Selectors", () => {
  describe("F488 usecase", () => {
    describe(
      "Given consumption is [2.77] " +
        "and laptime is [2:49] " +
        "and totalStintTime is [55] minutes " +
        "and fuelContent is [78] liter ",
      () => {
        it.each([
          [[STINT_FIFTY_PERCENT], 27.04],
          [[STINT_SIXTY_PERCENT], 32.45],
          [[STINT_SEVENTY_PERCENT], 37.86],
          [[STINT_EIGHTY_PERCENT], 43.27],
          [[STINT_NINETY_PERCENT], 48.67],
          [[STINT_NINETYFIVE_PERCENT], 51.38],
          [[STINT_HUNDRED_PERCENT], 54.08],
        ])(
          "AND [percentRaceProgression] is %p THEN race consumption is %p",
          (args, result) => {
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
              (element) => element.stintPercent == args[0]
            );

            expect(actual.consumption).toBe(result);
          }
        );
      }
    );
  });
});
