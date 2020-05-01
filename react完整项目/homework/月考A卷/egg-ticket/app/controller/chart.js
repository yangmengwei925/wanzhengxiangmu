'use strict';

const Controller = require('egg').Controller;
class ChartController extends Controller {
    async index(){
        const {ctx,app}=this
        const{id}=ctx.request.body
        let listRes=await ctx.service.isticket.list(id)
        ctx.body=app.sendMsg(0,'',{list:listRes.length})
    }
    
}
module.exports=ChartController