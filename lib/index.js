function createSleepPromise(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

function sleep(timeout) {
    const sleepPromise = createSleepPromise(timeout);

    // Pass value through, if used in a promise chain
    function promiseFunction(value) {
        return sleepPromise.then(() => value);
    }

    // Normal promise
    promiseFunction.then = (...args) => sleepPromise.then(...args);
    promiseFunction.catch = Promise.resolve().catch;

    return promiseFunction;
}

export default sleep;
