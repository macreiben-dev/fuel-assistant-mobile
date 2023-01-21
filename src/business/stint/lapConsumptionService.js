const setConsumption = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeConsumption(converter(input));
  }
};

const setFuelTankContent = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeFuelTankLiter(converter(input));
  }
};

export const stintSetLiterPerLap = setConsumption;
export const stintSetFuelTankLiter = setFuelTankContent;
