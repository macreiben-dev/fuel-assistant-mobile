import { changeConsumption } from "../../../stores/stintdetails/actions/lapConsumption";
import { changeFuelTankLiter } from "../../../stores/stintdetails/actions/laptimeFuelTank";
import { changeLaptimeMinutes } from "../../../stores/stintdetails/actions/laptimeMinute";
import { changeLaptimeSeconds } from "../../../stores/stintdetails/actions/laptimeSecond";
import { changeWouldBeStintDuration } from "../../../stores/stintdetails/actions/laptimeWouldBeStintDurationMinutes";

let storeCtxt = {
  store: undefined,
  consumption: undefined,
  fuelTankLiter: undefined,
  laptimeMinutes: undefined,
  lapTimeSeconds: undefined,
  wouldBeStintDuration: undefined,
};

export default class StoreConfigurationBuilder {
  constructor() {
    this.withStore = function (store) {
      if (store == undefined) {
        throw Error("cannot have undefined store");
      }

      storeCtxt.store = store;
      return this;
    };

    this.withConsumption = function (data) {
      storeCtxt.consumption = data;
      return this;
    };
    this.withFuelTankLiter = function (data) {
      storeCtxt.fuelTankLiter = data;
      return this;
    };
    this.withLaptimeMinutes = function (data) {
      storeCtxt.laptimeMinutes = data;
      return this;
    };
    this.withLapTimeSeconds = function (data) {
      storeCtxt.lapTimeSeconds = data;
      return this;
    };
    this.withWouldBeStintDuration = function (data) {
      storeCtxt.wouldBeStintDuration = data;
      return this;
    };

    this.build = function () {
      let instructionToBuild = [
        {
          action: changeConsumption,
          payload: storeCtxt.consumption,
        },
        {
          action: changeFuelTankLiter,
          payload: storeCtxt.fuelTankLiter,
        },
        {
          action: changeLaptimeMinutes,
          payload: storeCtxt.laptimeMinutes,
        },
        {
          action: changeLaptimeSeconds,
          payload: storeCtxt.lapTimeSeconds,
        },
        {
          action: changeWouldBeStintDuration,
          payload: storeCtxt.wouldBeStintDuration,
        },
      ];

      instructionToBuild.forEach((element) => {
        if (element.payload != undefined) {
          storeCtxt.store.dispatch(element.action(element.payload));
        }
      });
    };
  }
}
