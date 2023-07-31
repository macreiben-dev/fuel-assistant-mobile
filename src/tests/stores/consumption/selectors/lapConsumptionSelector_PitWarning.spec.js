import { describe, expect, test } from "@jest/globals";

import setupStore from "../../../../stores/configureStore";
import StoreConfigurationBuilder from "../../helpers/storeConfigurationBuilder";

import { selectConsumptionForStint } from "../../../../stores/consumption/selectors/lapConsumptionSelector";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});
describe("Pitwarning alert", () => {
  const PIT_WARNING_ON = 1;
  const PIT_WARNING_OFF = 0;

  describe(
    "GIVEN laptime minutes is 1 " +
      "AND laptime seconds is 0 " +
      "AND consumption per lap is 2 liter per lap " +
      "AND fuelTank is 20 liter " +
      "AND stint duration is 10 minutes ",
    () => {
      it.each([
        [[10], PIT_WARNING_OFF],
        [[12], PIT_WARNING_ON],
        [[14], PIT_WARNING_ON],
        [[16], PIT_WARNING_ON],
      ])("AND [consumption] %p THEN pitwarning is %p", (args, result) => {
        let storeConfigBuilder = new StoreConfigurationBuilder();

        storeConfigBuilder
          .withLaptimeMinutes(1)
          .withLapTimeSeconds(0)
          .withConsumption(2)
          .withFuelTankLiter(20)
          .withWouldBeStintDuration(10)
          .withStore(store)
          .build();

        let state = store.getState();

        let intermediary = selectConsumptionForStint(state);

        let actual = intermediary.find(
          // TODO Add the assertion here.
          (element) => element.consumption == args[0]
        );

        expect(actual.pitwarning).toBe(result);
      });
    }
  );
  describe(
    "GIVEN laptime minutes is 0 " +
      "AND laptime seconds is 30 " +
      "AND consumption per lap is 2 liter per lap " +
      "AND fuelTank is 20 liter " +
      "AND stint duration is 10 minutes ",
    () => {
      it.each([
        [[12], PIT_WARNING_ON],
        [[14], PIT_WARNING_ON],
        [[16], PIT_WARNING_ON],
        [[18], PIT_WARNING_ON],
        [[19], PIT_WARNING_ON],
        [[20], PIT_WARNING_ON],
      ])(
        "AND [executeLapCount] is %p THEN pitWarning is %p ",
        (args, result) => {
          let storeConfigBuilder = new StoreConfigurationBuilder();

          storeConfigBuilder
            .withLaptimeMinutes(0)
            .withLapTimeSeconds(30)
            .withConsumption(2)
            .withFuelTankLiter(20)
            .withWouldBeStintDuration(10)
            .withStore(store)
            .build();

          let state = store.getState();

          let intermediary = selectConsumptionForStint(state);

          let valueSelector = args[0];

          let actual = intermediary.find(
            (element) => element.executedLapCount == valueSelector
          );

          expect(actual.pitwarning).toBe(result);
        }
      );
    }
  );
});
