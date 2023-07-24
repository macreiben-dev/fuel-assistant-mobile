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

        it.each([
            [[5, 5], 1],
            [[5, 4], 1],
            [[5, 3], 1],
            [[5, 2], 1],
            [[5, 1], 1],
            [[35, 32], 1],
            [[35, 31], 1],
        ])('GIVEN [remainigLapCount,maxDoableLapCount] is %p THEN return %p',
            (numbers, result) => {
                let actual = computePitWarning(numbers[0], numbers[1])
                expect(actual).toBe(result)
            })
    })
})

