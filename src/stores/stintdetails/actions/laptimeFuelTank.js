import { LAPTIME_FUELTANK_CONTENT_UPDATE } from "../constants";

export function changeFuelTankContent(fuelTankLiter) {
  return {
    type: LAPTIME_FUELTANK_CONTENT_UPDATE,
    payload: fuelTankLiter,
  };
}
