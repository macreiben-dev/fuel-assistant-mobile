
const floatConversion = (input) => {
    const parsed = parseFloat(input);

    if (isNaN(parsed)) { return undefined; }

    return parsed
}

describe('Float conversion', () => {
    describe('Given input is not an integer', () => {
        test('and input is "hello" then return undefined.', () => {
            let actual = floatConversion("hello")

            expect(actual).toBe(undefined)
        })

        test('and input is "helloAgain" then return undefined.', () => {
            let actual = floatConversion("helloAgain")

            expect(actual).toBe(undefined)
        })
    })

    describe('Given input is not an integer', () => {
        test('and input is "13" then return 13', () => {
            let actual = floatConversion("13")

            expect(actual).toBe(13)
        })

        test('and input is "15" then return 15', () => {
            let actual = floatConversion("15")

            expect(actual).toBe(15)
        })
    })

    describe('Given input is float', () => {
        test('and input is "13.2" then return undefined.', () => {
            let actual = floatConversion("13.2")

            expect(actual).toBe(13.2)
        })
        test('and input is "16.3" then return undefined.', () => {
            let actual = floatConversion("16.3")

            expect(actual).toBe(16.3)
        })
        test('and input is 14.5 then return undefined.', () => {
            let actual = floatConversion(14.5)

            expect(actual).toBe(14.5)
        })
        test('and input is 19.1 then return undefined.', () => {
            let actual = floatConversion(19.1)

            expect(actual).toBe(19.1)
        })
    })
})