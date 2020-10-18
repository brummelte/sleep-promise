// Store a reference to the global setTimeout,
// in case it gets replaced (e.g. sinon.useFakeTimers())
const cachedSetTimeout = setTimeout;

function createSleepPromise(timeout, { useCachedSetTimeout }) {
    const timeoutFunction = useCachedSetTimeout ? cachedSetTimeout : setTimeout;

    return new Promise((resolve) => {
        timeoutFunction(resolve, timeout);
    });
}

export default function sleep(timeout, { useCachedSetTimeout } = {}) {
    const sleepPromise = createSleepPromise(timeout, { useCachedSetTimeout });

    // Pass value through, if used in a promise chain
    function promiseFunction(value) {
        return sleepPromise.then(() => value);
    }

    // Normal promise
    // eslint-disable-next-line functional/immutable-data
    promiseFunction.then = (...args) => sleepPromise.then(...args);
    // eslint-disable-next-line functional/immutable-data
    promiseFunction.catch = Promise.resolve().catch;

    return promiseFunction;
}
