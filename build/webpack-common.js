// plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'development',//模式 开发环境 还是 生产环境
    entry: {// 入口文件
        main:'./src/js/index.js'
    },
    output: {//出口文件
        path:path.resolve(__dirname, '../dist'),
        filename: "[name].js"
    },
    devtool: "cheap-model-eval-source-map", //实现错误的映射  正确的在我们开发环境中展示出来
    plugins: [
        new HtmlWebpackPlugin({
            title:'6666666',
            template: './src/index.html', //指定要打包的html文件
            filename:'./view/index.html', // 指定要输出到dist文件的html文件
            chunks: ['../main.js']
        }),
        new HtmlWebpackPlugin({
            title:'6666666',
            template: './src/view/footer.html', //指定要打包的html文件
            filename:'./view/footer.html', // 指定要输出到dist文件的html文件
            chunks: ['../main.js']
        })
    ]
}
