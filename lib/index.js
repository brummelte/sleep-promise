var sleep = function sleep(timeout) {
    return new Promise(function(resolve) {
        setTimeout(resolve, timeout);
    });
};

sleep.delay = function delay(timeout) {
    return function(value){
        var returnValue = function() { return value }
        return sleep(timeout).then(returnValue);
    }
};

module.exports = sleep;

