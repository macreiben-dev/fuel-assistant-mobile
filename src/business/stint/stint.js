import Lap from "./lap";

/**
 *
 * @param {Lap} lap
 * @param {number} durationAsSeconds
 * @returns
 */
const computeMaxLapExecutedForStintDuration = (lap, durationAsSeconds) => {
  if (lap == undefined) {
    return 0;
  }

  return durationAsSeconds / lap.laptimeAsSeconds();
};

class Stint {
  /**
   * Compute stint information
   *
   * @param {number} wouldBeStintDurationMinutes
   * @param {number} consumptionLiterPerLap
   * @param {Lap} lap
   */
  constructor(wouldBeStintDurationMinutes, consumptionLiterPerLap, lap) {
    const sanitizedWouldBeStintDurationMinutes =
      wouldBeStintDurationMinutes == undefined
        ? 0
        : wouldBeStintDurationMinutes;

    const stintDurationAsSeconds = sanitizedWouldBeStintDurationMinutes * 60;
    const consumption = consumptionLiterPerLap;

    const maxLapExecutedForStintDuration =
      computeMaxLapExecutedForStintDuration(lap, stintDurationAsSeconds);

    this.getDurationAsSeconds = () => stintDurationAsSeconds;
    this.getMaxExecutableLapsFromStintDuration = () =>
      maxLapExecutedForStintDuration;
    this.getConsumptionLiterPerLap = () => consumption;
  }
}

export default Stint;
