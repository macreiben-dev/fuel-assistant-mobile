import ArgumentError from "./ArgumentError";

const computePitWarning = (previsionalLapCount, maxDoableLapCount) => {

    if (previsionalLapCount === undefined) {
        throw new ArgumentError(
            "previsionalLapCount",
            "argument is undefined",
            previsionalLapCount)
    }

    if (maxDoableLapCount === undefined) {
        throw new ArgumentError(
            "maxDoableLapCount",
            "argument is undefined",
            maxDoableLapCount)
    }

    let deltaMaxLapCount = previsionalLapCount - maxDoableLapCount;

    if (deltaMaxLapCount > 0 && deltaMaxLapCount < 5) {
        return 1;
    }
    return 0;
}

export { computePitWarning }