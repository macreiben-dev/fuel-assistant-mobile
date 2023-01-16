import { LAPTIME_MINUTE_UPDATE } from '../constants';

const initialState = {
    laptimeMinute: 0
};

const laptimeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LAPTIME_MINUTE_UPDATE:
            return {
            ...state,
            count:action.payload
            };
        default:
            return state;
    }
}
export default laptimeReducer;