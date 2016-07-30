# sleep-promise
*sleep-promise* resolves a promise after a specified delay.

## Installation
### node.js
    npm install --save sleep-promise

### jspm
    jspm install npm:sleep-promise

## Usage ES2016
```javascript
import sleep from 'sleep-promise';

(async () => {
    await sleep(2000);
    console.log('2 seconds later …');
})();
```

## Usage ES2015
```javascript
import sleep from 'sleep-promise';

sleep(2000).then(() => {
    console.log('2 seconds later …');
});
```

## Usage ES5
```javascript
let sleep = require('sleep-promise');

sleep(2000).then(function() {
    console.log('2 seconds later …')
});
```

**Helper to delay a promise chain**

to delay a promise chain pass `sleep.delay(timeout)` to the `then`

## Usage ES2015
```javascript
import sleep from 'sleep-promise';

let trace = x => { console.log(x); return x; }

sleep(2000)
    .then(() => "hello")
    .then(trace)
    .then(sleep.delay(1000))
    .then(x => x+" world")
    .then(trace)
    .then(sleep.delay(500))
    .then(x => x+"!")
    .then(trace)
```
