const laptimeStintService = (input, props, converter, validator) => {
    console.log('stintService invoked')
    if(validator(input) === undefined) {

        props.changeLaptimeMinutes(converter(input))    
    }
}

export const stintService = laptimeStintService