import { stintServiceLaptimeMinutes, stintServiceLaptimeSeconds } from "../../business/stintService"


describe('Laptime stint Service', () => {
    describe('Given invalid number for laptimeMinutes', () => {
        test('Then do not update laptimeMinutes in store.', () => {

            // ARRANGE
            let isStoreInvoked = false

            var originalProps = {
                changeLaptimeSeconds:  (input) => {
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
            stintServiceLaptimeMinutes("hello", originalProps, undefined, validator)

            // ASSERT
            expect(isStoreInvoked).toBe(false)
        })
    })

    describe('Given a valid number for laptimeMinutes', () => {
        test('and the number value is 12 then update laptimeMinutes store with 13', () => {
             // ARRANGE
            let changeLaptimeSeconds = {
                actualInput: undefined,
                isStoreInvoked : false
            }

            var originalProps = {
                changeLaptimeSeconds:  (input) => {
                    changeLaptimeSeconds.actualInput = input
                    changeLaptimeSeconds.isStoreInvoked = true
                }
            }

            var validator = (input) => {
                if(input == 12) {
                    return undefined
                }

                return "Some validation error message."
            }

            var converter = (input) => {
                if(input == 12) {
                    return 12
                }
                return undefined
            }

            // ACT
            stintServiceLaptimeSeconds(12, originalProps, converter, validator)

            // ASSERT
            expect(changeLaptimeSeconds.actualInput).toBe(12)
            expect(changeLaptimeSeconds.isStoreInvoked).toBe(true)
        })
    })


    describe('Given invalid number for laptimeSeconds', () => {
        test('Then do not update laptimeSeconds in store.', () => {

            // ARRANGE
            let isStoreInvoked = false

            var originalProps = {
                changeLaptimeSeconds:  (input) => {
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
            stintServiceLaptimeSeconds("hello", originalProps, undefined, validator)

            // ASSERT
            expect(isStoreInvoked).toBe(false)
        })
    })

})