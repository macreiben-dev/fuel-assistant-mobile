const laptimeStintService = (input, props, converter, validator) => {
    
    if(validator(input) === undefined) {

        props.changeLaptimeMinutes(converter(input))    
    }
}

export const stintService = laptimeStintService