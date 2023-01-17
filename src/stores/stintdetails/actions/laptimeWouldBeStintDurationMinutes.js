import { LAPTIME_WOULDBE_STINT_DURATION } from "../constants";

export function changeStintDuration(durationMinutes) {
    return {
        type: LAPTIME_WOULDBE_STINT_DURATION,
        payload: durationMinutes
    }
}