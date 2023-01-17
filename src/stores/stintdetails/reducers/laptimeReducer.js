import { LAPTIME_MINUTES_UPDATE, LAPTIME_SECONDS_UPDATE } from '../constants';

const initialState = {
    laptimeMinutes: 0,
    laptimeSeconds: 0
};

const laptimeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LAPTIME_MINUTES_UPDATE:
            return {
                ...state,
                laptimeMinutes: action.payload
            };
        case LAPTIME_SECONDS_UPDATE:
            return {
                ...state,
                laptimeSeconds: action.payload
            }
        default:
            return state;
    }
}
export default laptimeReducer;