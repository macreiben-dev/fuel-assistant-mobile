import ArgumentError from "./ArgumentError";

function isExecutedLapCountGreaterThanStintMaxLap(executedLapCount, stintMaxLapCount) {
    return executedLapCount >= stintMaxLapCount;
}

function isFiveLapRemaining(deltaMaxLapCount) {
    return deltaMaxLapCount > 0 && deltaMaxLapCount < 5;
}

const computePitWarning = (stintMaxLapCount, executedLapCount) => {

    if (executedLapCount === undefined) {
        throw new ArgumentError(
            "executedLapCount",
            "argument is undefined",
            executedLapCount)
    }

    if (stintMaxLapCount === undefined) {
        throw new ArgumentError(
            "stintMaxLapCount",
            "argument is undefined",
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
