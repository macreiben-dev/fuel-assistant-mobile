import { lapConsumptionService } from "../../business/lapConsumptionService"

describe('Lap Consumption', () => {
    test('Given consumption is "hello" then do not update store.', () => {
        // ARRANGE
        let isStoreInvoked = false

        var originalProps = {
            changeLapConsumption:  (input) => {
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
        lapConsumptionService("hello", originalProps, undefined, validator)

        // ASSERT
        expect(isStoreInvoked).toBe(false)
    })

    test('Given consumption is 12 then update store with 12.', () => {
        // ARRANGE
        let storeSpy = {
            actualInput: undefined,
            isStoreInvoked : false
        }

        var originalProps = {
            changeLapConsumption:  (input) => {
                storeSpy.actualInput = input
                storeSpy.isStoreInvoked = true
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
        lapConsumptionService(12, originalProps, converter, validator)

        // ASSERT
        expect(storeSpy.actualInput).toBe(12)
        expect(storeSpy.isStoreInvoked).toBe(true)
    })
})