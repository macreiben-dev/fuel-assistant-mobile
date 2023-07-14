import * as React from 'react'
import { describe, test, expect, beforeEach } from "@jest/globals";

import { Provider } from 'react-redux';
import { View, Text } from "react-native";

import { render, screen, fireEvent } from '@testing-library/react-native';

import StintComponent from "../../components/StintComponent";
import setupStore from "../../stores/configureStore";

import { renderWithRedux } from "./test-utils"

// import React from 'react';
// import renderer from 'react-test-renderer';

require("setimmediate");

let store = undefined

beforeEach(() => {
    store = setupStore();
})

describe('CreateComponent', () => {

    test('should work with simple component.', () => {

        const component = (
            <View testID="text">
            </View>
        );

        render(component);
    })

    test('Should build stint component', () => {

        const initialState = {
            consumption: {
                laptimeMinutes: 0,
                laptimeSeconds: 0,
                consumptionLiterPerLap: 0.0,
                fuelTankLiter: 0,
                wouldBeStintDurationMinutes: 0
            }
        };

        renderWithRedux(<StintComponent />), { initialState: initialState };
    })
})