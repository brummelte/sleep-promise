// Store a reference to the global setTimeout,
// in case it gets replaced (e.g. sinon.useFakeTimers())
const cachedSetTimeout = setTimeout;

function createSleepPromise(timeout, { useCachedSetTimeout }) {
    const timeoutFunction = useCachedSetTimeout ? cachedSetTimeout : setTimeout;

    let timerId;
    const promise = new Promise((resolve) => {
        timerId = timeoutFunction(resolve, timeout);
    });

    return { promise, timerId };
}

export default function sleep(timeout, { useCachedSetTimeout } = {}) {
    const { promise: sleepPromise, timerId } = createSleepPromise(timeout, { useCachedSetTimeout });

    // Pass value through, if used in a promise chain
    function promiseFunction(value) {
        return sleepPromise.then(() => value);
    }

    // Normal promise
    promiseFunction.then = (...args) => sleepPromise.then(...args);
    promiseFunction.catch = Promise.resolve().catch;
    promiseFunction.cancelled = false;
    promiseFunction.cancel = () => {
        promiseFunction.cancelled = true;
        clearTimeout(timerId);
    };

    return promiseFunction;
}
