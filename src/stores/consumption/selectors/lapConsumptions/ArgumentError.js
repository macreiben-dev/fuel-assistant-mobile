class ArgumentError extends Error {
    constructor(argName, customMessage, value) {
        super(`Argument [${argName}] is invalid because "${customMessage}", received value is [${value}].`);
        this.argName = argName;
        this.value = value;
    }
}
export default ArgumentError