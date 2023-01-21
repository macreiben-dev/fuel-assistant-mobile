const laptimeStintMinutes = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeLaptimeMinutes(converter(input));
  }
};

const laptimeStintSeconds = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeLaptimeSeconds(converter(input));
  }
};

const setWouldBeStintDuration = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeWouldBeStintDuration(converter(input));
  }
};

export const stintServiceLaptimeMinutes = laptimeStintMinutes;
export const stintServiceLaptimeSeconds = laptimeStintSeconds;
export const stintServiceSetWouldBeStintDuraction = setWouldBeStintDuration;
