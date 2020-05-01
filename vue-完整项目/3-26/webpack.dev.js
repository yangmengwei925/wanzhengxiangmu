let {smart}= require('webpack-merge')
//既想要bsae的配置有需要 自己的配置
let base =require('./webpack.base');
module.exports =smart(base,{
    mode:'development',
    devServer: {//开发环境
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
      devtool: 'source-map',
})