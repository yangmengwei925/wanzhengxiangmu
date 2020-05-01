'use strict';

const Controller = require('egg').Controller;
class DetailController extends Controller {
    async option(){
        const {ctx,app}=this;
        const {id}=ctx.request.body;
        let optionRes=await ctx.service.option.list(id);

        // //校验当前用户是否投过票
        let isRes=await ctx.service.isticket.index(id,ctx.info.id)
        let isSubmit=isRes.length===0?'yes':'no'
        ctx.body=app.sendMsg(0,'',{option:[...optionRes]})
    }
    async update(){
        const {ctx,app}=this;
        const {submitData,id}=ctx.request.body;
        let successArr=0;
         //插入投票结果
        submitData.forEach(async item=>{
        let res = await ctx.service.option.update(item)
        //没查询到结果
        if(res.affectedRows !== 1){
          ++successArr
        }
        })    
        // //插入用户投票记录
        let insertRes = await ctx.service.isticket.insert(id,ctx.info.id) 

        if(insertRes.affectedRows !== 1 || successArr>0){
        ctx.body = app.sendMsg(1,'系统故障')
        return
        }

        ctx.body = app.sendMsg(0,'投票成功')
        }
}
module.exports=DetailController