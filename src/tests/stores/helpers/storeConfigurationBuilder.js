import {
  fuelTankLiterUpdate,
  laptimeMinuteUpdate,
  laptimeSecondsUpdate,
  wouldBeStintDurationMinutesUpdate,
  consumptionLiterPerLapUpdate,
} from "../../../stores/consumption/reducers/laptimeSlice";

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
          action: consumptionLiterPerLapUpdate,
          payload: storeCtxt.consumption,
        },
        {
          action: fuelTankLiterUpdate,
          payload: storeCtxt.fuelTankLiter,
        },
        {
          action: laptimeMinuteUpdate,
          payload: storeCtxt.laptimeMinutes,
        },
        {
          action: laptimeSecondsUpdate,
          payload: storeCtxt.lapTimeSeconds,
        },
        {
          action: wouldBeStintDurationMinutesUpdate,
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
