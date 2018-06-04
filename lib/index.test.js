import { performance } from 'perf_hooks';
import sleep from './index';

test('async await', async () => {
    const start = performance.now();
    await sleep(20);
    expect(performance.now() - start).toBeGreaterThanOrEqual(19);
});

test('then', async () => {
    const start = performance.now();
    return sleep(20).then(() => {
        expect(performance.now() - start).toBeGreaterThanOrEqual(19);
    });
});

test('promise chain value passing', async () =>
    Promise.resolve()
        .then(() => 'test')
        .then(sleep(20))
        .then((value) => {
            expect(value).toEqual('test');
        }));

test('promise chain sleeping', async () => {
    const start = performance.now();

    return Promise.resolve()
        .then(sleep(20))
        .then(() => {
            expect(performance.now() - start).toBeGreaterThanOrEqual(19);
        });
});

test('delayed sleep', async () => {
    const start = performance.now();

    const sleepPromise = sleep(20);

    await sleep(20);

    return sleepPromise.then(() => {
        const end = performance.now();

        expect(end - start).toBeGreaterThanOrEqual(19);
        expect(end - start).toBeLessThan(30);
    });
});

test('delayed promise chain sleeping', async () => {
    const start = performance.now();

    const sleepPromise = sleep(20);

    return (
        sleep(20)
            .then(() => 'test')
            // Must not sleep again because 'sleepPromise' is already resolved
            .then(sleepPromise)
            .then(() => {
                const end = performance.now();

                expect(end - start).toBeGreaterThanOrEqual(19);
                expect(end - start).toBeLessThan(30);
            })
    );
});

test('delayed promise chain value passing', async () => {
    const sleepPromise = sleep(20);

    return sleep(20)
        .then(() => 'test')
        .then(sleepPromise)
        .then((value) => {
            expect(value).toEqual('test');
        });
});

test('call global setTimeout (default)', async () => {
    const spySetTimeout = jest.spyOn(global, 'setTimeout');
    await sleep(20);
    expect(spySetTimeout).toHaveBeenCalledTimes(1);
});

test('call cached setTimeout', async () => {
    const spySetTimeout = jest.spyOn(global, 'setTimeout');
    jest.useFakeTimers(); // Replace global setTimeout
    await sleep(20, {
        useCachedSetTimeout: true
    });
    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(spySetTimeout).toHaveBeenCalledTimes(1);
});
