import { describe, expect } from "@jest/globals";

import { computePitWarning } from "../../../../../stores/consumption/selectors/lapConsumptions/computePitWarning";

describe("Parameter Sanitization", () => {
  test("GIVEN stintMaxLapCount is indefined THEN fail", () => {
    let actual = undefined;

    try {
      computePitWarning(undefined, 1);
    } catch (e) {
      actual = e;
    }
    expect(actual.message).toBe(
      'Argument [stintMaxLapCount] is invalid because "argument is undefined", received value is [undefined].'
    );
  });

  test("GIVEN executedLapCount is indefined THEN fail", () => {
    let actual = undefined;

    try {
      computePitWarning(1, undefined);
    } catch (e) {
      actual = e;
    }
    expect(actual.message).toBe(
      'Argument [executedLapCount] is invalid because "argument is undefined", received value is [undefined].'
    );
  });
});

describe("Pit warning is on", () => {
  const PIT_WARNING_ON = 1;

  it.each([
    [[5, 4], PIT_WARNING_ON],
    [[5, 3], PIT_WARNING_ON],
    [[5, 2], PIT_WARNING_ON],
    [[5, 1], PIT_WARNING_ON],
    [[35, 32], PIT_WARNING_ON],
    [[35, 31], PIT_WARNING_ON],
  ])(
    "GIVEN [stintMaxLapCount,executedLapCount] is %p THEN return %p",
    (numbers, result) => {
      let actual = computePitWarning(numbers[0], numbers[1]);
      expect(actual).toBe(result);
    }
  );

  it.each([
    [[5, 6], PIT_WARNING_ON],
    [[5, 7], PIT_WARNING_ON],
    [[5, 8], PIT_WARNING_ON],
  ])(
    "GIVEN [stintMaxLapCount,executedLapCount] is %p THEN return %p",
    (numbers, result) => {
      let actual = computePitWarning(numbers[0], numbers[1]);
      expect(actual).toBe(result);
    }
  );
});

describe("Pit warning is off", () => {
  const PIT_WARNING_OFF = 0;

  it.each([
    [[35, 22], PIT_WARNING_OFF],
    [[35, 23], PIT_WARNING_OFF],
    [[35, 24], PIT_WARNING_OFF],
    [[35, 25], PIT_WARNING_OFF],
  ])(
    "GIVEN [stintMaxLapCount,executedLapCount] is %p THEN return %p",
    (numbers, result) => {
      let actual = computePitWarning(numbers[0], numbers[1]);
      expect(actual).toBe(result);
    }
  );
});
