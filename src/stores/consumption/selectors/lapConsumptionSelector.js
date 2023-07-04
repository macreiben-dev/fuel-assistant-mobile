import Lap from "../../../business/stint/lap";
import computeStintDurationValue from "./computeStintDurationValue";

const SECONDS_IN_ONE_MINUTE = 60.0;

const STINT_FIFTY_PERCENT = 0.5;
const STINT_SIXTY_PERCENT = 0.6;
const STINT_SEVENTY_PERCENT = 0.7;
const STINT_EIGHTY_PERCENT = 0.8;
const STINT_NINETY_PERCENT = 0.9;
const STINT_NINETYFIVE_PERCENT = 0.95;
const STINT_HUNDRED_PERCENT = 1.0;

const percentOfStint = [
  STINT_FIFTY_PERCENT,
  STINT_SIXTY_PERCENT,
  STINT_SEVENTY_PERCENT,
  STINT_EIGHTY_PERCENT,
  STINT_NINETY_PERCENT,
  STINT_NINETYFIVE_PERCENT,
  STINT_HUNDRED_PERCENT,
];

const computeConsumption = (state) => {
  let localState = state.stintDetails;

  let lap = new Lap(localState.laptimeMinutes, localState.laptimeSeconds);

  if (lap.isLaptimeZero() || localState.wouldBeStintDurationMinutes == 0) {
    return [];
  }

  let laptimeSeconds = lap.laptimeAsSeconds();

  let stintTotalTimeSeconds = stintTimeAsSeconds(
    localState.wouldBeStintDurationMinutes
  );

  let output = [];

  percentOfStint.forEach((stintPercent) => {
    let computedConsumption = computeConsumptionValue(
      stintPercent,
      stintTotalTimeSeconds,
      laptimeSeconds,
      localState.consumptionLiterPerLap
    );

    let previsionalLapCount = computePrevisionalLapCountValue(
      stintPercent,
      stintTotalTimeSeconds,
      laptimeSeconds
    );

    let stintDuration = computeStintDurationValue(
      stintTotalTimeSeconds,
      stintPercent
    );

    output.push({
      stintPercent: stintPercent,
      consumption: computedConsumption,
      previsionalLapCount: previsionalLapCount,
      stintDuration: stintDuration,
    });
  });

  return output;
};

const truncateTwoDecimals = (consumption) => {
  return Math.trunc(consumption * 100) / 100;
};

const stintTimeAsSeconds = (wouldBeStintDurationMinutes) => {
  return wouldBeStintDurationMinutes * SECONDS_IN_ONE_MINUTE;
};

const computeConsumptionValue = (
  percent,
  totalTimeSeconds,
  laptimeSeconds,
  consumptionLiterPerLap
) => {
  let stintRatio = percent * totalTimeSeconds;

  let lapCount = stintRatio / laptimeSeconds;

  let consumption = lapCount * consumptionLiterPerLap;

  return truncateTwoDecimals(consumption);
};

const computePrevisionalLapCountValue = (
  percent,
  totalTimeSeconds,
  laptimeSeconds
) => {
  let intermediary = (totalTimeSeconds * percent) / laptimeSeconds;

  return truncateTwoDecimals(intermediary);
};

export const selectConsumptionForStint = computeConsumption;
