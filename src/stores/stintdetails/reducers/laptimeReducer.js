import {
  LAPTIME_WOULDBE_STINT_DURATION,
  LAPTIME_FUELTANK_CONTENT_UPDATE,
  LAPTIME_CONSUMPTION_UPDATE,
  LAPTIME_MINUTES_UPDATE,
  LAPTIME_SECONDS_UPDATE,
} from "../constants";

const initialState = {
  laptimeMinutes: 0,
  laptimeSeconds: 0,
  consumptionLiterPerLap: 0.0,
  fuelTankCapacityLiter: 0,
  wouldBeStintDurationMinutes: 0,
};

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
    case LAPTIME_CONSUMPTION_UPDATE:
      return {
        ...state,
        consumptionLiterPerLap: action.payload,
      };
    case LAPTIME_FUELTANK_CONTENT_UPDATE:
      return {
        ...state,
        fuelTankCapacityLiter: action.payload,
      };
    case LAPTIME_WOULDBE_STINT_DURATION:
      return {
        ...state,
        wouldBeStintDurationMinutes: action.payload,
      };
    default:
      return state;
  }
};
export default laptimeReducer;
