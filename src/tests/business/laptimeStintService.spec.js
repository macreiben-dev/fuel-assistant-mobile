const laptimeStintService = (input, props, converter, validator) => {
    
    if(validator(input) === undefined) {
        props.changeLaptimeMinutes(input)    
    }
}


describe('Laptime stint Service', () => {
    describe('Given invalid number', () => {
        test('Then do not update store.', () => {

            // ARRANGE
            let isStoreInvoked = false

            var originalProps = {
                changeLaptimeMinutes:  (input) => {
                    isStoreInvoked = true
                }
            }

            var validator = (input) => {
                if(input == "hello") {
                    return "Some error message"
                }

                return undefined
            }
            
            // ACT
            laptimeStintService("hello", originalProps, undefined, validator)

            // ASSERT
            expect(isStoreInvoked).toBe(false)
        })
    })
})