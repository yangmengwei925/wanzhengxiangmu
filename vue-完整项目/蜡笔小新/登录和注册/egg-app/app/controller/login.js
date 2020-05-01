'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken') //在这用jsonwebtoken提供的加密方法
const sendRes=require('../until/returnData')
class   LoginController extends Controller {
  //登录方法
  async login() {
  const { ctx,app } = this;
   const{user,pwd}=ctx.request.body
  //  if(user==='')
  //  {
  //    ctx.body={code:1,msg:'用户名不能为空'}
  //    return
  //  }
  //  if(pwd==='')
  //  {
  //    ctx.body={code:1,msg:'密码不能为空'}
  //    return
  //  }
   //查询数据库
   let searchRes=await ctx.service.user.find(user)
   if(searchRes.length===0)
   {
    //  ctx.body=sendRes(1,'账户不存在,去注册')
    ctx.body={code:1,msg:'帐户不存在,去注册'}
     return
   }
   if(searchRes[0].pwd!==pwd)
   {
    //  ctx.body=sendRes(1,'密码错误')
    ctx.body={code:1,msg:'密码错误'}
     return
   }
   //jwt.sign 加密方法
   let token=jwt.sign({...searchRes[0]},app.config.keys)
   //token是加密后的帐户密码和app自带的密钥
    ctx.body={code:0,msg:'登录成功',data:{token}}
  }
  async register(){
    const { ctx,app } = this;
   const{user,pwd}=ctx.request.body
   let res=await this.service.user.insert(user)
   if(res.length>0)
   {
     ctx.body=sendRes(1,'帐号已存在')
     return
   }
   if(res.length===0)
   {
     let registerRes=await ctx.service.user.insert(pwd,user)
     if(registerRes.affectedRows===1)
     {
       ctx.body=sendRes(2,'注册成功')
       return
     }
     ctx.body=sendRes(1,'服务器故障,注册失败')
   }
  }
}

module.exports = LoginController;
