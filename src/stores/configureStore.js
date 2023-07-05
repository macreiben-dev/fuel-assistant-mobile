import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import consumptionReducer from './consumption/reducers/laptimeReducer';

const rootReducer = combineReducers(
    { consumption: consumptionReducer }
);

const setupStore = () => {
    return configureStore({ reducer: rootReducer });
}

export default setupStore;