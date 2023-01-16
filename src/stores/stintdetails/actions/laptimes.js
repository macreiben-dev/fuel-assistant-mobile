import { LAPTIME_MINUTE_UPDATE } from "../constants";

export function changeLaptimeMinute(laptimeMinute) {
    return {
        type: LAPTIME_MINUTE_UPDATE,
        payload: laptimeMinute
    }
}
