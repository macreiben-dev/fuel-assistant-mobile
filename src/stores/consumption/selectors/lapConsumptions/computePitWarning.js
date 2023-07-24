import ArgumentError from "./ArgumentError";

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

    if (deltaMaxLapCount > 0 && deltaMaxLapCount < 5) {
        return 1;
    }
    return 0;
}

export { computePitWarning }