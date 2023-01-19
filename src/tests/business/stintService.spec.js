import { stintServiceLaptimeMinutes, stintServiceLaptimeSeconds } from "../../business/stintService"


describe('Laptime minutes', () => {
    test('Given laptime minutes is "hello" then do not update laptimeMinutes in store.', () => {

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

    test('Given laptime minutes is 12 then update laptimeMinutes store with 13', () => {
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
        stintServiceLaptimeMinutes(12, originalProps, converter, validator)

        // ASSERT
        expect(changeLaptimeMinutes.actualInput).toBe(12)
        expect(changeLaptimeMinutes.isStoreInvoked).toBe(true)
    })
})
describe('Laptime seconds', () => {
    test('Given laptimeSeconds is "hello" then do not update laptimeSeconds in store.', () => {

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
    test('Given laptime minutes is 12 then update laptimeMinutes store with 13', () => {
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