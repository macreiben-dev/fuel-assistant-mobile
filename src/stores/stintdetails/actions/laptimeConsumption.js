import { LAPTIME_CONSUMPTION_UPDATE } from "../constants";

export function changeLaptimeMinutes(consumptionLiterPerLap) {
    return {
        type: LAPTIME_CONSUMPTION_UPDATE,
        payload: consumptionLiterPerLap
    }
}
