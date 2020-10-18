/* eslint-disable filenames/match-exported */
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

const rollupConfig = {
    input: 'lib/main.js',
    output: [
        { file: 'build/cjs.js', format: 'cjs' },
        { file: 'build/esm.mjs', format: 'es' },
    ],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' }), minify({ comments: false })],
};

export default rollupConfig;
