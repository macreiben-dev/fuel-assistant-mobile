import { describe, expect } from '@jest/globals'

import { computePitWarning } from '../../../../stores/consumption/selectors/lapConsumptions/computePitWarning'
import ArgumentError from '../../../../stores/consumption/selectors/lapConsumptions/ArgumentError'

describe('Compute Pit Warning', () => {
    test("GIVEN previsionalLapCount is indefined " +
        "THEN fail", () => {
            let actual = undefined

            try { computePitWarning(undefined, 1) }
            catch (e) {
                actual = e
            }
            expect(actual.message)
                .toBe('Argument [previsionalLapCount] is invalid because "argument is undefined", received value is [undefined].')
        })
})