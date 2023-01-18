const floatValidation = function validate(input) {

    const formatError = (input, inputType) => {
        const message = "Given value [" + input + "] is not a number. Type is [" + inputType + "]."

        console.warn(message)

        return message
    }
    
    let inputType = typeof input

    if(typeof input == 'number'){ 
        return undefined
    }
    let actual = parseFloat(input)

    if(isNaN(actual)) {
        return formatError(input, inputType)
    }

    return undefined
}

export const floatValidator = floatValidation