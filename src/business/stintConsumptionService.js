const setConsumption = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeConsumption(converter(input));
  }
};

export const stintSetLiterPerLap = setConsumption;
