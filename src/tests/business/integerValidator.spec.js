
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

describe('Given input is a text', () => {
    test('and input is hello then fail', () => {

        var actual = integerValidation("hello")

        expect(actual).toBe("Given value [hello] is not a number. Type is [string].")
    })
    test('and input is helloAgain then fail', () => {

        var actual = integerValidation("helloAgain")

        expect(actual).toBe("Given value [helloAgain] is not a number. Type is [string].")
    })
})

describe('Given input is a number as text', () => {
    test('and input is string "13" then fail', () => {
        
        var actual = integerValidation("13")

        expect(actual).toBe("Given value [13] is not a number. Type is [string].")
    })
})