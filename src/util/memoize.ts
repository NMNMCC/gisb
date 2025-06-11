/* eslint-disable @typescript-eslint/no-explicit-any */
export const memoize = <F extends (...any: any[]) => any>(
    fn: F,
    timeout = Infinity,
): F => {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);

        if (timeout != Infinity) setTimeout(() => cache.delete(key), timeout);

        return result;
    } as F;
};
