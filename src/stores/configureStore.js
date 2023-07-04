import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import laptimeReducer from './consumption/reducers/laptimeReducer';

const rootReducer = combineReducers(
    { stintDetails: laptimeReducer }
);

const setupStore = () => {
    return configureStore({ reducer: rootReducer });
}

export default setupStore;