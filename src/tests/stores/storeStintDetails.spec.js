import {
  describe,
  test,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
} from "@jest/globals";
import setupStore from "../../stores/stintdetails/configureStore";
import { changeConsumption } from "../../stores/stintdetails/actions/laptimeConsumption";
import { changefuelTankLiter } from "../../stores/stintdetails/actions/laptimeFuelTank";

let store = undefined;

beforeEach(() => {
  store = setupStore();
});

describe("Store - stint details", () => {
  test("Given action changeConsumption is used Then set store consumptionLiterPerLap", () => {
    let action = changeConsumption(6);

    store.dispatch(action);

    let actual = store.getState().stintDetails.consumptionLiterPerLap;

    console.log(store.getState());

    expect(actual).toBe(6);
  });

  test("Given action fuelTankLiter is used Then set fuelTankLiter", () => {
    let action = changefuelTankLiter(6);

    store.dispatch(action);

    let actual = store.getState().stintDetails.fuelTankLiter;

    console.log(store.getState());

    expect(actual).toBe(6);
  });
});
