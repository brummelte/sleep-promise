module.exports = function sleep(timeout) {
    return new Promise(
        function(resolve) {
            setTimeout(function() {
                resolve();
            }, timeout);
        }
    );
};
