import { describe, expect, test } from "@jest/globals";
import {
  stintSetLiterPerLap,
  stintSetFuelTankLiter,
  stintSetWouldBeStintDuration,
} from "../../business/stintConsumptionService";

describe("Stint Consumption service", () => {
  describe("Consumption", () => {
    test("Given consumption is hello Then do not save to store.", () => {
      // ARRANGE
      let isStoreInvoked = false;

      var originalProps = {
        changeConsumption: (input) => {
          isStoreInvoked = true;
        },
      };

      var validator = (input) => {
        if (input == "hello") {
          return "Some error message";
        }

        return undefined;
      };

      // ACT
      stintSetLiterPerLap("hello", originalProps, undefined, validator);

      // ASSERT
      expect(isStoreInvoked).toBe(false);
    });
    test("Given consumption is 12 Then save to store.", () => {
      // ARRANGE
      let change = {
        actualInput: undefined,
        isStoreInvoked: false,
      };

      var originalProps = {
        changeConsumption: (input) => {
          change.actualInput = input;
          change.isStoreInvoked = true;
        },
      };

      var validator = (input) => {
        if (input == 12) {
          return undefined;
        }

        return "Some validation error message.";
      };

      var converter = (input) => {
        if (input == 12) {
          return 12;
        }
        return undefined;
      };

      // ACT
      stintSetLiterPerLap(12, originalProps, converter, validator);

      // ASSERT
      expect(change.isStoreInvoked).toBe(true);
    });
  });
  describe("Fuel tank liter", () => {
    test("Given fuelTankLiter is hello Then do not save to store.", () => {
      // ARRANGE
      let isStoreInvoked = false;

      var originalProps = {
        changefuelTankLiter: (input) => {
          isStoreInvoked = true;
        },
      };

      var validator = (input) => {
        if (input == "hello") {
          return "Some error message";
        }

        return undefined;
      };

      // ACT
      stintSetLiterPerLap("hello", originalProps, undefined, validator);

      // ASSERT
      expect(isStoreInvoked).toBe(false);
    });
    test("Given fuelTankLiter is 12 Then save to store.", () => {
      // ARRANGE
      let change = {
        actualInput: undefined,
        isStoreInvoked: false,
      };

      var originalProps = {
        changeFuelTankLiter: (input) => {
          change.actualInput = input;
          change.isStoreInvoked = true;
        },
      };

      var validator = (input) => {
        if (input == 12) {
          return undefined;
        }

        return "Some validation error message.";
      };

      var converter = (input) => {
        if (input == 12) {
          return 12;
        }
        return undefined;
      };

      // ACT
      stintSetFuelTankLiter(12, originalProps, converter, validator);

      // ASSERT
      expect(change.isStoreInvoked).toBe(true);
    });
  });
  describe("Stint Would Be Duration", () => {
    test("Given wouldBeStintDurationMinutes is hello Then do not save to store.", () => {
      // ARRANGE
      let isStoreInvoked = false;

      var originalProps = {
        changeWouldBeStintDuration: (input) => {
          isStoreInvoked = true;
        },
      };

      var validator = (input) => {
        if (input == "hello") {
          return "Some error message";
        }

        return undefined;
      };

      // ACT
      stintSetLiterPerLap("hello", originalProps, undefined, validator);

      // ASSERT
      expect(isStoreInvoked).toBe(false);
    });
    test("Given wouldBeStintDurationMinutes is 12 Then save to store.", () => {
      // ARRANGE
      let change = {
        actualInput: undefined,
        isStoreInvoked: false,
      };

      var originalProps = {
        changeWouldBeStintDuration: (input) => {
          change.actualInput = input;
          change.isStoreInvoked = true;
        },
      };

      var validator = (input) => {
        if (input == 12) {
          return undefined;
        }

        return "Some validation error message.";
      };

      var converter = (input) => {
        if (input == 12) {
          return 12;
        }
        return undefined;
      };

      // ACT
      stintSetWouldBeStintDuration(12, originalProps, converter, validator);

      // ASSERT
      expect(change.isStoreInvoked).toBe(true);
    });
  });
});
