import ArgumentError from "./ArgumentError";

function isExecutedLapCountGreaterThanStintMaxLap(executedLapCount, stintMaxLapCount) {
    return executedLapCount >= stintMaxLapCount;
}

function isFiveLapRemaining(deltaMaxLapCount) {
    return deltaMaxLapCount > 0 && deltaMaxLapCount < 5;
}

const ARGUMENT_NOT_DEFINED = "argument is undefined"

const computePitWarning = (stintMaxLapCount, executedLapCount) => {

    if (executedLapCount === undefined) {
        throw new ArgumentError(
            "executedLapCount",
            ARGUMENT_NOT_DEFINED,
            executedLapCount)
    }

    if (stintMaxLapCount === undefined) {
        throw new ArgumentError(
            "stintMaxLapCount",
            ARGUMENT_NOT_DEFINED,
            stintMaxLapCount)
    }

    let deltaMaxLapCount = stintMaxLapCount - executedLapCount;

    if (isFiveLapRemaining(deltaMaxLapCount)
        || isExecutedLapCountGreaterThanStintMaxLap(executedLapCount, stintMaxLapCount)) {
        return 1;
    }
    return 0;
}

export { computePitWarning }
