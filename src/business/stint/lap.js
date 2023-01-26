const SECONDS_IN_ONE_MINUTE = 60.0;

class Lap {
  /**
   *  Initializes a lap from time related information.
   *
   * @param {number} laptimeSeconds
   * @param {number} laptimeMinutes
   */
  constructor(laptimeMinutes, laptimeSeconds) {
    this.laptimeMinutes = laptimeMinutes;
    this.laptimeSeconds = laptimeSeconds;
  }

  /**
   * Determine whether the laptime is zero for minutes and seconds.
   *
   * @returns boolean
   */
  isLaptimeZero() {
    return this.laptimeMinutes == 0 && this.laptimeSeconds == 0;
  }

  /**
   * From given laptime and seconds, returns converted value in seconds.
   * @returns number
   */
  laptimeAsSeconds() {
    let rebaseLaptimeSeconds = this.laptimeMinutes * SECONDS_IN_ONE_MINUTE;

    let laptimeConvertedInSeconds = rebaseLaptimeSeconds + this.laptimeSeconds;

    return laptimeConvertedInSeconds;
  }
}

export default Lap;
