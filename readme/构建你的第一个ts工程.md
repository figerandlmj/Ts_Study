# ts学习-构建你的第一个ts工程
- 新建project文件夹Ts_Study
- npm init -y 初始化项目
- 新建目录src
- 新建文件src/index.ts
- 编写ts代码
  ```jsvascript
    let hello: string = 'hello world';
    document.getElementsByClassName('app')[0].innerHTML = hello;
    console.log(hello);
  ```
- npm i typescript -g 全局安装ts
- tsc -h 查看ts帮助命令
- tsc --init 生成ts配置文件tsconfig.json
- tsc ./src/index.ts 运行ts文件
- npm i webpack webpack-cli webpack-dev-server -D 安装webpack
- 新建build文件夹
- 新建webpack配置文件
  1. webpack.config.js
      ```javascript
        const merge = require('webpack-merge')
        const baseConfig = require('./webpack.base.config')
        const devConfig = require('./webpack.dev.config')
        const proConfig = require('./webpack.pro.config')

        module.exports = (env, argv) => {
          let config = argv.mode === 'development' ? devConfig : proConfig;
          return merge(baseConfig, config);
        };
      ```
  2. webpack.base.config.js
      ```javascript
        const HtmlWebpackPlugin = require('html-webpack-plugin')

        module.exports = {
          entry: './src/index.ts',
          output: {
            filename: 'app.js'
          },
          resolve: {
            extensions: ['.js', '.ts', '.tsx']
          },
          module: {
            rules: [
              {
                test: /\.tsx?$/i,
                use: [{
                  loader: 'ts-loader'
                }],
                exclude: /node_modules/
              }
            ]
          },
          plugins: [
            new HtmlWebpackPlugin({
              template: './src/tpl/index.html'
            })
          ]
        }
      ```
  3. webpack.dev.config.js
      ```javascript
        module.exports = {
          devtool: 'cheap-module-eval-source-map'
        }
      ```
  4. webpack.pro.config.js
      ```javascript
        const { CleanWebpackPlugin } = require('clean-webpack-plugin')

        module.exports = {
          plugins: [
            new CleanWebpackPlugin()
          ]
        }
      ```
- npm i ts-loader typescript -D 
- npm i html-webpack-plugin -D
- npm i clean-webpack-plugin -D
- npm i webpack-merge -D
- 新建src/tpl/index.html 文件
  ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TS-Study</title>
    </head>

    <body>
      <div class="app"></div>
    </body>

    </html>
  ```
- 配置package.json文件
    ```json
      "main": "./src/index.ts",
      "scripts": {
        "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",
        "build": "webpack --mode=production --config ./build/webpack.config.js",
        "lint": "eslint src --ext .js,.ts",
        "test": "echo \"Error: no test specified\" && exit 1"
      }
    ```
- npm run start 本地运行
- npm run build 打包构建
