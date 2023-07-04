import { LAPTIME_SECONDS_UPDATE } from "../constants";

export function changeLaptimeSeconds(laptimeSeconds) {
    return {
        type: LAPTIME_SECONDS_UPDATE,
        payload: laptimeSeconds
    }
}
