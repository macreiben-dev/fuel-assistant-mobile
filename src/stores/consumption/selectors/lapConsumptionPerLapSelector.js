import Lap from "../../../business/stint/lap";
import Stint from "../../../business/stint/stint";

const compute = (state) => {
  let localState = state.stintDetails;

  let lap = new Lap(localState.laptimeMinutes, localState.laptimeSeconds);

  if (lap.isLaptimeZero() || localState.wouldBeStintDurationMinutes == 0) {
    return [];
  }

  const stint = new Stint(
    localState.wouldBeStintDurationMinutes,
    localState.consumptionLiterPerLap,
    lap
  );

  let output = [];

  for (
    let executedLap = 1;
    executedLap <= stint.getMaxExecutableLapsTimeBased();
    executedLap++
  ) {
    let oneLap = {
      stintPercent: executedLap / stint.getMaxExecutableLapsTimeBased(),
      consumption: executedLap * stint.getConsumptionLiterPerLap(),
      executedLapCount: executedLap,
    };

    output.push(oneLap);
  }

  return output;
};

export const computeConsumptionPerLapSelector = compute;
