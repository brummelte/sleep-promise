/* eslint-disable filenames/match-exported */
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const rollupConfig = {
    input: 'lib/main.js',
    output: [
        { exports: 'default', file: 'build/cjs.js', format: 'cjs' },
        { file: 'build/esm.mjs', format: 'es' },
    ],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' }), terser()],
};

export default rollupConfig;
