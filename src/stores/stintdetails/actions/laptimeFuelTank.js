import { FUELTANK_LITER_UPDATE } from "../constants";

export function changefuelTankLiter(fuelTankLiter) {
  return {
    type: FUELTANK_LITER_UPDATE,
    payload: fuelTankLiter,
  };
}
