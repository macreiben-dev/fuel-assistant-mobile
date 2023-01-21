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
});
