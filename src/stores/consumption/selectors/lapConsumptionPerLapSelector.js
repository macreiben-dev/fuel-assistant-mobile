import Lap from "../../../business/stint/lap";

const compute = (state) => {
  let localState = state.stintDetails;

  let lap = new Lap(localState.laptimeMinutes, localState.laptimeSeconds);

  if (lap.isLaptimeZero() || localState.wouldBeStintDurationMinutes == 0) {
    return [];
  }

  // TODO move this to a stint class
  const stintDurationInMinute = localState.wouldBeStintDurationMinutes;
  const consumptionPerLap = localState.consumptionLiterPerLap;

  const durationAsSeconds = stintDurationInMinute * 60;

  const maxLapExecutedForStintDuration =
    durationAsSeconds / lap.laptimeAsSeconds();

  let output = [];

  for (
    let executedLap = 1;
    executedLap <= maxLapExecutedForStintDuration;
    executedLap++
  ) {
    let oneLap = {
      stintPercent: executedLap / maxLapExecutedForStintDuration,
      consumption: executedLap * consumptionPerLap,
      executedLapCount: executedLap,
    };

    output.push(oneLap);
  }

  return output;
};

export const computeConsumptionPerLapSelector = compute;
