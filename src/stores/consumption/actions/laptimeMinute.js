import { LAPTIME_MINUTES_UPDATE } from "../constants";

export function changeLaptimeMinutes(laptimeMinutes) {
    return {
        type: LAPTIME_MINUTES_UPDATE,
        payload: laptimeMinutes
    }
}
