'use strict';

const Controller = require('egg').Controller;
const sendRes=require('../until/returnData')
class   listController extends Controller {
    async list(){
        const{ctx}=this;
        let list=await ctx.service.news.list()
        
        // 获取每一个类别  第几季
        // let data=list.map(item=>item.class);
        // 根据类别去重
        // data=[...new Set(data)];
        // 将筛选好的剧名名字发送给前端
        let data=[]
        list.forEach(item=>{
            if(data.some(jtem=>item.class===jtem.class)) return
            data.push(item)
        })
        ctx.body=sendRes(0,'',data)
    }
    //这个是获取数据图片,信息等等
    async getInfo(){
        
        const{ctx}=this;
        const{key}=ctx.request.body;
        

        //查询数据库
        let res=await ctx.service.news.somelist(key)
        ctx.body=sendRes(0,'',[...res])
        
    }
}
module.exports=listController;