export const passthrough = <TArgs extends readonly unknown[], TReturn>(
    fn: (...args: TArgs) => TReturn,
    callback: (result: TReturn) => void,
) => {
    return (...args: TArgs): TReturn => {
        const result = fn(...args);
        callback(result);
        return result;
    };
};
