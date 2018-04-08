import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'lib/index.js',
    output: [
        { file: 'build/bundle.js', format: 'cjs' },
        { file: 'build/bundle.mjs', format: 'es' },
    ],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' })],
};
