const sleep = require('./index');

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

test('promise chain value passing', async () => {
    return Promise.resolve()
        .then(() => 'test')
        .then(sleep(20))
        .then(value => {
            expect(value).toEqual('test');
        });
});

test('promise chain sleeping', async () => {
    const start = performance.now();
    return Promise.resolve()
        .then(sleep(20))
        .then(value => {
            expect(performance.now() - start).toBeGreaterThanOrEqual(19);
        });
});
