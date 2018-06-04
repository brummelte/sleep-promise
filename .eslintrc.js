module.exports = {
    extends: '@brummelte/eslint-config',
    env: { es6: true },
    overrides: [
        {
            files: ['lib/**/*.test.js'],
            env: { jest: true },
        },
    ],
};
