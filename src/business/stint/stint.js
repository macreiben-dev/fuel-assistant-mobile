import Lap from "./lap";

class Stint {
  /**
   * Compute stint information
   *
   * @param {number} wouldBeStintDurationMinutes
   * @param {number} consumptionLiterPerLap
   * @param {Lap} lap
   */
  constructor(wouldBeStintDurationMinutes, consumptionLiterPerLap, lap) {
    const durationAsSeconds = wouldBeStintDurationMinutes * 60;
    const consumption = consumptionLiterPerLap;

    const maxLapExecutedForStintDuration =
      durationAsSeconds / lap.laptimeAsSeconds();

    this.getDurationAsSeconds = () => this.durationAsSeconds;
    this.getMaxExecutableLapsFromStintDuration = () =>
      maxLapExecutedForStintDuration;
    this.getConsumptionLiterPerLap = () => consumption;
  }
}

export default Stint;
