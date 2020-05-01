
const path = require('path');
//处理html的插件
let HtmlWebpackPlugin = require('html-webpack-plugin');//安装插件

let MiniCssExtractPlugin = require('mini-css-extract-plugin');//安装插件
let {CleanWebpackPlugin}=require('clean-webpack-plugin');//安装插件
let OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');//安装
let TerserPlugin= require('terser-webpack-plugin')//安装
//下载一个vue包
let VueLoaderPlugin = require('vue-loader/lib/plugin');
//const CopyPlugin = require('copy-webpack-plugin');//复制
//OptimizeCssAssetsWebpackPlugin 压缩css文件
//用法 optimization minimizer 插件:[new OptimizeCssAssetsWebpackPlugin({})]//压缩css
//缺陷 js 不会压缩  用到terser-webpack-plugin
module.exports = {
  optimization:{//4.0webpack之后的优化项
    minimizer:[new OptimizeCssAssetsWebpackPlugin({}),new OptimizeCssAssetsWebpackPlugin()]//压缩css
    //可以压缩css js出现问题了
  },
 // mode: 'development',//默认production  打包后生成的文件是否压缩
mode:'production',//线上 打包后的文件是否压缩正确
// devtool:'source-map',
  devServer: {
    port: 8888,//启动服务的端口
    progress: true,//进度条
    contentBase: './dist',//请求的静态资源路径
    compress: true,// 是否开启 Gzip
    proxy:{//服务器向服务器发送 在 exprss 中处理一下
      //  '/api':'http://localhost:9999'
      '/api':{
        target:'http://localhost:9999',
        pathRewrite:{
          '/api':''//发送到后台的时/api就没了
        }
      }
    },
    //合作开发一个项目 后台的接口没开发完 可模拟
     before(app){
    app.get('/userList',function(req,res){
        res.json({msg:"hello Am before"})
    })
  }
  },
 
  devtool:'source-map',//源码映射
  //入口文件 entry:可以是对象 数组 字符串
  entry: './src/index.js',

  //出口文件
  output: {
    filename: 'bundle.[hash:10].js',//打包的文件叫什么名字
    path: path.join(__dirname, './dist')
  },

  /*
  * loader的原则: 单一职责原则  一个loader只做一件事
  * */
  module: {
    //规则
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            //babel-loader 加载babel的
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              //@babel/plugin-proposal-decorators 处理装饰器
              //@babel/plugin-proposal-class-properties 处理es7中一些高级语法
              //@babel/plugin-transform-runtime 处理转换过程公共方法的抽离 比如 _classCallCheck
              plugins: [['@babel/plugin-proposal-decorators', {"legacy": true}],
                ['@babel/plugin-proposal-class-properties', {"loose": true},],
                '@babel/plugin-transform-runtime'
              ]
            }
          },
        ],
        include: path.join(__dirname, './src'),
        exclude: /node_modules/
      },
      {
        /*test: 正则表达式的匹配后缀*/
        test: /\.css$/,
        /*use: 使用什么loader加载*/
        use: [
          /*
          * loader加载是按照顺序加载的
          * 使用use的时候 先右后左 先下后上
          *
          * style-loader : 将css代码插入到 html的head中  MiniCssExtractPlugin.loader link
          * css-loader : 让我们识别css的模块
          *
          * loader:写法
          *   写法一: MiniCssExtractPlugin.loader
          *
          * */
          {loader: MiniCssExtractPlugin.loader},{
            loader:'css-loader',
            options:{
              modules:true
            },
          } ,
          'postcss-loader'//安装
        ]
        

      },
      //先sass 翻译css-> 打包js css-sloader  文件编译成单独文件 sass-loader
      {
        test:/\.(sc|sa)ss$/,
        use:[
          {loader:MiniCssExtractPlugin.loader},
           'css-loader',//安装
          "sass-loader",//安装
          'postcss-loader',//安装

        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },{
        test:/\.vue$/,
        use:[{
          loader: 'vue-loader',
          options: {
            //识别 <template> 模板
            compiler: require('vue-template-compiler'),
            //加载资源 <img src='./logo.png'>
            transformAssetUrls: {
              video: ['src', 'poster'],
              source: 'src',
              img: 'src',
              image: ['xlink:href', 'href'],
              use: ['xlink:href', 'href']
            }
          }
        }],
        include: path.join(__dirname, './src'),
        exclude: /node_modules/ 
      }

      /*
      * file-loader : 在打包后的目录中生成一个文件
      * url-loader :  会以base64的形式放到bundle.js中
      * */

    ]

  },
  resolve: {
    alias:{
      //加载vue哪个版本 2.0版本  vue.common.js vue1.0的版本
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      //引入的文件位置
      template: './src/index.html',
      //打包之后的文件名字
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,//打包的时候双引号没了
        collapseWhitespace: true//单行压缩
      }
    }),
    //实例化
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    //清除 dist文件夹的东西
    new CleanWebpackPlugin(),
    //new CopyPlugin([{ from: 'src', to: 'aa' }] )//把src复制到dist  aa
    // { from: 'other', to: 'public' },)
    new VueLoaderPlugin()
  ]
};







