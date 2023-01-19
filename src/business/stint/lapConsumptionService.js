const lapConsumption = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeLapConsumption(converter(input));
  }
};

const lapFuelTankContent = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeFuelTankContent(converter(input));
  }
};

export const lapConsumptionService = lapConsumption;
export const lapFuelTankContentService = lapFuelTankContent;
