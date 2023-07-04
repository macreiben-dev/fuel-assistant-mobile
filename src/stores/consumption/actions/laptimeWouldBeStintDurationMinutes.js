import { WOULDBE_STINT_DURATION_UPDATE } from "../constants";

export function changeWouldBeStintDuration(durationMinutes) {
  return {
    type: WOULDBE_STINT_DURATION_UPDATE,
    payload: durationMinutes,
  };
}
