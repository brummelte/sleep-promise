// Store a reference to the global setTimeout,
// in case it gets replaced (e.g. sinon.useFakeTimers())
const cachedSetTimeout = setTimeout;

function createSleepPromise(timeout, _setTimeout) {
    return new Promise((resolve) => {
        _setTimeout(resolve, timeout);
    });
}

export default function sleep(timeout, { useCachedSetTimeout } = {}) {
    let _setTimeout;
    if (useCachedSetTimeout) {
        _setTimeout = cachedSetTimeout;
    } else {
        _setTimeout = setTimeout;
    }

    const sleepPromise = createSleepPromise(timeout, _setTimeout);

    // Pass value through, if used in a promise chain
    function promiseFunction(value) {
        return sleepPromise.then(() => value);
    }

    // Normal promise
    promiseFunction.then = (...args) => sleepPromise.then(...args);
    promiseFunction.catch = Promise.resolve().catch;

    return promiseFunction;
}
