const setConsumption = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeConsumption(converter(input));
  }
};

const setFuelTankLiter = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeFuelTankLiter(converter(input));
  }
};

const setWouldBeStintDuration = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeWouldBeStintDuration(converter(input));
  }
};

export const stintSetLiterPerLap = setConsumption;
export const stintSetFuelTankLiter = setFuelTankLiter;
export const stintSetWouldBeStintDuration = setWouldBeStintDuration;
