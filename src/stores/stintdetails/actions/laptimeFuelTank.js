import { LAPTIME_FUELTANK_CAPACITY_UPDATE } from "../constants";

export function changeFuelTankCapacity(fuelTankLiter) {
    return {
        type: LAPTIME_FUELTANK_CAPACITY_UPDATE,
        payload: fuelTankLiter
    }
}
