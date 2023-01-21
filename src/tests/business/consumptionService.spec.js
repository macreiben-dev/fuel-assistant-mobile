import { describe, expect, test } from "@jest/globals";
import { stintSetLiterPerLap } from "../../business/stintConsumptionService";

describe("Consumption service", () => {
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
