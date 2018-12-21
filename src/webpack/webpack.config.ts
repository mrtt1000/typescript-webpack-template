import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackOptions} from "webpack/declarations/WebpackOptions";

const template: WebpackOptions = {
    mode: "development",
    entry: "./src/app/index.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Typescript Webpack"
    })]
};

export default template;