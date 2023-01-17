import { LAPTIME_MINUTES_UPDATE } from "../constants";

export function changeLaptimeMinutes(laptimeMinute) {
    return {
        type: LAPTIME_MINUTES_UPDATE,
        payload: laptimeMinutes
    }
}
