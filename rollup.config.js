import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import globals from 'rollup-plugin-node-globals';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.ts', '.tsx'];
const config = {
    input: "./src/rollup-demo/main.ts",
    output: {
        file: "./src/rollup-demo/bundle.js",
        name: "rollup-demo",
        format: "cjs",
        sourcemap: true
    },
    plugins: [
        commonjs(),
        nodeResolve({
            extensions,
            preferBuiltins: true
        }),
        babel({
            extensions,
            exclude: ['node_modules/**']
        }),
        builtins(),
        globals(),
        nodePolyfills(),
        json()
    ]
};

export default config;
