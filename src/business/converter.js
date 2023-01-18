const floatConversion = (input) => {
    const parsed = parseFloat(input);

    if (isNaN(parsed)) { return undefined; }

    return parsed
}

export const floatConverter = floatConversion