import {
  WOULDBE_STINT_DURATION_UPDATE,
  FUELTANK_LITER_UPDATE,
  STINT_CONSUMPTION_UPDATE,
  LAPTIME_MINUTES_UPDATE,
  LAPTIME_SECONDS_UPDATE,
} from "../constants";

import { initialState } from "./stintDetailsInitialState";

const laptimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAPTIME_MINUTES_UPDATE:
      return {
        ...state,
        laptimeMinutes: action.payload,
      };
    case LAPTIME_SECONDS_UPDATE:
      return {
        ...state,
        laptimeSeconds: action.payload,
      };
    case STINT_CONSUMPTION_UPDATE:
      return {
        ...state,
        consumptionLiterPerLap: action.payload,
      };
    case FUELTANK_LITER_UPDATE:
      return {
        ...state,
        fuelTankLiter: action.payload,
      };
    case WOULDBE_STINT_DURATION_UPDATE:
      return {
        ...state,
        wouldBeStintDurationMinutes: action.payload,
      };
    default:
      return state;
  }
};
export default laptimeReducer;
