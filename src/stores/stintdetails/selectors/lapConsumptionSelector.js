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

const truncatedTwoDecimals = (consumption) => {
  return Math.trunc(consumption * 100) / 100;
};

const laptimeAsSeconds = (laptimeMinutes, laptimeSeconds) => {
  let rebaseLaptimeSeconds = laptimeMinutes * SECONDS_IN_ONE_MINUTE;

  let laptimeConvertedInSeconds = rebaseLaptimeSeconds + laptimeSeconds;

  return laptimeConvertedInSeconds;
};

const stintTimeAsSeconds = (wouldBeStintDurationMinutes) => {
  return wouldBeStintDurationMinutes * SECONDS_IN_ONE_MINUTE;
};

const compute = (
  percent,
  totalTimeSeconds,
  laptimeSeconds,
  consumptionLiterPerLap
) => {
  let stintRatio = percent * totalTimeSeconds;

  let lapCount = stintRatio / laptimeSeconds;

  let consumption = lapCount * consumptionLiterPerLap;

  return truncatedTwoDecimals(consumption);
};

const computeConsumption = (state) => {
  let localState = state.stintDetails;

  if (localState.laptimeMinutes == 0 && localState.laptimeSeconds == 0) {
    return [];
  }

  let laptimeSeconds = laptimeAsSeconds(
    localState.laptimeMinutes,
    localState.laptimeSeconds
  );

  let stintTotalTimeSeconds = stintTimeAsSeconds(
    localState.wouldBeStintDurationMinutes
  );

  let output = [];

  percentOfStint.forEach((stintPercent) => {
    let computedConsumption = compute(
      stintPercent,
      stintTotalTimeSeconds,
      laptimeSeconds,
      localState.consumptionLiterPerLap
    );

    output.push({
      stintPercent: stintPercent,
      consumption: computedConsumption,
    });
  });

  return output;
};

export const selectConsumptionForStint = computeConsumption;
