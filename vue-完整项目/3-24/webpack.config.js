const path =require('path');
 let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    devServer:{
        port:8888,//启动服务
        progress:true,//在启动时有个进度条
        contentBase:'./dist',//指定的目录请求的静态资源路径
        compress:true//是否开启Gzip
    },
   //出口文件 可以是对象 也可以是 数组  入口文件
    entry: './src/index.js',
    output: {
        // filename: 'bundle.[hash].js',//打包的文件叫什么名//
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, './dist')
      },
      modle:{
        rules:[
           {
               test:/\.js$/,
               use:[
                   {
                       loader:'babel-loader',
                       options: {
                        presets: ['@babel/preset-env'],
                        //安装@babel/plugin-proposal-decorators 处理装饰器
                        //@babel/plugin-proposal-class-properties 处理es7中一些高级语法
                        //@babel/plugin-transform-runtime 处理转换过程公共方法的抽离 比如 _classCallCheck
                        plugins: [['@babel/plugin-proposal-decorators', {"legacy": true}],
                          ['@babel/plugin-proposal-class-properties', {"loose": true},],
                          '@babel/plugin-transform-runtime'
                        ]
                      }
                     
                   }
               ]
           },
           {
               test:/\.css$/,
               use:[

               ]
           }
        ]
      },
    plugins:[
        new HtmlWebpackPlugin({
            //引入的文件位置
            template:'./index.html',
            //打包之后的文件名字
            filename:"index.html",
            minify:{
                removeAttributeQuotes:true,//打包的时候双引号没了,
                collapaseWhitespace:true//单行
            }
        })
    ]
       
    
}
