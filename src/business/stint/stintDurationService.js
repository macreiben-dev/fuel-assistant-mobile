const stintDuration = (input, props, converter, validator) => {
  if (validator(input) === undefined) {
    props.changeWouldBeStintDuration(converter(input));
  }
};

export const stintSetStintDuration = stintDuration;
