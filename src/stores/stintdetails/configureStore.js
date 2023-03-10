import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import laptimeReducer from './reducers/laptimeReducer';

const rootReducer = combineReducers(
    { stintDetails : laptimeReducer }
);

const setupStore = () => {
    return configureStore({ reducer: rootReducer });
}

export default setupStore;