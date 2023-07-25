import { describe, expect, test } from "@jest/globals";

import Lap from "../../../business/stint/lap";
import Stint from "../../../business/stint/stint";

describe("Constructor Sanitization", () => {
  test("GIVEN wouldBeStintDurationMinutes is undefined THEN durationAsSeconds IS 0", () => {
    let target = new Stint(undefined, 1.0, new Lap(1.0, 0.0));

    expect(target.getDurationAsSeconds()).toBe(0);
  });
  test("GIVEN consumptionLiterPerLap is undefined THEN consumptionLiterPerLap IS 0", () => {
    let target = new Stint(1.0, 0.0, new Lap(1, 0));

    expect(target.getConsumptionLiterPerLap()).toBe(0);
  });
  test("GIVEN lap is undefined THEN maxLapExecutedForStintDuration IS 0", () => {
    let target = new Stint(1.0, 0.0, undefined);

    expect(target.getMaxExecutableLapsFromStintDuration()).toBe(0);
  });
});
