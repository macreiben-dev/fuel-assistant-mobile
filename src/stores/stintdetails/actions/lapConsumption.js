import { LAPTIME_CONSUMPTION_UPDATE } from "../constants";

export function changeLapConsumption(consumptionLiterPerLap) {
    return {
        type: LAPTIME_CONSUMPTION_UPDATE,
        payload: consumptionLiterPerLap
    }
}
