# sleep-promise

_sleep-promise_ resolves a promise after a specified delay.

## Installation

### node.js

    npm install sleep-promise

## Usage async / await

```javascript
import sleep from 'sleep-promise';

(async () => {
    await sleep(2000);
    console.log('2 seconds later …');
})();
```

## Usage ES5

```javascript
var sleep = require('sleep-promise');

sleep(2000).then(function() {
    console.log('2 seconds later …');
});
```

## Usage in a promise chain

```javascript
import sleep from 'sleep-promise';

let trace = value => {
    console.log(value);
    return value;
};

sleep(2000)
    .then(() => 'hello')
    .then(trace)
    .then(sleep(1000))
    .then(value => value + ' world')
    .then(trace)
    .then(sleep(500))
    .then(value => value + '!')
    .then(trace);

// [2 seconds sleep]
// hello
// [1 second sleep]
// hello world
// [500 ms sleep]
// hello world!
```

## Usage in a test file that mocks setTimeout

```javascript
import sinon from 'sinon';
import sleep from 'sleep-promise';

const clock = sinon.useFakeTimers();

async(() => {
    await sleep(2000);
    clock.tick(2000);
    console.log('instant, 2 seconds faked by sinon');

    await sleep(2000, { useCachedSetTimeout: true });
    console.log('2 seconds later, cached global setTimeout before sinon replaced it');
})();
```
