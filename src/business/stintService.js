const laptimeStintMinutes = (input, props, converter, validator) => {
    console.log('laptimeStintMinutes invoked')
    if(validator(input) === undefined) {

        props.changeLaptimeMinutes(converter(input))    
    }
}

const laptimeStintSeconds = (input, props, converter, validator) => {
    console.log('laptimeStintSeconds invoked')
    if(validator(input) === undefined) {

        props.changeLaptimeSeconds(converter(input))    
    }
}


export const stintServiceLaptimeMinutes = laptimeStintMinutes
export const stintServiceLaptimeSeconds = laptimeStintSeconds