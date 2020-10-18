module.exports = {
    presets: [['@babel/env', { targets: 'defaults', bugfixes: true }]],
    env: { test: { plugins: ['@babel/plugin-transform-runtime'] } },
};
