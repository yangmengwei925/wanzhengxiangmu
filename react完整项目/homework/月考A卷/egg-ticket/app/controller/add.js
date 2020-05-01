'use strict';

const Controller = require('egg').Controller;
class AddController extends Controller {
    async add(){
        const {ctx,app}=this
        const {title,description,isRadio,anonymous,deadline,option}=ctx.request.body;
        // console.log(option)
        // console.log(title,description,isRadio,anonymous,deadline)
        let insertData={
            id:null,
            title,
            description,
            isRadio,
            anonymous,
            deadline,
            qqnumber:ctx.info.qqnumber,
            name:ctx.info.name
        }
        //往列表新增一个投票
        let listRes=await ctx.service.add.insert(insertData)
        console.log(listRes,'插入的新的投票数据')
        if(listRes.affectedRows===1)
        {
            let tictet_id=listRes.insertId;//记录当前插入的该数据的ID
            option.forEach(async item=>await ctx.service.option.insert({id:null,tictet_id,option_id:item.id,option_name:item.value,count:item.count}))
            ctx.body=ctx.app.sendMsg(0,'添加成功')
            return
        }
        ctx.body=ctx.app.sendMsg(1,'添加失败')
    }
    
}
module.exports=AddController