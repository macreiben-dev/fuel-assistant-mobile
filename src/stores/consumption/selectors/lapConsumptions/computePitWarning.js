import ArgumentError from "./ArgumentError";

const computePitWarning = (previsionalLapCount, maxDoableLapCount) => {

    if (previsionalLapCount === undefined) {
        throw new ArgumentError(
            "previsionalLapCount",
            "argument is undefined",
            previsionalLapCount)
    }

    let pitwarning = 0;

    let deltaMaxLapCount = maxDoableLapCount - previsionalLapCount;

    if (deltaMaxLapCount < 5) {
        return 1;
    }
    return 0;
}

export { computePitWarning }