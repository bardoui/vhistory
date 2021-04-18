import commonjs from "@rollup/plugin-commonjs";
import VuePlugin from "rollup-plugin-vue";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import cleaner from "rollup-plugin-cleaner";

export default {
    input: "src/vHistory.ts",
    dest: "dist",
    output: [
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true
        },
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.unpkg,
            format: "umd",
            name: "vHistory",
            sourcemap: true,
            globals: {
                vue: "Vue"
            }
        }
    ],
    plugins: [
        cleaner({
            targets: ["./dist/"]
        }),
        typescript({
            tsconfig: "./tsconfig.json"
        }),
        VuePlugin(),
        commonjs()
    ],
    external: ["vue", "vue-router"]
};
