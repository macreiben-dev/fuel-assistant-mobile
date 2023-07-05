import {
    DRIVERSWAP_TIME_UPDATE,
    ONE_STINT_ADD,
    ONE_STINT_UPDATE
} from "../constants"

import { initialState } from "./stintDetailsInitialState"

const stintDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case DRIVERSWAP_TIME_UPDATE:
            // TODO;
            return {
                ...state
            };

        case ONE_STINT_UPDATE:
            // TODO 
            return {
                ...state,
            };

        case ONE_STINT_ADD:
            // TODO
            return {
                ...state
            };
    }
}