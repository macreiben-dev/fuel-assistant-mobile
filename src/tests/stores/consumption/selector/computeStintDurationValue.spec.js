import { describe, expect, test } from "@jest/globals";

import computeStintDurationValue from "../../../../stores/consumption/selectors/computeStintDurationValue";

describe("Consumption - Compute stint duration value", () => {
  test("Given decimal second value Then should not return decimal part in duration", () => {
    const stintPercent = 1;
    const totalStintDurationAsSeconds = 2 * 60 + 5;

    const actual = computeStintDurationValue(
      totalStintDurationAsSeconds,
      stintPercent
    );

    expect(actual).toBe("00:02:05");
  });

  test("Given a 1h15 in as totalStintDuration Then display 01:15:00", () => {
    const stintPercent = 1;
    const quarterOfAnHourAsSeconds = 15 * 60;
    const oneHourAsSeconds = 60 * 60;
    const totalStintDurationAsSeconds =
      oneHourAsSeconds + quarterOfAnHourAsSeconds;

    const actual = computeStintDurationValue(
      totalStintDurationAsSeconds,
      stintPercent
    );

    expect(actual).toBe("01:15:00");
  });
});

