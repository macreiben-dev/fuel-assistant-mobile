import {
  describe,
  test,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
} from "@jest/globals";
import setupStore from "../../stores/stintdetails/configureStore";
import { STINT_CONSUMPTION_UPDATE } from "../../stores/stintdetails/constants";
import { changeConsumption } from "../../stores/stintdetails/actions/laptimeConsumption";

let store = undefined;
let unsubscribe = undefined;
beforeAll(() => {
  store = setupStore();
  unsubscribe = store.subscribe(() =>
    console.log("State after dispatch: ", store.getState())
  );
});

describe("Store - stint details", () => {
  describe("Store - Consumption", () => {
    test("Given action changeConsumption is used Then set store consumptionLiterPerLap", () => {
      let action = changeConsumption(6);

      store.dispatch(action);

      let actual = store.getState().stintDetails.consumptionLiterPerLap;

      console.log(store.getState());

      expect(actual).toBe(6);
    });
  });
});
