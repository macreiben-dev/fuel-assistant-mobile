const integerValidation = function validateInteger(input) {

    const formatError = (input, inputType) => {
        return "Given value [" + input + "] is not a number. Type is [" + inputType + "]."
    }
    
    let inputType = typeof input

    if(typeof input == 'number'){ 
        return undefined
    }

    return formatError(input, inputType)
}

export const integerValidator = integerValidation