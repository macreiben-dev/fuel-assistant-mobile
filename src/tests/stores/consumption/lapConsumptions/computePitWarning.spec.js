import { describe, expect } from '@jest/globals'

import { computePitWarning } from '../../../../stores/consumption/selectors/lapConsumptions/computePitWarning'
import ArgumentError from '../../../../stores/consumption/selectors/lapConsumptions/ArgumentError'

describe('Compute Pit Warning', () => {
    describe('Parameter Sanitization', () => {
        test("GIVEN previsionalLapCount is indefined THEN fail", () => {
            let actual = undefined

            try { computePitWarning(undefined, 1) }
            catch (e) {
                actual = e
            }
            expect(actual.message)
                .toBe('Argument [previsionalLapCount] is invalid because "argument is undefined", received value is [undefined].')
        })

        test("GIVEN maxDoableLapCount is indefined THEN fail", () => {
            let actual = undefined

            try { computePitWarning(1, undefined) }
            catch (e) {
                actual = e
            }
            expect(actual.message)
                .toBe('Argument [maxDoableLapCount] is invalid because "argument is undefined", received value is [undefined].')
        })
    })
    test('GIVEN remainingLapCount is 4 '
        + 'maxDoableLapCount is 2 '
        + 'THEN return 1', () => {
            let actual = computePitWarning(4, 2)
            expect(actual).toBe(1)
        })

    describe('Pit warning is on', () => {
        const PIT_WARNING_ON = 1;

        it.each([
            [[5, 4], PIT_WARNING_ON],
            [[5, 3], PIT_WARNING_ON],
            [[5, 2], PIT_WARNING_ON],
            [[5, 1], PIT_WARNING_ON],
            [[35, 32], PIT_WARNING_ON],
            [[35, 31], PIT_WARNING_ON],
        ])('GIVEN [remainigLapCount,maxDoableLapCount] is %p THEN return %p',
            (numbers, result) => {
                let actual = computePitWarning(numbers[0], numbers[1])
                expect(actual).toBe(result)
            })
    })

    describe('Pit warning is off', () => {
        const PIT_WARNING_OFF = 0;

        it.each([
            [[5, 5], PIT_WARNING_OFF],
            [[5, 6], PIT_WARNING_OFF],
            [[5, 7], PIT_WARNING_OFF],
            [[5, 8], PIT_WARNING_OFF],
            [[5, 9], PIT_WARNING_OFF],
            [[35, 36], PIT_WARNING_OFF],
            [[35, 37], PIT_WARNING_OFF],
        ])('GIVEN [remainigLapCount,maxDoableLapCount] is %p THEN return %p',
            (numbers, result) => {
                let actual = computePitWarning(numbers[0], numbers[1])
                expect(actual).toBe(result)
            })
    })
})

