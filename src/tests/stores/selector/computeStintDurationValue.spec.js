import { describe, expect } from "@jest/globals";
import computeStintDurationValue from "../../../stores/stintdetails/selectors/computeStintDurationValue";

describe("Compute stint duration value", () => {
  describe("compute seconds", () => {
    test("Given decimal second value Then should not return decimal part in duration", () => {
      const stintPercent = 0.7;
      const totalStintDurationAsSeconds = 3 * 60;

      const actual = computeStintDurationValue(
        totalStintDurationAsSeconds,
        stintPercent
      );

      expect(actual).toBe("00:02:05");
    });
  });
});
