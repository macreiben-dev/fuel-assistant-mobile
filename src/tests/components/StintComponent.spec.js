import { describe, test, expect, beforeEach } from "@jest/globals";
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react-native';

import StintComponent from "../../components/StintComponent";
import setupStore from "../../stores/configureStore";

let store = undefined

beforeEach(() => {
    store = setupStore();
})

describe('CreateComponent', () => {
    test('Should build stint component', () => {
        render(
            <Provider store={store}>
                <StintComponent />
            </Provider>
        )
    })
})