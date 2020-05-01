const url=require('url')
const jwt=require('jsonwebtoken')
const verifyType=require('../until/veriType')
module.exports=options=>{
    return async (ctx,next)=>{
        //白名单不需要验证
        if(options.includes(url.parse(ctx.url).pathname))
        {
            await next()
            return
        }
        //验证是否携带token
        const token=ctx.get('token')
        if(!token)
        {
            ctx.body=app.sendMsg(1,'没有权限访问,请重新登陆')
            return
        }
        //拿到token,验证token是否有效
        let info
        try{
            info=await verifyType(token,ctx.app.config.keys)
        }catch(error){
            ctx.body=ctx.app.sendMsg(1,'权限验证失败,请重新登录')
            return
        }
        //验证用户是否超时登录
        let {signTime}=info;
        let nowTime=new Date().getTime();
        let time=(nowTime-signTime)/1000/60/60;
        if(time>=6)
        {
            ctx.body=ctx.app.sendMsg(1,'登录超时,请重新登录')
            return
        }
        ctx.info=info
        // console.log(ctx.info,'...info')
        await next()
    }
}