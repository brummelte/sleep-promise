import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
    input: 'lib/index.js',
    output: [{ file: 'build/cjs.js', format: 'cjs' }, { file: 'build/esm.mjs', format: 'es' }],
    plugins: [resolve(), babel({ exclude: 'node_modules/**' }), minify({ comments: false })],
};
