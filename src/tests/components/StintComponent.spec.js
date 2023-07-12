import { describe, test, expect, beforeEach } from "@jest/globals";

import { Provider } from 'react-redux';
import { View, Text } from "react-native";

import StintComponent from "../../components/StintComponent";
import setupStore from "../../stores/configureStore";

import React from 'react';
import renderer from 'react-test-renderer';


let store = undefined

beforeEach(() => {
    store = setupStore();
})

describe('CreateComponent', () => {

    test('should work', () => {

        const component = (
            <View testID="text">
            </View>
        );

        // let screen = render(component);

        // expect(screen.getByTestId('text'))

        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('Should build stint component', () => {

        const component = (
            <Provider store={store}>
                <StintComponent />
            </Provider>
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    })
})