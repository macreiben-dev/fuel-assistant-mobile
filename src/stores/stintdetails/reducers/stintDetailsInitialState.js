export const initialState = {
    stints: [
        {
            key: 123,
            order: 1,
            pilot: "MacReiben",
            stintDuration: "00:50:00",
            pitDuration: "00:00:33",
            starts: "13:00:00",
            ends: "13:50:33",
            tyre: "M",
            isTyreChange: false,
            isFuel: false,
            isDriverSwap: true
        },
        {
            key: 567,
            order: 1,
            pilot: "Sancci",
            stintDuration: "00:51:00",
            pitDuration: "00:00:32",
            starts: "13:50:33",
            ends: "14:41:02",
            tyre: "S",
            isTyreChange: false,
            isFuel: false,
            isDriverSwap: false
        }
    ],
    driverSwapTimeInSeconds: 0
};
