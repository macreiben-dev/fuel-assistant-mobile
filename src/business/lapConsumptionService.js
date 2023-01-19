const lapConsumption = (input, props, converter, validator) => {

    if(validator(input) === undefined) {
        props.changeLapConsumption(converter(input))    
    }
}

export const lapConsumptionService = lapConsumption