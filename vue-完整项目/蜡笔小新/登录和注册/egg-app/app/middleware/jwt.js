const url=require('url')
const  sendRes=require('../until/returnData')
const verifyType=require('../until/verifyType')

module.exports=options=>{
    
    return async(ctx,next)=>{
        //options是config中的config.jwt=白名单文件里的东西
        if(options.includes(url.parse(ctx.url).pathname))
        {
            //如果通过的是白名单中的,执行下一步
            await next()
            return
        }
        //验证是否携带token
        const token=ctx.get('authortoken')
        if(!token)
        {
            ctx.body=sendRes(1,'没有访问权限,请登录')
            return
        }
        //有token的,验证token是否有效
        let info
        try{
            //解析成功
            info=await verifyType(token,ctx.app.config.keys)
            // console.log(info,'...info')  { id: 0, user: 'meili', pwd: '111', role: 'teacher', iat: 1580648071 } ...info
        }catch(error){
            //解析失败
            ctx.body=sendRes(1,'权限验证失败,请登录')
        }
        // console.log(info)  { id: 0, user: 'meili', pwd: '111', role: 'teacher', iat: 1580641598 }
        ctx.info=info
        await next()
    }
}
