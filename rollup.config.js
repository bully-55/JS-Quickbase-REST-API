import typescript from "rollup-plugin-typescript"

export default {
    input: "./main.ts",
    output: {
        file: "./build/bundle.min.js",
        format: "iife",
        name: "bundle",
    },
    plugins: [
        typescript({lib: ["es5", "es6", "dom"], target: "es5"})
    ],
}