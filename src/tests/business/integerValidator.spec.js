
import { floatValidator } from "../../business/validators"

describe('Given input is a text', () => {
    test('and input is hello then returns error message', () => {

        var actual = floatValidator("hello")

        expect(actual).toBe("Given value [hello] is not a number. Type is [string].")
    })
    test('and input is helloAgain then returns error message', () => {

        var actual = floatValidator("helloAgain")

        expect(actual).toBe("Given value [helloAgain] is not a number. Type is [string].")
    })
})
 
describe('Given input is a number as text', () => {
    test('and input is string "13" then returns undefined', () => {
        
        var actual = floatValidator("13")

        expect(actual).toBe(undefined)
    })
})

describe('Given input is a number as number', () => {
    test('and input is 12 then returns undefined.', () => {
        var actual = floatValidator(13)

        expect(actual).toBe(undefined)
    })

    test('and input is 25 then returns undefined.', () => {
        var actual = floatValidator(25)

        expect(actual).toBe(undefined)
    })
})