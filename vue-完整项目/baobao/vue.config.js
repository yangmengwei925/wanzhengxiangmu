const fs = require('fs')
module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://bb.shoujiduoduo.com',
                pathRewrite:{'^/api':''}
            }
        },
        before:function(app){
            app.get('/api/getSongcontext',(req,res)=>{
                res.end(fs.readFileSync('./src/assets/lyrics.txt','utf8'))
            })
        }
    }
}