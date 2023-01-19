const stintDuration = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeStintDuration(converter(input));
  }
};

export const stintDurationService = stintDuration;
