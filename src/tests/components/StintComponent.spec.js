import { describe, test, expect, beforeEach } from "@jest/globals";

jest.useFakeTimers();

import { Provider } from "react-redux";

import { render, screen, waitFor } from "@testing-library/react-native";

import StintComponent from "../../components/StintComponent";
import setupStore from "../../stores/configureStore";

import DummyComponent from "../../components/DummyComponent";

import renderer from "react-test-renderer";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("CreateComponent", () => {
  test("Create dummy component", () => {
    let actual = renderer.create(<DummyComponent />).toJSON();
    expect(actual).toMatchSnapshot();
  });

  test("Should build stint component", () => {
    let actual = renderer
      .create(
        <Provider store={store}>
          <StintComponent />
        </Provider>
      )
      .toJSON();

    expect(actual).toMatchSnapshot();
  });
});
