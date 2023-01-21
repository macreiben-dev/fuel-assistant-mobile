import { LAPTIME_CONSUMPTION_UPDATE } from "../constants";

export function changeConsumption(consumptionLiterPerLap) {
  return {
    type: LAPTIME_CONSUMPTION_UPDATE,
    payload: consumptionLiterPerLap,
  };
}
