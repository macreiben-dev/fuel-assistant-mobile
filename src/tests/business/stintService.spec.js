import { stintServiceLaptimeMinutes } from "../../business/stintService"


describe('Laptime stint Service', () => {
    describe('Given invalid number for laptimeMinutes', () => {
        test('Then do not update laptimeMinutes in store.', () => {

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
            stintService("hello", originalProps, undefined, validator)

            // ASSERT
            expect(isStoreInvoked).toBe(false)
        })
    })

    describe('Given a valid number for laptimeMinutes', () => {
        test('and the number value is 12 then update laptimeMinutes store with 13', () => {
             // ARRANGE
            let changeLaptimeMinutes = {
                actualInput: undefined,
                isStoreInvoked : false
            }

            var originalProps = {
                changeLaptimeMinutes:  (input) => {
                    changeLaptimeMinutes.actualInput = input
                    changeLaptimeMinutes.isStoreInvoked = true
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
            stintService(12, originalProps, converter, validator)

            // ASSERT
            expect(changeLaptimeMinutes.actualInput).toBe(12)
            expect(changeLaptimeMinutes.isStoreInvoked).toBe(true)
        })
    })
})