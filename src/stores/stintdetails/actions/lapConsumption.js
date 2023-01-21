import { STINT_CONSUMPTION_UPDATE } from "../constants";

export function changeConsumption(consumptionLiterPerLap) {
  return {
    type: STINT_CONSUMPTION_UPDATE,
    payload: consumptionLiterPerLap,
  };
}
