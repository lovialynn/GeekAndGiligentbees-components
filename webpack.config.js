const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./example/src/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "./example/src/app.js"),
    output: {
        path: path.join(__dirname, "example/dist"),
        filename: "bundle.js",
        assetModuleFilename: 'img/[name][ext]'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },

            // 导入less文件
            // {
            //     test: /\.css$/,
            //     use: [
            //         // MiniCssExtractPlugin.loader,
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader"
            //         },

            //     ]
            // },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: "style-loader"
                    // },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    },

                ]
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

                //解析
                parser: {
                    //转base64的条件
                    dataUrlCondition: {
                        maxSize: 25 * 1024, // 25kb
                    }
                },
                // generator: {
                //     //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                //     // filename: 'img/[name].[hash:6][ext]',
                //     //打包后对资源的引入，文件命名已经有/img了
                //     // publicPath: './'
                // },
            },
            // {
            //     test: /\.(jpg|png|gif)/,
            //     loader: 'url-loader',
            //     type: 'asset/resource',
            //     // options: {
            //     //     limit: 10000,
            //     //     name: '[name].[hash:7].[ext]',
            //     //     esModule:false,
            //     //     outputPath: 'img/'
            //     // }
            // },
        ]
    },
    plugins: [htmlWebpackPlugin,
        new MiniCssExtractPlugin({
            filename: 'css/[name][contenthash].css',
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        // new webpack.NamedChunksPlugin(), // 使用该插件可以修改打包时的chunkName,在进行chunk缓存优化时，十分有用
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        compress: true,
        port: 3001,
        open: true,
    }
};