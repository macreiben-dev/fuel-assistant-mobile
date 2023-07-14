import * as React from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import { render } from '@testing-library/react-native';

import consumptionReducer from '../../stores/consumption/reducers/laptimeReducer'
// import configureStore from '../../stores/configureStore';

import consumptionInitialState from '../../stores/consumption/reducers/stintDetailsInitialState'

export function renderWithRedux(ui, options) {

    const rootReducer = combineReducers(
        { consumption: consumptionReducer }
    );

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: options?.initialState ? options.initialState : consumptionInitialState
    });
    const queries = render(<Provider store={store}>{ui}</Provider>);
    return { ...queries, store };
}