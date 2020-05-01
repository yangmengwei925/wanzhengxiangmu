'use strict';

const Controller = require('egg').Controller;
class ListController extends Controller {
    async list(){
        const {ctx,app}=this
        let listRes=await ctx.service.user.list()
        ctx.body=app.sendMsg(0,'',{list:listRes})
    }
    
}
module.exports=ListController