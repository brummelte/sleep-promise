module.exports = {
    coverageReporters: ['json', 'lcov', 'text'],
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: 'coverage/junit', outputName: 'js-test-results.xml' }],
    ],
};
